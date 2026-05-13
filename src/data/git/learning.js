// /data/git/learning.js – Complete Git Documentation (Basic + Advanced)

export const learning = {
  basic: {
    title: "🐙 GIT BASICS: COMPLETE VERSION CONTROL GUIDE",
    description: "Comprehensive Git guide covering fundamentals: installation, configuration, basic commands, branching, merging, remotes, stashing, tagging, log exploration, undoing changes, and more.",
    topics: [
      {
        name: "1. Git Installation & Configuration",
        description: "Git is a distributed version control system. Install from git-scm.com. Configure user identity and preferences with git config. Use --global for system-wide settings, --local for repository-specific. Key config: user.name, user.email, core.editor, color.ui.",
        code: `# Install Git (Ubuntu)
sudo apt update
sudo apt install git

# Install Git (macOS)
brew install git

# Check version
git --version

# Configure user identity (required for commits)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Configure default editor
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "nano"         # Nano

# Enable colored output
git config --global color.ui auto

# View all configurations
git config --list
git config --global --list

# Set merge tool
git config --global merge.tool vscode

# Configure line endings
git config --global core.autocrlf input  # Linux/Mac
git config --global core.autocrlf true   # Windows

# Aliases (shortcuts)
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st status
git config --global alias.lg "log --oneline --graph --all"

# Now use: git st, git co, git lg

# Remove configuration
git config --global --unset user.name`,
        lineByLine: [
          "Line 2-7: Install Git on Ubuntu/macOS",
          "Line 9: git --version - Check installed version",
          "Line 12-13: git config --global user.name/email - Set author identity",
          "Line 16-17: core.editor - Set default text editor",
          "Line 20: color.ui auto - Enable colored output",
          "Line 23-24: View configuration - List all settings",
          "Line 27: merge.tool - Set merge resolution tool",
          "Line 30-31: core.autocrlf - Handle line ending differences",
          "Line 34-38: Aliases - Create shortcuts for commands",
          "Line 41: --unset - Remove a configuration"
        ],
        simpleMeaning: "Git tracks code changes. Configure your name and email first – every commit uses this identity. Aliases save typing.",
        output: "git version 2.40.0\nConfiguration set successfully",
        note: "Use --global for all repositories, --local for current repo. user.name and user.email must be set before committing."
      },
      {
        name: "2. Initializing a Repository & First Commit",
        description: "git init creates a new Git repository in current directory. git add stages files for commit. git commit takes a snapshot. The .git folder stores all history. Always use meaningful commit messages (present tense, under 50 chars).",
        code: `# Create new directory and initialize
mkdir my-project
cd my-project
git init

# Create a file
echo "# My Project" > README.md

# Check status
git status

# Stage files
git add README.md           # Stage specific file
git add .                   # Stage all files
git add *.js                # Stage all JavaScript files

# Unstage a file
git reset HEAD README.md    # Unstage (keep changes)
git rm --cached README.md   # Remove from tracking

# Commit staged changes
git commit -m "Initial commit: add README"

# Commit with detailed message
git commit -m "Add user authentication

- Add login form
- Implement JWT tokens
- Add password encryption"

# View commit history
git log
git log --oneline           # Compact view
git log --oneline --graph   # Visual branch structure

# See what changed
git diff                    # Unstaged changes
git diff --staged           # Staged changes
git diff HEAD               # All changes since last commit

# Amend last commit (add forgotten changes)
git add forgotten-file.js
git commit --amend -m "Updated commit message"

# Amend without changing message
git commit --amend --no-edit

# View commit details
git show                    # Latest commit
git show HEAD~2             # Commit 2 steps back`,
        lineByLine: [
          "Line 2-4: Create and initialize repository",
          "Line 7: Create a sample file",
          "Line 10: git status - Shows staged/unstaged changes",
          "Line 13-15: git add - Stage files for commit",
          "Line 18-19: Unstage files - Remove from staging area",
          "Line 22: git commit -m - Create snapshot with message",
          "Line 25-29: Multi-line commit message",
          "Line 32-34: git log - View commit history",
          "Line 37-38: git diff - Show changes",
          "Line 41-43: git commit --amend - Modify last commit",
          "Line 46-47: git show - Display commit details"
        ],
        simpleMeaning: "git init creates a new Git repository. git add puts files in staging area. git commit saves snapshot. git status shows what's staged, modified, or untracked.",
        output: `Initialized empty Git repository in /my-project/.git\nOn branch main\nNo commits yet\nUntracked files:\n  README.md\n\nChanges to be committed:\n  new file: README.md\n\n[main (root-commit) a1b2c3d] Initial commit: add README\n 1 file changed, 1 insertion(+)\n create mode 100644 README.md`,
        note: "Never git init inside existing repository. Use meaningful commit messages. Commit early, commit often."
      },
      {
        name: "3. Branches – Create, Switch, Delete",
        description: "Branches allow parallel development. git branch creates branches, git checkout/git switch switches branches, git branch -d deletes merged branches. main/master is default branch. Use feature branches for new work, bug branches for fixes.",
        code: `# List branches
git branch                  # Local branches
git branch -r               # Remote branches
git branch -a               # All branches (local + remote)

# Create new branch
git branch feature-login    # Create branch at current HEAD
git branch feature-api main # Create branch from main

# Switch branches (traditional)
git checkout feature-login
git checkout -b new-feature  # Create and switch

# Switch branches (modern Git 2.23+)
git switch feature-login
git switch -c new-feature    # Create and switch

# Delete branches
git branch -d feature-login  # Safe delete (merged only)
git branch -D feature-login  # Force delete (unmerged)

# Rename branch
git branch -m old-name new-name
git branch -m new-name        # Rename current branch

# Compare branches
git diff main..feature        # Show differences
git log main..feature         # Commits in feature not in main

# See branch tree
git log --oneline --graph --all

# Track upstream branch
git branch -u origin/feature  # Set upstream
git branch --set-upstream-to=origin/feature

# Show branches with last commit
git branch -v
git branch -vv                # Include upstream info

# Create branch from specific commit
git branch hotfix a1b2c3d

# Create branch from tag
git branch release v1.0.0`,
        lineByLine: [
          "Line 1-3: List branches - local, remote, all",
          "Line 5-8: Create branches - From current HEAD or specific branch",
          "Line 10-13: Switch branches - checkout (old) or switch (new)",
          "Line 15-17: Delete branches - safe vs force",
          "Line 19-21: Rename branches - current or specified",
          "Line 23-25: Compare branches - diff and log",
          "Line 27: Visual branch tree - graph",
          "Line 29-31: Upstream tracking - Connect to remote",
          "Line 33-34: Branch info - With last commit",
          "Line 36-37: From commit or tag"
        ],
        simpleMeaning: "Branches let you work on multiple features simultaneously. main branch is stable code. feature branch is sandbox. git branch creates, git switch moves you between branches.",
        output: `* main\n  feature-login\n  feature-api\n\nSwitched to branch 'feature-login'\n\nDeleted branch feature-login (was a1b2c3d)\n\n* a1b2c3d (HEAD -> feature-login) Add login\n| * d4e5f6g (main) Fix bug\n|/\n* h7i8j9k Initial commit`,
        note: "Keep branches short-lived. Name branches descriptively (feature/user-auth, bugfix/nav-crash). Delete merged branches."
      },
      {
        name: "4. Merging Branches (Fast-forward & 3-way)",
        description: "Merging integrates changes from one branch into another. Fast-forward merge (linear) when branch is directly ahead. Three-way merge creates merge commit when branches diverged. Merge conflicts occur when same lines changed differently – resolve manually, then commit.",
        code: `# Fast-forward merge (linear history)
git checkout main
git merge feature           # If feature is ahead of main

# Prevent fast-forward (create merge commit)
git merge --no-ff feature   # Always create merge commit

# Squash merge (combine all commits into one)
git merge --squash feature
git commit -m "Add feature"

# Abort merge if conflicts
git merge --abort

# View merge conflicts
git status                  # Lists conflicted files
git diff                    # Shows conflict markers

# Conflict markers
# <<<<<<< HEAD
# code from current branch
# =======
# code from merging branch
# >>>>>>> feature

# Resolve conflicts manually, then:
git add resolved-file.js
git commit -m "Merge feature branch"

# Merge strategies
git merge -s recursive feature   # Default
git merge -s ours feature        # Keep our version entirely
git merge -s subtree feature     # For subproject merging

# Verify merge
git log --oneline --graph
git diff main..feature --name-status

# Preview merge (without committing)
git merge --no-commit --no-ff feature
# Test, then commit or abort

# Merge with custom message
git merge feature -m "Merge feature-login into main"`,
        lineByLine: [
          "Line 1-3: Fast-forward merge - Simple pointer move",
          "Line 5-6: --no-ff - Force merge commit",
          "Line 8-9: Squash merge - Combine commits",
          "Line 11-12: Abort merge - Cancel if conflicts",
          "Line 14-16: Conflict detection - Identify problems",
          "Line 18-24: Conflict markers - How Git shows conflicts",
          "Line 26-28: Resolve conflicts - Manual fix then commit",
          "Line 30-32: Merge strategies - Different algorithms",
          "Line 34-35: Verify merge - Check result",
          "Line 37-39: Preview merge - Test before commit",
          "Line 41-42: Custom message - Override default"
        ],
        simpleMeaning: "Merging brings changes from one branch to another. Fast-forward moves pointer. Three-way merge creates new commit combining histories. Conflicts happen when both changed same lines – you decide which version wins.",
        output: `git checkout main\ngit merge feature\nUpdating a1b2c3d..d4e5f6g\nFast-forward\n file.js | 2 +-\n 1 file changed, 1 insertion(+), 1 deletion(-)\n\n# With conflict\nAuto-merging app.js\nCONFLICT (content): Merge conflict in app.js\nAutomatic merge failed; fix conflicts and then commit the result.\n\n# After resolution\nMerge made by the 'recursive' strategy.\n app.js | 4 ++--\n 1 file changed, 2 insertions(+), 2 deletions(-)`,
        note: "Use --no-ff for feature branches to preserve history. Test after resolving conflicts. git merge --abort is safe during conflicts."
      },
      {
        name: "5. Rebasing Branches (Linear History)",
        description: "Rebasing moves whole branch to begin at tip of another branch, creating linear history. git rebase main replays feature commits on top of main. Interactive rebase allows squashing, reordering, editing commits. Never rebase public branches others depend on.",
        code: `# Basic rebase
git checkout feature
git rebase main              # Replay feature on top of main

# Rebase with upstream changes
git fetch origin
git rebase origin/main

# Interactive rebase (last 3 commits)
git rebase -i HEAD~3

# Interactive rebase options
# pick   - use commit
# reword - change commit message
# edit   - stop to amend
# squash - combine with previous commit
# fixup  - like squash but discard message
# drop   - remove commit
# exec   - run command

# Example interactive rebase
# pick a1b2c3d Add login form
# squash d4e5f6g Fix typo in login
# pick h7i8j9k Add logout button
# becomes: Add login form + Add logout button

# Rebase onto different branch
git rebase --onto main feature~3 feature  # Move last 3 commits

# Continue rebase after resolving conflicts
git add resolved-file.txt
git rebase --continue

# Skip problematic commit
git rebase --skip

# Abort rebase
git rebase --abort

# Pull with rebase (instead of merge)
git config --global pull.rebase true
git pull origin main  # fetch + rebase`,
        lineByLine: [
          "Line 1-3: Basic rebase - Replay commits",
          "Line 5-7: Rebase with remote - Fetch then rebase",
          "Line 9-10: Interactive rebase - Edit history",
          "Line 12-18: Rebase options - Commands for history editing",
          "Line 20-24: Interactive example - Squashing commits",
          "Line 26-28: Rebase onto - Move commits to different base",
          "Line 30-32: Continue rebase - After resolving conflicts",
          "Line 34-38: Skip/Abort - Handle problems",
          "Line 40-42: Pull with rebase - Configure as default"
        ],
        simpleMeaning: "Rebasing rewrites history to make it linear. Instead of a merge commit, your changes appear as if you just made them on top of main. Interactive rebase lets you clean up commit history (squash typos, reorder commits, edit messages).",
        output: `git checkout feature\ngit rebase main\nFirst, rewinding head to replay your work on top of it...\nApplying: Add login form\nApplying: Fix typo\nApplying: Add logout button\n\n# With conflict\nApplying: Add login form\nCONFLICT (content): Merge conflict in app.js\nerror: could not apply a1b2c3d... Add login form\n\n# After resolution\nApplying: Add login form\nSuccessfully rebased and updated refs/heads/feature.`,
        note: "Never rebase public branches others use. Rebase private feature branches before merging. Use --force-with-lease instead of --force when pushing rebased branches."
      },
      {
        name: "6. Stashing Uncommitted Changes",
        description: "Stashing temporarily saves uncommitted changes without committing. git stash saves working directory and index. git stash pop applies and removes stash, git stash apply keeps it. Multiple stashes create stack. Useful when switching branches with dirty working directory.",
        code: `# Save current changes
git stash                    # Save with default message
git stash push -m "WIP: login feature"  # Named stash

# List all stashes
git stash list

# Apply stash (keeps in stash)
git stash apply              # Apply latest stash
git stash apply stash@{2}    # Apply specific stash

# Apply and remove stash
git stash pop                # Apply and drop latest
git stash pop stash@{1}      # Apply and drop specific

# Create branch from stash
git stash branch new-feature stash@{0}

# View stash contents
git stash show               # Summary
git stash show -p            # Full diff

# Remove stashes
git stash drop               # Remove latest
git stash clear              # Remove all stashes

# Stash untracked files
git stash -u                 # Include untracked
git stash -a                 # Include all files

# Partial stash (specific files)
git stash push -m "partial" -- path/to/file.js

# Stash only unstaged changes
git stash --keep-index`,
        lineByLine: [
          "Line 1-3: Stash - Save changes temporarily",
          "Line 5-6: git stash list - View all stashes",
          "Line 8-10: git stash apply - Apply without removing",
          "Line 12-14: git stash pop - Apply and remove",
          "Line 16-17: git stash branch - Create branch from stash",
          "Line 19-21: git stash show - View stash contents",
          "Line 23-25: git stash drop/clear - Remove stashes",
          "Line 27-31: Stash options for untracked files",
          "Line 33-36: Partial stash - Specific files only",
          "Line 38-39: Stash only unstaged - --keep-index"
        ],
        simpleMeaning: "Stashing puts your work-in-progress in a drawer. Need to switch branches but not ready to commit? git stash saves everything and cleans your desk. Later, git stash pop brings it back.",
        output: `git stash\nSaved working directory and index state WIP on main: a1b2c3d Add feature\nHEAD is now at a1b2c3d Add feature\n\ngit stash list\nstash@{0}: On main: WIP: login feature\nstash@{1}: On main: WIP: navigation fix\n\ngit stash pop\nOn branch main\nChanges not staged for commit:\n  modified:   app.js\n\nDropped refs/stash@{0}`,
        note: "Stash before switching branches with uncommitted changes. Use descriptive messages. Stash is local – not pushed to remote."
      },
      {
        name: "7. Remote Repositories (GitHub/GitLab)",
        description: "Remotes are versions of repository hosted on network. git remote add connects local to remote. git push uploads commits, git pull downloads and merges, git fetch downloads without merging. origin is default remote name. Multiple remotes (upstream) can be configured.",
        code: `# Add remote repository
git remote add origin https://github.com/user/repo.git
git remote add upstream https://github.com/original/repo.git

# List remotes
git remote -v                 # Show URLs
git remote show origin        # Detailed info

# Push to remote
git push origin main          # Push main branch
git push -u origin feature    # Set upstream (tracking)
git push --all origin         # Push all branches
git push --tags               # Push tags

# Pull from remote
git pull origin main          # Fetch + merge
git pull --rebase origin main # Fetch + rebase

# Fetch only (no merge)
git fetch origin              # Download changes
git fetch --all               # Fetch all remotes
git fetch origin feature      # Fetch specific branch

# Clone repository
git clone https://github.com/user/repo.git
git clone --branch main https://github.com/user/repo.git
git clone --depth 1 https://github.com/user/repo.git  # Shallow clone

# Remote management
git remote remove upstream
git remote rename origin upstream
git remote set-url origin https://new-url.git

# Prune remote branches
git remote prune origin       # Remove local refs to deleted remote branches

# View remote branches
git branch -r
git branch -a

# Sync fork with upstream
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

# Delete remote branch
git push origin --delete feature`,
        lineByLine: [
          "Line 1-3: Add remotes - origin (your) and upstream (original)",
          "Line 5-7: List remotes - Show URLs and details",
          "Line 9-13: Push commands - Upload commits",
          "Line 15-18: Pull commands - Download and merge/rebase",
          "Line 20-23: Fetch commands - Download without merging",
          "Line 25-27: Clone - Copy remote repository locally",
          "Line 29-32: Remote management - Remove, rename, change URL",
          "Line 34-35: Prune - Clean up deleted remote branches",
          "Line 37-42: Sync fork - Keep fork updated with upstream",
          "Line 44-45: Delete remote branch"
        ],
        simpleMeaning: "Remotes connect your local Git to GitHub/GitLab/Bitbucket. push uploads your commits to the cloud. pull downloads others' changes. clone copies entire repository.",
        output: `git remote add origin https://github.com/user/repo.git\ngit remote -v\norigin  https://github.com/user/repo.git (fetch)\norigin  https://github.com/user/repo.git (push)\n\ngit push -u origin main\n * [new branch]      main -> main\nBranch 'main' set up to track remote branch 'main' from 'origin'.\n\ngit pull\nUpdating a1b2c3d..d4e5f6g\nFast-forward\n file.txt | 2 +-\n 1 file changed, 1 insertion(+), 1 deletion(-)`,
        note: "git pull = git fetch + git merge. Use git pull --rebase for linear history. Never force push to shared branches."
      },
      {
        name: "8. Viewing History (git log, git diff, git show)",
        description: "git log displays commit history with various formatting. Use --oneline for compact view, --graph for branch visualization, --author to filter authors, --since/--until for date ranges. git show displays specific commit details. git diff compares commits, branches, or working directory.",
        code: `# Basic log commands
git log                       # Full history
git log --oneline             # One line per commit
git log --graph               # Branch structure
git log --oneline --graph --all  # All branches visual

# Filter by author
git log --author="John"
git log --author="John\|Jane"  # Multiple authors

# Filter by date
git log --since="2 weeks ago"
git log --until="2024-01-01"
git log --since="yesterday" --until="today"

# Filter by commit message
git log --grep="fix"          # Messages containing 'fix'

# Filter by content (pickaxe)
git log -S"function name"     # Commits that changed text

# Filter by files
git log file.txt              # History of specific file
git log -- app.js src/        # Multiple files/dirs

# Range filters
git log main..feature         # Commits in feature not in main
git log HEAD~3..HEAD          # Last 3 commits

# Statistics
git log --stat                # Changed files stats
git log --name-only           # Changed file names

# Show commit details
git show a1b2c3d              # Specific commit
git show HEAD~2               # Commit 2 back
git show HEAD:file.txt        # File at HEAD

# Compare commits
git diff a1b2c3d d4e5f6g      # Between two commits
git diff HEAD~3 HEAD          # Last 3 commits
git diff --name-only          # Only file names

# Custom formatting
git log --pretty=format:"%h - %an, %ar : %s"
# %h = hash, %an = author, %ar = relative date, %s = subject

# Find commits
git blame file.js             # Who changed each line
git reflog                    # Reference log (recover lost commits)`,
        lineByLine: [
          "Line 1-4: Basic log variations",
          "Line 6-8: Filter by author",
          "Line 10-13: Filter by date",
          "Line 15-17: Filter by message/content",
          "Line 19-21: Filter by file paths",
          "Line 23-25: Range filters",
          "Line 27-30: Statistical output",
          "Line 32-35: git show - Detailed commit information",
          "Line 37-40: git diff - Compare commits",
          "Line 42-44: Custom formatting"
        ],
        simpleMeaning: "git log is your time machine viewer. See who changed what, when, and why. Filter by author, date, or file. git blame shows who last touched each line.",
        output: `* d4e5f6g (HEAD -> main) Add user authentication\n* a1b2c3d Fix login redirect bug\n* h7i8j9k Initial commit\n\na1b2c3d - John, 2 days ago : Fix login redirect bug\nd4e5f6g - Jane, 5 hours ago : Add user authentication\n\ncommit d4e5f6g...\nAuthor: Jane Doe <jane@example.com>\nDate:   Mon Jan 15 10:30:00 2024 +0100\n\n    Add user authentication\n\n app.js | 10 ++++++++--\n 1 file changed, 8 insertions(+), 2 deletions(-)`,
        note: "Use git log --oneline --graph for quick branch overview. git reflog recovers 'lost' commits."
      },
      {
        name: "9. Undoing Changes (reset, revert, restore)",
        description: "Undo changes at different levels. git reset moves branch pointer (--soft keeps changes staged, --mixed keeps unstaged, --hard discards everything). git revert creates new commit that undoes previous commit (safe for shared branches). git restore unstages or discards working directory changes.",
        code: `# Soft reset (keep changes staged)
git reset --soft HEAD~1      # Undo last commit, keep changes staged

# Mixed reset (keep changes unstaged - default)
git reset HEAD~1             # Undo last commit, unstage changes

# Hard reset (discard everything - DANGEROUS!)
git reset --hard HEAD~1      # Completely remove last commit
git reset --hard origin/main # Match remote exactly

# Undo hard reset (if recent)
git reflog
git reset --hard HEAD@{1}    # Return to previous state

# Revert (safe for shared branches)
git revert HEAD              # Create new commit undoing last
git revert a1b2c3d           # Revert specific commit
git revert HEAD~3..HEAD      # Revert range of commits

# Restore files (Git 2.23+)
git restore file.txt         # Discard working directory changes
git restore --staged file.txt # Unstage file
git restore --source=HEAD~1 file.txt # Restore from previous commit

# Remove untracked files
git clean -n                 # Preview what would be removed
git clean -f                 # Remove untracked files
git clean -fd                # Remove untracked files and directories

# Unstage all
git reset                    # Unstage everything (--mixed)

# Remove file from Git but keep locally
git rm --cached file.txt

# Discard all local changes
git reset --hard HEAD
git clean -fd`,
        lineByLine: [
          "Line 1-3: git reset --soft - Undo commit, keep changes staged",
          "Line 5-7: git reset --mixed - Undo commit, unstage changes",
          "Line 9-11: git reset --hard - Completely remove commit",
          "Line 13-15: git reflog - Recover from hard reset",
          "Line 17-20: git revert - Safe undo for shared branches",
          "Line 22-25: git restore - Modern way to unstage/discard",
          "Line 27-30: git clean - Remove untracked files",
          "Line 32-33: Unstage all",
          "Line 35-37: Discard all local changes"
        ],
        simpleMeaning: "Reset rewinds history (dangerous for shared branches). Revert undoes by adding new commit (safe for teams). Use --soft to keep changes, --hard to nuke everything. git restore unstages or discards working directory changes.",
        output: `git reset --soft HEAD~1\nUnstaged changes after reset:\nM       app.js\n\ngit revert HEAD\n[main a1b2c3d] Revert "Add feature"\n 1 file changed, 1 deletion(-)\n\ngit restore app.js\nDiscarded changes in app.js\n\ngit reflog\na1b2c3d HEAD@{0}: reset: moving to HEAD~1\nd4e5f6g HEAD@{1}: commit: Add feature`,
        note: "Never git reset --hard on shared branches. Use git revert for public history. git reflog is your safety net for 90 days."
      },
      {
        name: "10. Tagging Releases (Lightweight & Annotated)",
        description: "Tags mark specific commits (releases, versions). Lightweight tags are just pointers. Annotated tags store metadata (author, date, message). git tag creates tags. git push --tags shares tags. Use semantic versioning (v1.2.3).",
        code: `# Create lightweight tag
git tag v1.0.0              # Tag current commit
git tag v1.0.0 a1b2c3d      # Tag specific commit

# Create annotated tag (recommended)
git tag -a v1.0.0 -m "Release version 1.0.0"
git tag -a v1.0.0 a1b2c3d -m "Release candidate"

# List tags
git tag                     # All tags
git tag -l "v1.*"           # Filter tags (v1.x)

# Show tag details
git show v1.0.0             # Annotated tag details

# Push tags to remote
git push origin v1.0.0      # Push specific tag
git push --tags             # Push all tags

# Delete tags
git tag -d v1.0.0           # Delete local tag
git push origin --delete v1.0.0  # Delete remote tag

# Checkout tag (detached HEAD)
git checkout v1.0.0         # Read-only state
git checkout -b hotfix v1.0.0  # Create branch from tag

# Compare tags
git diff v1.0.0 v2.0.0
git log v1.0.0..v2.0.0 --oneline

# Latest tag
git describe --tags         # Show most recent tag
git describe --tags --abbrev=0  # Tag name only

# Semantic versioning workflow
git tag -a v1.0.0 -m "Major release: breaking changes"
git tag -a v1.1.0 -m "Minor release: new features"
git tag -a v1.1.1 -m "Patch release: bug fixes"

# Fetch tags from remote
git fetch --tags`,
        lineByLine: [
          "Line 1-3: Lightweight tag creation",
          "Line 5-7: Annotated tag - With full metadata",
          "Line 9-11: git tag listing - With filters",
          "Line 13-14: git show - View tag details",
          "Line 16-18: Push tags to remote",
          "Line 20-22: Delete tags - Local and remote",
          "Line 24-26: Checkout tags - Detached HEAD state",
          "Line 28-30: Compare tags",
          "Line 32-34: git describe - Latest tag info",
          "Line 36-40: Semantic versioning",
          "Line 42-43: Fetch tags"
        ],
        simpleMeaning: "Tags are bookmarks marking important commits – usually releases. Annotated tags are like certified mail (with metadata). Lightweight tags are sticky notes (just a pointer).",
        output: `git tag -a v1.0.0 -m "First production release"\n\ngit tag\nv0.9.0\nv1.0.0\nv1.1.0\n\ngit show v1.0.0\ntag v1.0.0\nTagger: John Doe <john@example.com>\nDate:   Mon Jan 15 10:30:00 2024 +0100\n\nFirst production release\n\ncommit a1b2c3d...\nAuthor: Jane Doe <jane@example.com>\nDate:   Mon Jan 15 09:00:00 2024 +0100\n\n    Add release features\n\ngit push origin v1.0.0\n * [new tag]         v1.0.0 -> v1.0.0`,
        note: "Use annotated tags for releases (preserves metadata). Semantic versioning recommended. Tags are immutable – delete and recreate if mistake."
      },
      {
        name: "11. Ignoring Files (.gitignore)",
        description: ".gitignore specifies intentionally untracked files that Git should ignore. Patterns: logs/, *.log, build/, node_modules/, .env. Use ! to negate. Already tracked files need git rm --cached to start ignoring.",
        code: `# .gitignore file examples
# Ignore dependencies
node_modules/
vendor/

# Ignore build outputs
dist/
build/
*.exe
*.dll

# Ignore logs
*.log
logs/

# Ignore environment files
.env
.env.local
.env.production

# Ignore IDE files
.vscode/
.idea/
*.swp

# Ignore OS files
.DS_Store
Thumbs.db

# Negate a specific file (override)
!.env.example
!build/custom-file.js

# Ignore all .txt files except important.txt
*.txt
!important.txt

# Ignore files in any directory
**/temp/
**/backup/

# Commands to manage ignored files
# Check if file is ignored
git check-ignore file.txt

# Show all ignored files
git status --ignored

# Stop tracking a file but keep locally
git rm --cached file.txt
echo "file.txt" >> .gitignore

# Show .gitignore rules explanation
git check-ignore -v file.txt

# Global .gitignore (for all repos)
git config --global core.excludesfile ~/.gitignore_global`,
        lineByLine: [
          "Line 2-4: Ignore directories node_modules/, vendor/",
          "Line 7-10: Ignore build outputs",
          "Line 13-14: Ignore log files",
          "Line 17-19: Ignore environment files",
          "Line 22-24: Ignore IDE files",
          "Line 27-29: Ignore OS files",
          "Line 32-33: Negate pattern (!) to override",
          "Line 36-37: Ignore all .txt except important.txt",
          "Line 40-41: Ignore files in any directory",
          "Line 44-45: Check if file is ignored",
          "Line 47-48: Show ignored files",
          "Line 50-52: Untrack a file (keep locally)",
          "Line 54-55: Show reason why file is ignored"
        ],
        simpleMeaning: ".gitignore tells Git which files to exclude from version control (logs, dependencies, secrets). Use patterns like *.log or build/. Already tracked files need git rm --cached to start ignoring.",
        output: `git status --ignored\nOn branch main\nIgnored files:\n  node_modules/\n  .env\n\nUntracked files:\n  src/\n\nnothing added to commit but untracked files present\n\ngit check-ignore .env\n.env\n\ngit rm --cached .env\nrm '.env'\n\n# Now .env is ignored and removed from repo`,
        note: "Commit .gitignore early. Use git rm --cached for files already tracked. Test patterns with git check-ignore."
      },
      {
        name: "12. Git Aliases (Shortcuts)",
        description: "Aliases create shortcuts for Git commands. git config --global alias.<name> '<command>'. Saves typing for frequently used commands. Aliases can also use external commands with ! prefix.",
        code: `# Basic aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st status
git config --global alias.ci commit
git config --global alias.lg "log --oneline --graph --all"

# Advanced aliases
git config --global alias.unstage "reset HEAD --"
git config --global alias.last "log -1 HEAD"
git config --global alias.tree "log --graph --pretty=oneline --abbrev-commit"
git config --global alias.history "log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short"

# Alias with parameters (using function)
git config --global alias.graph "log --graph --pretty=format:'%C(yellow)%h%Creset %C(blue)%ad%Creset %s %C(red)%d%Creset %C(green)[%an]%Creset' --date=short"

# External command alias (starting with !)
git config --global alias.aliases "!git config --get-regexp alias | cut -d. -f2- | sort"

# Show all aliases
git config --global --get-regexp alias

# Remove alias
git config --global --unset alias.st

# List aliases with description
git config --global alias.la "!git config -l | grep alias | cut -d= -f1"

# Examples of using aliases
git st        # instead of git status
git co main   # instead of git checkout main
git br -a     # instead of git branch -a
git lg        # pretty log
git unstage file.txt  # unstage file
git last      # show last commit
git tree      # pretty tree view

# Alias for amending with no edit
git config --global alias.amend "commit --amend --no-edit"

# Alias for pulling with rebase
git config --global alias.up "pull --rebase"

# Alias for interactive rebase last n commits
git config --global alias.rb "rebase -i HEAD~"

# Usage: git rb 3

# Alias for staging all changes and committing
git config --global alias.ac "!git add -A && git commit -m"

# Usage: git ac "Commit message"

# View all aliases nicely
git config --global alias.list "!git config --global --get-regexp alias | awk '{print $1}' | cut -d. -f2 | sort"`,
        lineByLine: [
          "Line 1-6: Basic aliases - shorten common commands",
          "Line 8-12: Advanced aliases - custom log formats",
          "Line 14-15: Alias with parameters (using function)",
          "Line 17-18: External command alias - runs shell command",
          "Line 20-21: Show all aliases",
          "Line 23-24: Remove alias",
          "Line 26-27: List aliases with description",
          "Line 29-34: Using aliases - examples",
          "Line 36-42: More useful aliases (amend, up, rb, ac)",
          "Line 44-45: View all aliases nicely"
        ],
        simpleMeaning: "Aliases are shortcuts for Git commands. Instead of typing git checkout, just git co. Create your own abbreviations for commands you use frequently. Save time and keystrokes.",
        output: `git config --global alias.co checkout
git config --global alias.lg "log --oneline --graph --all"

git st
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

git lg
* d4e5f6g (HEAD -> main) Add user authentication
* a1b2c3d Fix login redirect bug
* h7i8j9k Initial commit

git config --global --get-regexp alias
alias.co checkout
alias.st status
alias.lg log --oneline --graph --all`,
        note: "Aliases are stored in ~/.gitconfig. Use ! for shell commands. Share aliases via dotfiles. Create aliases for complex log formats."
      },
      {
        name: "13. Git Diff (Detailed Comparisons)",
        description: "git diff shows changes between commits, branches, or working directory. Use --staged to see staged changes, --name-only for file names, --stat for summary. diff with --word-diff for line highlights. Compare branches with git diff branch1..branch2.",
        code: `# Basic diff
git diff                    # Unstaged changes
git diff --staged           # Staged changes
git diff HEAD               # All changes since last commit
git diff HEAD~1             # Changes from previous commit

# Compare commits
git diff a1b2c3d d4e5f6g    # Between two commits
git diff HEAD~3 HEAD        # Last 3 commits

# Compare branches
git diff main..feature      # Changes in feature not in main
git diff main...feature     # Changes since branches diverged

# Diff options
git diff --name-only        # Only file names
git diff --stat             # Summary statistics
git diff --name-status      # File names with status (M,A,D)
git diff --shortstat        # Compact summary

# Word diff (better for text)
git diff --word-diff
git diff --word-diff=color

# Ignore whitespace
git diff --ignore-space-change
git diff --ignore-all-space

# Diff with context lines
git diff -U5                # 5 lines of context
git diff --unified=10

# Diff specific file
git diff file.js
git diff HEAD -- file.js    # Compare file with last commit

# Diff between branches for specific file
git diff main..feature -- app.js

# Show diff for commits with stats
git diff --stat a1b2c3d..d4e5f6g

# Diff with color
git diff --color

# Output diff to file
git diff > changes.patch
git diff --output=changes.diff

# Compare with external diff tool
git difftool                 # Opens configured diff tool
git difftool --tool=vscode

# Diff with merge base
git diff a1b2c3d...d4e5f6g   # Changes on second branch since they diverged

# Diff with rename detection
git diff -M                  # Detect renames
git diff -C                  # Detect copies

# Show diff of last commit
git show

# Diff between working directory and index
git diff --cached            # Same as --staged

# Compare two files (not in Git)
git diff --no-index file1.js file2.js`,
        lineByLine: [
          "Line 1-5: Basic diff commands",
          "Line 7-8: Compare commits",
          "Line 10-12: Compare branches (two-dot vs three-dot)",
          "Line 14-18: Diff options - file names, statistics",
          "Line 20-22: Word diff - better for text",
          "Line 24-26: Ignore whitespace changes",
          "Line 28-30: Context lines",
          "Line 32-33: Diff specific file",
          "Line 35-36: Diff between branches for specific file",
          "Line 38-39: Diff with stats",
          "Line 41-42: Output to file",
          "Line 44-46: External diff tool",
          "Line 48-49: Merge base diff",
          "Line 51-52: Rename/copy detection",
          "Line 54-55: Show last commit diff"
        ],
        simpleMeaning: "git diff shows what changed: between commits, branches, or working directory. See exactly which lines were added, removed, or modified. Use --word-diff for prose changes. Diff is essential for code review.",
        output: `git diff --stat
 app.js | 5 +++--
 1 file changed, 3 insertions(+), 2 deletions(-)

git diff
diff --git a/app.js b/app.js
index a1b2c3d..d4e5f6g 100644
--- a/app.js
+++ b/app.js
@@ -1,4 +1,5 @@
 const express = require('express');
-const app = express();
+const app = express();
+const helmet = require('helmet');
+app.use(helmet());
-app.use(express.json());

git diff --name-only
app.js
package.json

git diff --word-diff
[-const app = express();-]{+const app = express();+}
{+const helmet = require('helmet');+}
{+app.use(helmet());+}`,
        note: "Use --name-only for quick overview. git difftool opens GUI diff tool. Three-dot diff (a...b) shows changes on b since branch point."
      },
      {
        name: "14. Git Blame (Line-by-Line Authorship)",
        description: "git blame shows who last modified each line of a file. Useful for finding when a bug was introduced, understanding code history, or contacting author for clarification. Use -L for line range, -w to ignore whitespace, -C to detect moved lines.",
        code: `# Basic blame
git blame file.js
git blame app.js

# Blame with line range
git blame -L 10,20 app.js      # Lines 10-20
git blame -L 25 app.js         # Single line 25
git blame -L 10,+15 app.js     # 15 lines from line 10
git blame -L 10,-5 app.js      # 5 lines before line 10

# Blame with options
git blame -w                   # Ignore whitespace changes
git blame -M                   # Detect moved lines
git blame -C                   # Detect moved/copied lines across files
git blame -C -C                # Even more aggressive copy detection

# Show commit details
git blame -s                   # Suppress author name (show only commit hash)
git blame -e                   # Show author email
git blame -t                   # Show raw timestamp

# Blame with date format
git blame --date=short
git blame --date=relative

# Blame for older revisions
git blame HEAD~3 -- app.js     # Blame 3 commits ago
git blame a1b2c3d -- app.js    # Blame at specific commit

# Blame across multiple files
git blame file1.js file2.js

# Blame with ignore revisions file
git config blame.ignoreRevsFile .git-blame-ignore-revs
echo "a1b2c3d" >> .git-blame-ignore-revs  # Ignore reformatting commits

# Show commits that affected lines
git blame -L 10,20 -- app.js | cut -d' ' -f1 | sort -u | xargs git show

# Blame in porcelain format (machine-readable)
git blame --porcelain app.js

# Find when a function was added
git blame -L '/function name/,+5' app.js

# Blame with color
git blame --color-lines
git blame --color-by-age

# Blame output format
# a1b2c3d (Author Date Line) actual code

# Interactive blame with fugitive (Vim)
# :Git blame

# View blame in VS Code
# GitLens extension

# Save blame output to file
git blame app.js > blame.txt

# Blame with algorithm
git blame --algorithm=histogram   # or minimal, myers, patience`,
        lineByLine: [
          "Line 1-3: Basic blame - Author for each line",
          "Line 5-9: Line range options",
          "Line 11-15: Blame options - ignore whitespace, detect moves",
          "Line 17-19: Show commit details - email, timestamp",
          "Line 21-23: Date formatting",
          "Line 25-27: Blame older revisions",
          "Line 32-34: Ignore revisions file - skip reformatting commits",
          "Line 36-37: Show commits for affected lines",
          "Line 39-42: Porcelain format, find function, color options"
        ],
        simpleMeaning: "git blame is a detective tool. It tells you who changed every line and when. Use to find why a bug was introduced, who to ask about code, or track code evolution. Like `git log` for each line.",
        output: `git blame app.js
a1b2c3d4 (John Doe   2024-01-15 09:00:00 1) const express = require('express');
a1b2c3d4 (John Doe   2024-01-15 09:00:00 2) const app = express();
d4e5f6g7 (Jane Smith 2024-01-16 10:30:00 3) app.use(express.json());
d4e5f6g7 (Jane Smith 2024-01-16 10:30:00 4) app.get('/', (req, res) => {
d4e5f6g7 (Jane Smith 2024-01-16 10:30:00 5)   res.send('Hello');
d4e5f6g7 (Jane Smith 2024-01-16 10:30:00 6) });

git blame -L 3,5 app.js
d4e5f6g7 (Jane Smith 2024-01-16 10:30:00 3) app.use(express.json());
d4e5f6g7 (Jane Smith 2024-01-16 10:30:00 4) app.get('/', (req, res) => {
d4e5f6g7 (Jane Smith 2024-01-16 10:30:00 5)   res.send('Hello');

git blame --date=short app.js
a1b2c3d4 (John Doe   2024-01-15 1) const express = require('express');
d4e5f6g7 (Jane Smith 2024-01-16 2) app.use(express.json());`,
        note: "Use -w to ignore whitespace commits. Create .git-blame-ignore-revs for reformatting commits. Blame is local – depends on your clone's history."
      },
      {
        name: "15. Git Bisect (Finding Bug Origins)",
        description: "Bisect performs binary search through commit history to find when bug was introduced. git bisect start begins search, git bisect bad marks current as broken, git bisect good marks known working commit. Git checks out midpoint commit for testing. Repeat until bug commit found.",
        code: `# Start bisect session
git bisect start
git bisect bad              # Current version is broken
git bisect good a1b2c3d     # Known working commit (or v1.0)

# Or specify commits directly
git bisect start a1b2c3d d4e5f6g  # bad = HEAD, good = a1b2c3d

# Test each commit (Bisect checks out middle)
# Run your test suite or manual test
npm test                    # Or any verification command

# Mark result
git bisect good             # If this commit works
git bisect bad              # If this commit is broken

# Automatic bisect with script
git bisect run npm test
git bisect run ./test.sh

# Custom test script (test.sh):
#!/bin/bash
npm run build
node test-bug.js
exit $?  # 0 = good, 1-127 = bad, 125 = skip

git bisect run ./test.sh

# View progress
git bisect log              # Show history of bisect
git bisect visualize        # Show commits with gitk

# Skip problematic commit
git bisect skip             # Can't test (build fails)

# End bisect session
git bisect reset            # Return to original branch

# Find exact commit
# After final bad/good, bisect shows:
# a1b2c3d is the first bad commit

# Debug with bisect
git bisect start
git bisect bad HEAD
git bisect good v1.0.0
# Bisecting: 12 revisions left to test after this

# Save bisect log
git bisect log > bisect-log.txt

# Replay bisect from log
git bisect replay bisect-log.txt

# Visualize results
git log --oneline --graph a1b2c3d^..a1b2c3d`,
        lineByLine: [
          "Line 1-3: Start bisect - Mark bad and good commits",
          "Line 5-6: Alternative syntax - Specify commits directly",
          "Line 8-11: Manual testing - Mark each commit as good/bad",
          "Line 13-14: Automatic bisect - Run script to test",
          "Line 16-21: Custom test script - Complex verification",
          "Line 23-25: View progress - Log and visualize",
          "Line 27-28: Skip - Untestable commit",
          "Line 30-31: Reset - End bisect session",
          "Line 33-35: Results - Git identifies bug-introducing commit",
          "Line 37-43: Save and replay - Reuse bisect session"
        ],
        simpleMeaning: "Bisect is like playing 'hot and cold' to find when a bug appeared. You give Git a known good version (no bug) and bad version (has bug). Git checks out halfway point. You test, say 'good' or 'bad'. Git narrows down. After ~10 steps on 1000 commits, Git finds the exact commit that broke everything.",
        output: `git bisect start\ngit bisect bad\ngit bisect good v1.0.0\nBisecting: 12 revisions left to test after this (roughly 4 steps)\n[a1b2c3d] Add new feature\n\n# Test commit a1b2c3d\nnpm test\nTests failed!\ngit bisect bad\nBisecting: 6 revisions left to test after this (roughly 3 steps)\n[d4e5f6g] Update dependencies\n\nnpm test\nTests passed!\ngit bisect good\nBisecting: 2 revisions left to test after this (roughly 2 steps)\n\n# Continue testing...\na1b2c3d is the first bad commit\ncommit a1b2c3d4e5f6g7h8i9j0\nAuthor: John <john@example.com>\nDate:   Mon Jan 10 15:30:00 2024\n\n    Add new feature\n\n app.js | 3 ++-\n 1 file changed, 2 insertions(+), 1 deletion(-)\n\ngit bisect reset\nPrevious HEAD position was a1b2c3d Add new feature\nSwitched to branch 'main'`,
        note: "Bisect works on linear history – rebase interactive branches first. Automatic bisect with scripts is very powerful. git bisect skip for commits that can't be tested. Saves enormous time on large repositories."
      },
      // ========== ADDITIONAL BASIC TOPICS (Aliases, Diff, Blame, Bisect already included) ==========
    ]
  },
  advanced: {
    title: "🚀 ADVANCED GIT: EXPERT VERSION CONTROL",
    description: "Master Git with advanced techniques: interactive rebase, cherry-pick, bisect (automation), worktrees, submodules, reflog, hooks, rebase --onto, rerere, filter-branch, bundle, archive, notes, grep, LFS.",
    topics: [
      {
        name: "16. Interactive Rebase (History Editing)",
        description: "Interactive rebase rewrites commit history. Use to squash multiple commits, reorder commits, edit messages, delete commits, or run commands between commits. Powerful but dangerous on shared branches. Never rebase public history.",
        code: `# Interactive rebase last 3 commits
git rebase -i HEAD~3

# Commands in interactive rebase
# pick     - use commit (p)
# reword   - change commit message (r)
# edit     - stop to amend (e)
# squash   - combine with previous commit (s)
# fixup    - like squash but discard message (f)
# drop     - remove commit (d)
# exec     - run command (x)

# Example: Squash fixup commits
# pick a1b2c3d Implement feature
# fixup d4e5f6g Fix typo
# squash h7i8j9k Add tests

# After rebase stops (edit):
git add .
git commit --amend
git rebase --continue

# Run command during rebase
# exec npm test

# Split a commit
git rebase -i a1b2c3d^
# Mark as 'edit'
git reset HEAD^
git add file1.js
git commit -m "Part 1"
git add file2.js
git commit -m "Part 2"
git rebase --continue

# Fixup commit (auto-squash)
git commit --fixup a1b2c3d
git rebase -i --autosquash a1b2c3d~1

# Abort rebase
git rebase --abort`,
        lineByLine: [
          "Line 1-3: Start interactive rebase - Edit last 3 commits",
          "Line 5-12: Rebase commands and their meanings",
          "Line 14-17: Squash example - Combine fixup commits",
          "Line 19-22: Edit commit - Stop to make changes",
          "Line 24-26: exec command - Run scripts during rebase",
          "Line 29-36: Split commit - Break one commit into multiple",
          "Line 39-41: Fixup commit - Auto-squash",
          "Line 43: Abort rebase"
        ],
        simpleMeaning: "Interactive rebase lets you time-travel and rewrite history. You can squash mistakes, reorder commits, edit messages, or delete commits entirely. Like a film editor cutting and rearranging scenes. Use on private branches only.",
        output: `git rebase -i HEAD~3\npick a1b2c3d Add login form\nsquash d4e5f6g Fix typo\npick h7i8j9k Add logout button\n\n[detached HEAD d4e5f6g] Add login form\n Date: Mon Jan 15 10:00:00 2024\n 2 files changed, 15 insertions(+)\nSuccessfully rebased and updated refs/heads/feature.`,
        note: "Never rebase branches others have pulled. Use fixup commits for small corrections. Test after rebase before pushing."
      },
      {
        name: "17. Cherry-Picking Commits",
        description: "Cherry-pick applies specific commit(s) to current branch without merging entire branch. Useful for backporting fixes, applying hotfixes to multiple branches, or recovering lost commits.",
        code: `# Simple cherry-pick
git checkout main
git cherry-pick a1b2c3d        # Apply single commit

# Cherry-pick multiple commits
git cherry-pick a1b2c3d d4e5f6g  # Apply specific commits
git cherry-pick a1b2c3d..d4e5f6g  # Apply range

# Cherry-pick with options
git cherry-pick --edit a1b2c3d    # Edit commit message
git cherry-pick --no-commit a1b2c3d  # Stage changes only
git cherry-pick -x a1b2c3d        # Add source commit reference

# Handle conflicts
git cherry-pick a1b2c3d
# CONFLICT error
git status
# Resolve conflicts manually
git add resolved-file.js
git cherry-pick --continue

# Abort cherry-pick
git cherry-pick --abort

# Cherry-pick from different repository
git remote add upstream https://github.com/other/repo.git
git fetch upstream
git cherry-pick upstream/main~5..upstream/main

# Verify cherry-pick result
git log --oneline -5`,
        lineByLine: [
          "Line 1-3: Simple cherry-pick - Apply single commit",
          "Line 5-7: Multiple commits - Specific commits or ranges",
          "Line 9-12: Options - Edit message, no commit, add source reference",
          "Line 14-19: Conflict resolution - Resolve then continue",
          "Line 21-22: Abort cherry-pick - Cancel operation",
          "Line 24-27: From different repository - Cross-repo cherry-pick",
          "Line 29-30: Verification - Confirm cherry-pick results"
        ],
        simpleMeaning: "Cherry-pick picks individual commits like cherries from a tree. Found a bug fix on feature branch? Cherry-pick it directly to main without merging everything. Backport a security patch to older version? Cherry-pick that single commit.",
        output: `git cherry-pick a1b2c3d\n[main d4e5f6g] Fix login redirect bug\n Date: Tue Jan 16 10:30:00 2024 +0100\n 1 file changed, 1 insertion(+)\n\n# With conflicts\nAuto-merging app.js\nCONFLICT (content): Merge conflict in app.js\nerror: could not apply a1b2c3d... Fix login bug\n\n# After resolution\nResolved conflicts and continued\n[main d4e5f6g] Fix login redirect bug`,
        note: "Cherry-picking duplicates commits (changes SHA hash). Can cause duplicate commits if not careful. Use for specific fixes, not whole features."
      },
      {
        name: "18. Git Worktrees (Multiple Branches)",
        description: "Worktrees allow checking out multiple branches simultaneously in different directories. Avoids stash switching or cloning. Each worktree is linked to main repository. Great for reviewing PRs, running parallel builds, long-running tasks.",
        code: `# List worktrees
git worktree list

# Add new worktree
git worktree add ../project-hotfix hotfix
git worktree add -b new-branch ../project-new main

# Add from specific commit
git worktree add ../project-old v1.0.0

# Lock/unlock worktree (prevent moves/deletes)
git worktree lock ../project-hotfix
git worktree unlock ../project-hotfix

# Prune worktree references
git worktree prune

# Remove worktree
git worktree remove ../project-hotfix
git worktree remove --force ../project-hotfix  # Force even if dirty

# Use cases:
# 1. Review PR
git worktree add ../pr-123 origin/pr/123
cd ../pr-123
# Review code, run tests

# 2. Parallel builds
git worktree add ../build-main main
cd ../build-main && make

# 3. Long-running experiment
git worktree add ../experiment experiment`,
        lineByLine: [
          "Line 1-2: List worktrees - Show all linked directories",
          "Line 4-6: Add worktree - Create new working directory",
          "Line 8-9: Add from commit/tag - Checkout specific version",
          "Line 11-12: Lock/Unlock - Prevent modifications",
          "Line 14-15: Prune - Clean stale references",
          "Line 17-19: Remove - Delete worktree",
          "Line 21-26: Use cases - PR review, parallel builds, experiments"
        ],
        simpleMeaning: "Worktrees let you work on multiple branches at once without stashing. Each worktree is a separate folder with its own branch checked out, sharing the same underlying repository.",
        output: `git worktree list\n/project         a1b2c3d [main]\n/project-hotfix  d4e5f6g [hotfix]\n\ngit worktree add ../project-feature feature\nPreparing worktree (new branch 'feature')\nHEAD is now at a1b2c3d Initial commit\n\ngit worktree list\n/project           a1b2c3d [main]\n/project-hotfix    d4e5f6g [hotfix]\n/project-feature   a1b2c3d [feature]`,
        note: "Worktrees share repository, not branches – changes in one worktree affect all. Don't delete worktree directory manually – use git worktree remove."
      },
      {
        name: "19. Git Submodules & Subtrees",
        description: "Submodules embed external repositories inside your repository. Subtrees merge external repo into your own. Submodules are independent but tracked by parent repo. Subtrees include external code directly.",
        code: `# ========== SUBMODULES ==========
# Add submodule
git submodule add https://github.com/library/common.git libs/common
git submodule add -b main https://github.com/library/utils.git libs/utils

# Clone with submodules
git clone --recursive https://github.com/project/main.git
git submodule update --init --recursive

# Update submodules to latest
git submodule update --remote
git submodule update --remote --merge

# Update specific submodule
cd libs/common
git pull origin main
cd ../..
git add libs/common
git commit -m "Update common library"

# View submodule status
git submodule status

# Remove submodule
git submodule deinit -f libs/common
git rm -f libs/common
rm -rf .git/modules/libs/common

# ========== SUBTREES ==========
# Add subtree
git subtree add --prefix libs/common https://github.com/library/common.git main --squash

# Pull updates
git subtree pull --prefix libs/common https://github.com/library/common.git main --squash

# Push changes back
git subtree push --prefix libs/common https://github.com/library/common.git main`,
        lineByLine: [
          "Line 2-4: Add submodule - Link external repository",
          "Line 6-8: Clone with submodules - Recursive clone",
          "Line 10-12: Update to latest - Remote tracking",
          "Line 14-19: Manual update - Pull inside submodule",
          "Line 21-22: Status - Show submodule commits",
          "Line 24-27: Remove submodule - Clean removal",
          "Line 30-31: Add subtree - Merge external repo",
          "Line 33-34: Pull updates - Pull external changes",
          "Line 36-37: Push back - Send changes to external repo"
        ],
        simpleMeaning: "Submodules are Git repositories inside your Git repository. You track which version of the external library you're using. Subtrees are like photocopying the external code into your project – simpler for end users but duplicates code.",
        output: `git submodule add https://github.com/libs/common.git libs/common\nCloning into '/project/libs/common'...\ndone.\n\ngit submodule status\n a1b2c3d4e5f6g7h8i9j0 libs/common (v1.0.0)\n\ngit submodule update --remote\nFrom https://github.com/libs/common\n   a1b2c3d..d4e5f6g  main -> origin/main\nSubmodule path 'libs/common': checked out 'd4e5f6g'`,
        note: "Submodules start in detached HEAD – always checkout branch before working. Removing submodules is tricky – follow exact steps."
      },
      {
        name: "20. Git Reflog (Recovering Lost Commits)",
        description: "Reflog records every change to HEAD (branch switches, commits, resets, rebases). It's Git's safety net – keeps history of where HEAD pointed. Use git reflog to recover commits lost after hard reset, rebase, or accidental branch deletion.",
        code: `# View reflog
git reflog
git reflog -5                # Last 5 entries
git reflog --date=iso        # Show dates

# Reflog for specific branch
git reflog main

# Recover from hard reset
git reset --hard HEAD~3      # Lost commits
git reflog
# a1b2c3d HEAD@{1}: commit: Important work (LOST)
git reset --hard HEAD@{1}    # Restore

# Recover deleted branch
git reflog
# d4e5f6g HEAD@{2}: checkout: moving from feature to main
git checkout -b feature HEAD@{2}  # Recreate branch

# Recover from rebase
git rebase main feature
# Oops, rebase went wrong
git reflog
# h7i8j9k HEAD@{1}: rebase finished
git reset --hard HEAD@{2}    # Back to pre-rebase

# Show reflog with graph
git log -g --oneline --graph

# Time-based references
git show HEAD@{yesterday}
git show main@{2024-01-01}`,
        lineByLine: [
          "Line 1-3: git reflog - View history of HEAD",
          "Line 5: Specific branch reflog",
          "Line 7-11: Recover from hard reset - Find lost commit",
          "Line 13-16: Recover deleted branch - Recreate from reflog",
          "Line 18-23: Recover from rebase - Go back before rebase",
          "Line 25-26: Visualize - With graph",
          "Line 28-30: Time-based references"
        ],
        simpleMeaning: "Reflog is Git's black box recorder. It logs every move you make – branch switches, commits, resets, rebases. Accidentally hard reset? Reflog shows where you were. Deleted branch? Reflog still has it. Your safety net.",
        output: `git reflog\na1b2c3d (HEAD -> main) HEAD@{0}: reset: moving to HEAD~1\nd4e5f6g HEAD@{1}: commit: Add important feature\nh7i8j9k HEAD@{2}: commit: Fix bug\ng6f5e4d HEAD@{3}: commit: Initial commit\n\ngit reset --hard HEAD@{1}\nHEAD is now at d4e5f6g Add important feature\n\ngit show HEAD@{yesterday}\ncommit d4e5f6g7h8i9j0\nAuthor: John <john@example.com>\nDate:   Mon Jan 15 09:45:00 2024\n\n    Add important feature`,
        note: "Reflog is local – not pushed to remote. Reflog expires after 90 days (configurable). Use git reflog before any destructive operation."
      },
      {
        name: "21. Git Hooks (Automation Scripts)",
        description: "Hooks are scripts that run automatically on Git events. Client-side hooks: pre-commit (lint/test), commit-msg (validate message), post-commit (notify). Server-side hooks: pre-receive, post-receive (deploy). Hooks in .git/hooks/.",
        code: `# Pre-commit hook (run before commit)
#!/bin/sh
echo "Running tests..."
npm test
if [ $? -ne 0 ]; then
    echo "Tests failed. Commit aborted."
    exit 1
fi

# Lint staged files
git diff --cached --name-only | grep '\\.js$' | xargs eslint

# Commit message hook (Conventional Commits)
#!/bin/sh
msg="$(cat $1)"
if ! echo "$msg" | grep -qE "^(feat|fix|docs|style|refactor|test|chore)(\\(.+\\))?: .{1,50}"; then
    echo "ERROR: Commit message must follow Conventional Commits format"
    exit 1
fi

# Pre-push hook (run before push)
#!/bin/sh
echo "Running full test suite..."
npm run test:full
if [ $? -ne 0 ]; then
    echo "Tests failed. Push aborted."
    exit 1
fi

# Post-checkout hook (run after checkout)
#!/bin/sh
if [ "$3" = "1" ]; then
    echo "Branch switched, installing dependencies..."
    npm install
fi

# Share hooks across team
git config core.hooksPath .githooks

# Skip hooks temporarily
git commit --no-verify
git push --no-verify

# Make hook executable
chmod +x .git/hooks/pre-commit`,
        lineByLine: [
          "Line 1-8: pre-commit hook - Runs tests before commit",
          "Line 10-12: Linting - Check staged files",
          "Line 15-19: commit-msg hook - Validates message format",
          "Line 22-27: pre-push hook - Runs before git push",
          "Line 30-35: post-checkout - Run after branch switch",
          "Line 38-39: Share hooks - core.hooksPath",
          "Line 41-42: Skip hooks temporarily",
          "Line 44: Make executable"
        ],
        simpleMeaning: "Hooks are automatic scripts at key moments. pre-commit checks code before saving. commit-msg validates your message. post-commit sends notifications. pre-push runs full test suite. Like airport security checks before your code travels.",
        output: `git commit -m "Add feature"\nRunning tests...\nTest Suites: 10 passed, 10 total\nLinting...\nNo linting errors found\n\n[main a1b2c3d] Add feature\n\ngit push\nRunning full test suite...\nIntegration tests passed\nE2E tests passed\nPush successful`,
        note: "Hooks are not pushed to remote. Share hooks via core.hooksPath. Use Husky for team hook management. pre-commit hooks should be fast (<5 seconds)."
      },
      {
        name: "22. Git Rebase –onto & Advanced Options",
        description: "git rebase --onto moves commits from one branch onto a different base. Useful for extracting commits, moving feature branches onto updated base, or reorganising history. Requires careful commit range specification.",
        code: `# Basic --onto syntax
git rebase --onto <newbase> <oldbase> <branch>

# Move last 3 commits from feature to main
git rebase --onto main feature~3 feature

# Move commits that are in feature but not in main
git rebase --onto main main feature

# Move single commit
git checkout feature
git rebase --onto main feature~1  # Move last commit

# Rebase with exec (run command after each commit)
git rebase --exec "npm test" main feature

# Rebase with update-refs (rebase with branches)
git rebase --update-refs main

# Rebase with empty commits
git rebase --keep-empty main

# Rebase onto different commit (not branch)
git rebase --onto a1b2c3d d4e5f6g feature

# Practical example: move feature branch after main update
git checkout feature
git rebase --onto main main~5 feature  # Skip 5 old commits

# Verify rebase result
git log --oneline --graph`,
        lineByLine: [
          "Line 1-3: --onto syntax - newbase, oldbase, branch",
          "Line 5-6: Move last 3 commits to main",
          "Line 8-9: Move all commits in feature not in main",
          "Line 11-12: Move single commit",
          "Line 14-15: exec - Run test after each commit",
          "Line 17-18: update-refs - Rebase with branches",
          "Line 20-21: keep-empty - Keep empty commits",
          "Line 23-24: Onto specific commit",
          "Line 26-27: Skip commits",
          "Line 29-30: Verify"
        ],
        simpleMeaning: "git rebase --onto is a scalpel for commit surgery. You grab a range of commits and transplant them onto a new base. Extract last 3 commits from feature and put them on main. Move a commit to another branch. Very precise, very powerful.",
        output: `git rebase --onto main feature~3 feature\nFirst, rewinding head to replay your work on top of it...\nApplying: commit 1\nApplying: commit 2\nApplying: commit 3\n\ngit log --oneline --graph\n* d4e5f6g (HEAD -> feature) commit 3\n* a1b2c3d commit 2\n* h7i8j9k commit 1\n* g6f5e4d (main) previous main commit`,
        note: "--onto is very powerful but easy to mis-specify ranges. Always test with --dry-run first. Use git reflog if mistakes happen."
      },
      {
        name: "23. Git Rerere (Reuse Recorded Resolutions)",
        description: "Rerere (reuse recorded resolution) remembers how you resolved merge conflicts and automatically applies same resolution when same conflict occurs again. Saves time on recurring conflicts (e.g., long-lived branches). Enable with git config --global rerere.enabled true.",
        code: `# Enable rerere globally
git config --global rerere.enabled true

# Enable for current repository
git config rerere.enabled true

# See rerere status
git rerere status
git rerere diff

# View recorded resolutions
ls .git/rr-cache/

# Manually record current resolution
git rerere

# Disable rerere
git config rerere.enabled false

# Clear rerere cache
rm -rf .git/rr-cache/

# Debug rerere
GIT_TRACE=1 git merge feature

# Example workflow with rerere
git checkout main
git merge feature  # Conflict occurs
# Resolve conflict
git add .
git commit
# Next time same conflict appears, Git will auto-resolve

# List recorded resolutions
git rerere remaining

# Forget specific resolution
git rerere forget file.js

# Log rerere activity
git config rerere.autoupdate true  # Automatically stage resolved files`,
        lineByLine: [
          "Line 1-2: Enable rerere globally",
          "Line 4-5: Enable for current repository",
          "Line 7-8: See rerere status and diff",
          "Line 10-11: View recorded resolutions",
          "Line 13-14: Manually record current resolution",
          "Line 16-17: Disable rerere",
          "Line 19-20: Clear cache",
          "Line 22-23: Debug with trace",
          "Line 25-28: Example workflow",
          "Line 30-31: List remaining conflicts",
          "Line 33-34: Forget specific resolution",
          "Line 36-37: Autoupdate"
        ],
        simpleMeaning: "Rerere is like Git's memory for conflict resolution. Once you resolve a conflict, Git remembers how you did it. Next time the same conflict happens, Git automatically resolves it the same way. Perfect for long-lived branches that repeatedly merge from main.",
        output: `git config --global rerere.enabled true\n\n# First merge with conflict\nAuto-merging app.js\nCONFLICT (content): Merge conflict in app.js\n\n# Resolve manually\ngit add app.js\ngit commit\nRecorded resolution for 'app.js'.\n\n# Next merge with same conflict\nAuto-merging app.js\nResolved 'app.js' using previous resolution.\nCONFLICT (content): Merge conflict in app.js (already resolved)\n\n# Automatically resolved!`,
        note: "Rerere is stored locally. Enable it early. Use rerere.autoupdate to automatically stage resolutions. Great for rebasing branches with recurring conflicts."
      },
      {
        name: "24. Git Filter-Branch (History Rewriting)",
        description: "filter-branch rewrites history (commit messages, authors, files, etc.). Powerful but dangerous. Use for removing secrets, changing email addresses globally, or splitting repositories. Alternative: git filter-repo (recommended).",
        code: `# Remove a file from entire history
git filter-branch --tree-filter 'rm -f secret.txt' HEAD

# Remove folder from history
git filter-branch --tree-filter 'rm -rf config/secrets' HEAD

# Change author email globally
git filter-branch --commit-filter '
    if [ "$GIT_AUTHOR_EMAIL" = "old@example.com" ];
    then
        GIT_AUTHOR_NAME="New Name";
        GIT_AUTHOR_EMAIL="new@example.com";
        GIT_COMMITTER_NAME="$GIT_AUTHOR_NAME";
        GIT_COMMITTER_EMAIL="$GIT_AUTHOR_EMAIL";
        git commit-tree "$@";
    else
        git commit-tree "$@";
    fi' HEAD

# Replace text in all commits (message)
git filter-branch --msg-filter 'sed "s/old-text/new-text/g"' HEAD

# Remove large files (by size)
git filter-branch --tree-filter 'find . -size +10M -delete' HEAD

# Make a backup before filter-branch
git branch backup

# Force push rewritten history
git push origin --force --all

# Use filter-repo (modern alternative)
# git filter-repo --path secret.txt --invert-paths

# Split subdirectory into new repo
git filter-branch --subdirectory-filter libs/common -- --all

# Change commit message globally
git filter-branch --msg-filter 'sed "s/typo/corrected/g"' HEAD

# Remove empty commits
git filter-branch --prune-empty -- --all

# Preserve tags
git filter-branch --tag-name-filter cat -- --all

# Clean up old references
git for-each-ref --format="%(refname)" refs/original/ | xargs -n 1 git update-ref -d
git reflog expire --expire=now --all
git gc --aggressive --prune=now`,
        lineByLine: [
          "Line 1-3: Remove file from all commits",
          "Line 5-6: Remove folder from history",
          "Line 8-17: Change author email globally",
          "Line 19-20: Replace text in commit messages",
          "Line 22-23: Remove large files",
          "Line 25-26: Create backup branch",
          "Line 28-29: Force push rewritten history",
          "Line 31-32: Use filter-repo (recommended)",
          "Line 34-35: Split subdirectory into new repo",
          "Line 37-38: Change commit message",
          "Line 40-41: Remove empty commits",
          "Line 43-44: Preserve tags",
          "Line 46-49: Clean up references and garbage collect"
        ],
        simpleMeaning: "filter-branch rewrites entire repository history – changing every commit. Use it to remove accidentally committed secrets, fix author emails, or split a repository. Very powerful and very dangerous. Always make a backup first.",
        output: `git filter-branch --tree-filter 'rm -f secret.txt' HEAD\nRewrite a1b2c3d4e5f6g7h8i9j0 (1/10) (0 seconds pass, remaining 0 predicted)\nRef 'refs/heads/main' was rewritten\n\ngit push origin --force --all\n + a1b2c3d...d4e5f6g main -> main (forced update)\n\ngit reflog expire --expire=now --all\ngit gc --aggressive --prune=now\nCounting objects: 100, done.\nDelta compression using up to 8 threads\nCompressing objects: 100% (90/90), done.\nWriting objects: 100% (100/100), done.`,
        note: "filter-branch is deprecated; use git filter-repo instead. Always backup before rewriting history. Requires force push. Coordinate with all collaborators."
      },
      {
        name: "25. Git Bundle (Offline Transfers)",
        description: "git bundle creates binary file containing Git objects. Useful for transferring repository without network (air‑gapped systems). Can push/fetch like remote. Bundle includes commits up to specified ref.",
        code: `# Create bundle of entire repository
git bundle create repo.bundle --all

# Create bundle of specific branch
git bundle create main.bundle main

# Create bundle of specific commits
git bundle create commits.bundle main~5..main

# Create bundle with tags
git bundle create release.bundle v1.0.0

# Clone from bundle
git clone repo.bundle new-repo

# Fetch from bundle
git fetch repo.bundle main:main

# Pull from bundle
git pull repo.bundle main

# Verify bundle integrity
git bundle verify repo.bundle

# See what's in bundle
git bundle list-heads repo.bundle

# Create incremental bundle (since previous tag)
git bundle create incremental.bundle v1.0.0..main

# Transfer bundle to other machine (usb, email, etc.)
# On target machine:
git clone repo.bundle new-repo

# Bundle multiple branches
git bundle create multi.bundle main develop feature

# Create bundle from specific revision
git bundle create partial.bundle HEAD~10..HEAD

# Bundle all refs including notes
git bundle create full.bundle --all --tags --notes

# Verify bundle before using
git bundle verify partial.bundle

# Bundle with progress
git bundle create backup.bundle --all --progress

# Bundle only objects reachable from HEAD
git bundle create head.bundle HEAD`,
        lineByLine: [
          "Line 1-2: Bundle entire repository",
          "Line 4-5: Bundle specific branch",
          "Line 7-8: Bundle commit range",
          "Line 10-11: Bundle with tags",
          "Line 13-14: Clone from bundle",
          "Line 16-17: Fetch from bundle",
          "Line 19-20: Pull from bundle",
          "Line 22-23: Verify bundle integrity",
          "Line 25-26: List heads in bundle",
          "Line 28-29: Incremental bundle",
          "Line 31-32: Transfer to other machine",
          "Line 34-35: Bundle multiple branches"
        ],
        simpleMeaning: "Bundle is a single file containing Git repository data. Transfer Git history without a server – copy on USB, email, or air‑gap. Perfect for offline environments or backup. Clone, fetch, or pull from bundle like a remote.",
        output: `git bundle create repo.bundle --all\nEnumerating objects: 100, done.\nCounting objects: 100% (100/100), done.\nDelta compression using up to 8 threads\nCompressing objects: 100% (85/85), done.\nWriting objects: 100% (100/100), done.\nTotal 100 (delta 15), reused 0 (delta 0)\n\ngit clone repo.bundle new-repo\nCloning into 'new-repo'...\nReceiving objects: 100% (100/100), done.\nResolving deltas: 100% (15/15), done.\n\ngit bundle verify repo.bundle\nThe bundle contains 1 ref\na1b2c3d4e5f6g7h8i9j0 refs/heads/main`,
        note: "Bundle is static – doesn't update automatically. For incremental updates, create new bundle from previous tag. Use bundle for backups, offline transfers, or emailing patches."
      },
      {
        name: "26. Git Archive (Exporting Code)",
        description: "git archive creates tar/zip archive of repository at specific commit or tag. Exports only tracked files (excludes .git). Useful for releases, deployment artifacts, or sharing code snapshot.",
        code: `# Create tar archive of current HEAD
git archive --output project.tar HEAD

# Create zip archive
git archive --format=zip --output project.zip HEAD

# Archive specific tag
git archive --output v1.0.0.tar v1.0.0

# Archive specific commit
git archive --output snapshot.tar a1b2c3d

# Archive with prefix (extract into folder)
git archive --prefix=project/ --output project.tar HEAD

# Exclude certain files
git archive --output project.tar HEAD :(exclude).env :(exclude)node_modules/

# Archive multiple branches
git archive --output main.tar main
git archive --output develop.tar develop

# Archive with compression (tar.gz)
git archive --format=tar.gz --output project.tar.gz HEAD

# Archive without .gitattributes processing
git archive --worktree-attributes --output project.tar HEAD

# Archive from remote repository
git archive --remote=https://github.com/user/repo.git --output repo.tar main

# List files that would be archived
git archive --verbose HEAD | tar -t -v

# Create archive with modified file permissions
git archive --output project.tar --chmod=755 scripts/deploy.sh HEAD

# Archive with submodules (exports submodule content)
git archive --output project.tar --recursive HEAD

# Extract archive
tar -xf project.tar
unzip project.zip

# Common use: create release tarball
git archive --format=tar.gz --prefix=myapp-1.0.0/ --output myapp-1.0.0.tar.gz v1.0.0

# Archive specific path
git archive --output src.tar HEAD:src/`,
        lineByLine: [
          "Line 1-2: Basic tar archive",
          "Line 4-5: Zip archive",
          "Line 7-8: Archive specific tag",
          "Line 10-11: Archive specific commit",
          "Line 13-14: Add prefix (folder)",
          "Line 16-17: Exclude files",
          "Line 19-20: Multiple branches",
          "Line 22-23: Compression",
          "Line 25-26: Without processing attributes",
          "Line 28-29: From remote repository",
          "Line 31-32: List files",
          "Line 34-35: Change permissions",
          "Line 37-38: Include submodules",
          "Line 40-41: Extract archive",
          "Line 43-44: Release tarball example",
          "Line 46-47: Archive specific path"
        ],
        simpleMeaning: "Archive exports clean copy of your code without Git metadata. Perfect for releases, deployment packages, or sharing snapshots. Choose zip or tar format. Can archive any tag, branch, or commit.",
        output: `git archive --output project.tar HEAD\n\ngit archive --format=tar.gz --prefix=myapp-1.0.0/ --output myapp-1.0.0.tar.gz v1.0.0\n\ntar -tf myapp-1.0.0.tar.gz\nmyapp-1.0.0/\nmyapp-1.0.0/src/\nmyapp-1.0.0/README.md\nmyapp-1.0.0/package.json`,
        note: "Archive includes only committed files (tracked). Use --prefix to extract into folder. -remote works for public repositories (requires Git config)."
      },
      {
        name: "27. Git Notes (Attaching Metadata)",
        description: "git notes adds extra information to commits without changing commit hash. Notes are stored separately. Useful for adding code review comments, CI results, or post-merge information. Notes can be pushed/pulled like branches.",
        code: `# Add note to commit
git notes add -m "Reviewed by John" a1b2c3d

# Append to existing note
git notes append -m "Also approved by security" a1b2c3d

# Edit note in editor
git notes edit a1b2c3d

# Show notes for commit
git notes show a1b2c3d

# List all notes
git notes list

# Remove note
git notes remove a1b2c3d

# Notes for current commit
git notes show HEAD

# Push notes to remote
git push origin refs/notes/*

# Fetch notes from remote
git fetch origin refs/notes/*:refs/notes/*

# Notes with git log
git log --show-notes

# Custom notes ref (multiple note trees)
git notes --ref=review add -m "Approved" a1b2c3d
git notes --ref=ci add -m "Tests passed" a1b2c3d

# Show specific notes ref
git log --notes=review

# Configure default notes ref
git config core.notesRef refs/notes/review

# Copy notes from one commit to another
git notes copy a1b2c3d d4e5f6g

# Prune notes for removed commits
git notes prune

# Merge notes from another ref
git notes merge refs/notes/review

# Notes for range of commits
git notes show HEAD~3..HEAD

# Using notes in scripts
git notes --ref=status list | while read commit; do
    echo "Commit $commit: $(git notes --ref=status show $commit)"
done

# Store pull request ID as note
git notes add -m "PR #123" a1b2c3d

# Add timestamp note
git notes add -m "Deployed: $(date)" a1b2c3d`,
        lineByLine: [
          "Line 1-2: Add note to specific commit",
          "Line 4-5: Append to existing note",
          "Line 7-8: Edit note in editor",
          "Line 10-11: Show note for commit",
          "Line 13-14: List all notes",
          "Line 16-17: Remove note",
          "Line 19-20: Push notes to remote",
          "Line 22-23: Fetch notes from remote",
          "Line 25-26: Show notes in log",
          "Line 28-30: Multiple note refs",
          "Line 32-33: Show specific notes ref",
          "Line 35-36: Configure default ref",
          "Line 38-39: Copy notes",
          "Line 41-42: Prune notes",
          "Line 44-45: Merge notes"
        ],
        simpleMeaning: "Git Notes let you attach extra information to commits without rewriting history. Add code review comments, CI results, or deployment timestamps. Notes are stored separately and can be shared. Like sticky notes on commits.",
        output: `git notes add -m "Reviewed by Jane" a1b2c3d\n\ngit notes show a1b2c3d\nReviewed by Jane\n\ngit log --show-notes\na1b2c3d Add feature\nNotes:\n    Reviewed by Jane\n\ngit notes --ref=ci add -m "Build passed" a1b2c3d\ngit notes --ref=ci show a1b2c3d\nBuild passed\n\ngit push origin refs/notes/*\n * [new ref]          refs/notes/* -> refs/notes/*`,
        note: "Notes are versioned themselves. Create multiple note refs for different purposes (review, CI, deploy). Notes must be pushed separately."
      },
      {
        name: "28. Git Grep (Searching Contents)",
        description: "git grep searches tracked files for patterns. Faster than grep because it searches index and respects .gitignore. Supports regex, context lines, file patterns, and can search across commits.",
        code: `# Search in working directory
git grep "function name"

# Case-insensitive search
git grep -i "error"

# Search with line numbers
git grep -n "TODO"

# Count matches
git grep -c "console.log"

# Show only filenames
git grep -l "import React"

# Search with context lines
git grep -B 2 -A 3 "error"  # 2 lines before, 3 after

# Search specific file types
git grep "function" -- '*.js'

# Exclude files
git grep "test" -- :^test/*

# Search in commit history
git grep "password" $(git rev-list --all)

# Search in specific commit
git grep "debug" a1b2c3d

# Search in branch
git grep "feature" main

# Use regular expressions
git grep -E "function\s+\w+"

# Search with OR condition
git grep -e "error" -e "exception"

# Show word boundaries
git grep -w "config"

# Search entire repo including .gitignore files
git grep --no-index "pattern"

# Show matching lines with colors
git grep --color "TODO"

# Search empty lines
git grep "^$"

# Search in binary files
git grep -a "text" binary-file

# Limit search to certain paths
git grep "pattern" -- src/ docs/

# Save results to file
git grep "pattern" > search-results.txt`,
        lineByLine: [
          "Line 1-2: Basic search",
          "Line 4-5: Case-insensitive",
          "Line 7-8: With line numbers",
          "Line 10-11: Count matches",
          "Line 13-14: Only filenames",
          "Line 16-17: Context lines",
          "Line 19-20: File type filter",
          "Line 22-23: Exclude files",
          "Line 25-26: Search history",
          "Line 28-29: Specific commit",
          "Line 31-32: Branch search",
          "Line 34-35: Regular expressions",
          "Line 37-38: OR condition",
          "Line 40-41: Word boundaries"
        ],
        simpleMeaning: "git grep searches your code like grep but works only on tracked files (respects .gitignore). Fast and can search across any commit or branch. Find all uses of a function, locate TODO comments, or search history for security secrets.",
        output: `git grep "TODO" -n\nsrc/app.js:42:// TODO: implement error handling\nsrc/utils.js:15:// TODO: add validation\n\ngit grep -c "console.log"\nsrc/app.js:3\nsrc/utils.js:1\ntest/test.js:0\n\ngit grep "function" -- '*.js'\nsrc/api.js:function fetchData() {\nsrc/api.js:function processResponse() {\n\ngit grep "password" $(git rev-list --all) -- '*.js'\na1b2c3d:src/auth.js:const password = user.password\nd4e5f6g:src/auth.js:const password = user.password`,
        note: "git grep respects .gitignore. Use -l to get file list for batch processing. Search history with git grep <pattern> $(git rev-list --all)."
      },
           {
        name: "29. Git LFS (Large File Storage)",
        description: "Git LFS replaces large files (videos, datasets, binaries) with text pointers. Actual file stored on LFS server. Prevents repository bloat. Install git-lfs, track file patterns, then commit normally.",
        code: `# Install Git LFS
# macOS: brew install git-lfs
# Ubuntu: sudo apt install git-lfs
# Windows: download from https://git-lfs.com

# Initialize LFS in repository
git lfs install

# Track file types
git lfs track "*.psd"
git lfs track "*.zip"
git lfs track "*.tar.gz"
git lfs track "assets/*.png"

# Track files by size (>10MB)
git lfs track --include="*" --exclude="*.txt" --size=10M

# View tracked patterns
git lfs track

# List tracked files
git lfs ls-files

# Commit .gitattributes (required!)
git add .gitattributes
git commit -m "Track large files with LFS"

# Add large file (works like normal)
git add large-file.zip
git commit -m "Add large file"
git push origin main

# Clone repository with LFS
git clone https://github.com/user/repo.git
cd repo
git lfs pull               # Download LFS files after clone

# Pull specific LFS files
git lfs pull --include="*.zip"

# Migrate existing large files to LFS
git lfs migrate import --include="*.psd,*.zip" --everything

# Migrate recent commits only
git lfs migrate import --include="*.mp4" --include-ref=main

# Check LFS file status
git lfs status

# Push LFS files to remote
git lfs push origin main --all

# Verify LFS files are tracked
git lfs ls-files

# Remove a file from LFS (but keep in history)
git lfs untrack "*.psd"
git add .gitattributes
git commit -m "Stop tracking PSD files"
# Remove the file from LFS cache
git rm --cached file.psd
git add file.psd
git commit -m "Convert file back to normal"

# Clean up old LFS files locally
git lfs prune
git lfs prune --dry-run

# Show LFS version
git lfs version

# Debug LFS
GIT_TRACE=1 GIT_CURL_VERBOSE=1 git lfs pull

# LFS with SSH remotes
git config lfs.url "ssh://git@example.com/path/to/repo.git/info/lfs"

# LFS concurrency settings
git config lfs.concurrenttransfers 32

# LFS file locking (prevent concurrent edits)
git lfs lock "file.psd"
git lfs locks
git lfs unlock "file.psd"

# Update LFS to latest version
git lfs update

# Check LFS environment
git lfs env

# Use LFS in CI/CD
# GitHub Actions: uses: actions/checkout@v3 with lfs: true
# GitLab CI: variables: GIT_LFS_SKIP_SMUDGE: "0"`,
        lineByLine: [
          "Line 2-4: Install Git LFS on different platforms",
          "Line 7-8: Initialize LFS in repository",
          "Line 11-14: Track file patterns",
          "Line 17-18: Track files larger than 10MB",
          "Line 21-22: View tracked patterns",
          "Line 25-26: List files under LFS",
          "Line 29-31: Commit .gitattributes (essential)",
          "Line 34-36: Add and commit large file normally",
          "Line 39-42: Clone and pull LFS files",
          "Line 45-46: Pull only specific patterns",
          "Line 49-50: Migrate existing history to LFS",
          "Line 53-54: Migrate only main branch",
          "Line 57-58: Check LFS file status",
          "Line 61-62: Push LFS objects",
          "Line 65-66: List tracked LFS files",
          "Line 69-76: Untrack a file from LFS",
          "Line 79-80: Prune local LFS cache",
          "Line 83-84: Show LFS version",
          "Line 87-88: Debug LFS operations",
          "Line 91-92: Configure LFS with SSH",
          "Line 95-96: Increase concurrent transfers",
          "Line 99-101: LFS file locking",
          "Line 104-105: Update LFS to latest version",
          "Line 108-109: Show LFS environment",
          "Line 112-114: CI/CD integration examples"
        ],
        simpleMeaning: "Git LFS stores large files outside the repository, replacing them with tiny pointers. Your repo stays small and fast. Install `git-lfs`, track file patterns (e.g., `*.psd`), commit as usual. Large files are uploaded to a separate server.",
        output: `git lfs track "*.psd"\nTracking "*.psd"\n\ngit add .gitattributes\ngit commit -m "Track PSD files with LFS"\n\ngit add design.psd\ngit commit -m "Add design"\ngit push origin main\nUploading LFS objects: 100% (1/1), 15 MB | 0 B/s, done.\n\ngit lfs ls-files\na1b2c3d4e5 * design.psd`,
        note: "Always commit .gitattributes after tracking patterns. Migrating existing history requires rewriting commits. LFS server can be GitHub, GitLab, or self‑hosted."
      }
    ]
  }
};

export default learning;