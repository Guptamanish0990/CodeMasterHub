export const learning = {
  basic: {
    title: "🐙 GIT: COMPLETE VERSION CONTROL DOCUMENTATION",
    description: "Comprehensive Git guide covering everything from fundamentals to advanced version control techniques. Git is the most popular distributed version control system, created by Linus Torvalds in 2005 for Linux kernel development. This documentation includes 20+ topics with real-world examples, line-by-line explanations, and practical use cases. Perfect for beginners learning version control and experienced developers looking for a quick reference.",
    
    topics: [
      {
        name: "1. GIT INITIALIZE & FIRST COMMIT",
        description: "git init creates a new Git repository in current directory. git add stages files for commit. git commit takes a snapshot of staged changes with a message. The .git folder stores all version history. Always configure user.name and user.email before first commit.",
        code: `# Initialize new repository
git init

# Configure user (first time only)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Check status
git status

# Stage files
git add file.txt        # Stage specific file
git add .               # Stage all files
git add *.js            # Stage all JavaScript files

# Commit staged changes
git commit -m "Initial commit"

# Commit with detailed message
git commit -m "Add feature: user authentication

- Added login form
- Implemented JWT tokens
- Added password encryption"

# View commit history
git log
git log --oneline       # Compact view
git log --graph         # Visual branch structure

# View changes
git diff                # Unstaged changes
git diff --staged       # Staged changes`,
        lineByLine: [
          "Line 1: git init - Creates empty Git repository in current directory",
          "Line 4-5: git config --global - Sets author identity for all commits",
          "Line 8: git status - Shows staged/unstaged files and branch info",
          "Line 11-13: git add - Stages files for commit",
          "Line 16-17: git commit -m - Creates snapshot with inline message",
          "Line 19-23: git commit with multi-line message - Detailed commit description",
          "Line 26-28: git log - Shows commit history with details",
          "Line 31-32: git diff - Shows unstaged changes vs last commit"
        ],
        simpleMeaning: "git init creates a new time machine for your code. git add puts files in the 'to-save' box. git commit takes a permanent snapshot. Think of it like saving a game: add selects what to save, commit saves the checkpoint.",
        output: `Initialized empty Git repository in /project/.git
On branch main
No commits yet
Changes to be committed:
  new file: file.txt
[main (root-commit) a1b2c3d] Initial commit
 1 file changed, 1 insertion(+)
 create mode 100644 file.txt`,
        note: "Always configure user.name and user.email before committing. Use meaningful commit messages (present tense, under 50 chars for subject line). Commit early, commit often."
      },
      
      {
        name: "2. GIT BRANCHING - CREATE, SWITCH, DELETE",
        description: "Branches allow parallel development without affecting main codebase. Each branch is an independent line of development. git branch creates branches, git checkout switches branches, git branch -d deletes branches. Use feature branches for new features, bug branches for fixes.",
        code: `# List all branches
git branch                    # Local branches
git branch -r                 # Remote branches
git branch -a                 # All branches (local + remote)

# Create new branch
git branch feature-login      # Creates branch at current position
git branch feature-api main   # Create branch from main

# Switch branches
git checkout feature-login    # Switch to existing branch
git checkout -b new-feature   # Create AND switch to new branch

# Switch with Git 2.23+ (recommended)
git switch feature-login      # Switch branch
git switch -c new-feature     # Create and switch

# Delete branches
git branch -d feature-login   # Safe delete (merged only)
git branch -D feature-login   # Force delete (unmerged)

# Rename branch
git branch -m old-name new-name
git branch -m new-name         # Rename current branch

# Compare branches
git diff main..feature         # Show differences
git log main..feature          # Commits in feature not in main

# See branch tree
git log --oneline --graph --all`,
        lineByLine: [
          "Line 1-3: git branch - Lists local branches, -r for remote, -a for all",
          "Line 5-7: git branch <name> - Creates new branch at current HEAD",
          "Line 9-12: git checkout - Switches branches",
          "Line 10: git checkout -b - Creates and switches in one command",
          "Line 14-16: git switch - Modern alternative to checkout",
          "Line 18-19: git branch -d vs -D - Safe vs force delete",
          "Line 21-23: git branch -m - Renames branches",
          "Line 25-26: git diff and git log - Compare branches",
          "Line 28: git log --graph - Visual branch history"
        ],
        simpleMeaning: "Branches are like alternate realities for your code. main is your primary reality. feature branches let you experiment safely. If experiment works, merge it back. If not, delete the branch - main stays untouched.",
        output: `* main
  feature-login
  feature-api
  bugfix-navbar

Switched to branch 'feature-login'
Deleted branch feature-login (was a1b2c3d)

* a1b2c3d (HEAD -> feature-login) Add login button
| * d4e5f6g (main) Fix navigation bug
|/
* h7i8j9k Initial commit`,
        note: "Keep branches short-lived (hours/days, not weeks). Name branches descriptively (feature/user-auth, bugfix/nav-crash). Delete merged branches to keep repository clean."
      },
      
      {
        name: "3. GIT MERGING - COMBINING BRANCHES",
        description: "Merging integrates changes from one branch into another. Fast-forward merge happens when branch is direct ahead of target. Three-way merge creates merge commit when branches diverged. Merge conflicts occur when same lines changed differently. Resolve conflicts manually, then commit.",
        code: `# Merge feature into current branch
git checkout main
git merge feature-login

# Fast-forward merge (linear history)
git merge --ff-only feature   # Only if fast-forward possible

# Create merge commit even if fast-forward possible
git merge --no-ff feature     # Preserves branch history

# Abort merge if conflicts
git merge --abort

# View merge conflicts
git status                    # Lists conflicted files
git diff                      # Shows conflict markers

# After resolving conflicts
git add resolved-file.txt
git commit -m "Merge feature-login"

# Merge strategies
git merge -s recursive feature    # Default for 2 branches
git merge -s ours feature         # Keep our version entirely
git merge -s subtree feature      # For subproject merging

# Verify merge
git log --oneline --graph
git diff main..feature --name-status`,
        lineByLine: [
          "Line 1-3: git merge - Integrates feature branch into current branch",
          "Line 5-6: git merge --ff-only - Only merge if fast-forward possible",
          "Line 8-9: git merge --no-ff - Creates merge commit always",
          "Line 11-12: git merge --abort - Cancels merge, returns to previous state",
          "Line 14-15: git status and git diff - Shows conflicted files",
          "Line 17-19: Resolving conflicts - Stage resolved files and commit",
          "Line 21-23: Merge strategies - Different algorithms for merging",
          "Line 25-26: Verify merge - Check history and changes"
        ],
        simpleMeaning: "Merging brings changes from one branch to another. Fast-forward is like moving a pointer forward. Three-way merge creates a new 'merge commit' combining both histories. Conflicts happen when both branches changed same lines - you tell Git which version to keep.",
        output: `Updating a1b2c3d..d4e5f6g
Fast-forward
 file.txt | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)

Auto-merging app.js
CONFLICT (content): Merge conflict in app.js
Automatic merge failed; fix conflicts and then commit the result.

# After resolving conflicts
Merge made by the 'recursive' strategy.
 app.js | 4 ++--
 1 file changed, 2 insertions(+), 2 deletions(-)`,
        note: "Use --no-ff for feature branches to preserve branch history. Resolve conflicts carefully - test after resolution. git merge --abort is safe during conflicts. Always merge with clean working directory."
      },
      
      {
        name: "4. GIT REBASING - REWRITING HISTORY",
        description: "Rebasing moves entire branch to begin at tip of another branch, creating linear history. git rebase main replays feature commits on top of main. Interactive rebase (git rebase -i) allows squashing, reordering, editing commits. Never rebase public branches others depend on.",
        code: `# Basic rebase
git checkout feature
git rebase main               # Replay feature on top of main

# Rebase with upstream changes
git fetch origin
git rebase origin/main

# Interactive rebase (last 3 commits)
git rebase -i HEAD~3

# Interactive rebase options
# pick - use commit
# reword - change commit message
# edit - stop to amend
# squash - combine with previous
# fixup - like squash but discard message
# drop - remove commit

# Example interactive rebase
# pick a1b2c3d Add login form
# squash d4e5f6g Fix typo in login
# pick h7i8j9k Add logout button

# Rebase onto different branch
git rebase --onto main feature~3 feature  # Move last 3 commits to main

# Continue rebase after resolving conflicts
git add resolved-file.txt
git rebase --continue

# Skip problematic commit
git rebase --skip

# Abort rebase
git rebase --abort

# Rebase vs merge comparison
# Merge: preserves history, creates merge commits
# Rebase: linear history, rewrites commits`,
        lineByLine: [
          "Line 1-3: git rebase main - Rewinds feature, applies main changes, replays feature commits",
          "Line 5-7: git rebase origin/main - Rebase with remote changes",
          "Line 9-10: git rebase -i - Interactive rebase for history editing",
          "Line 12-18: Interactive options - Commands for modifying commits",
          "Line 20-25: Interactive rebase example - Squashing commits together",
          "Line 27-28: git rebase --onto - Move specific commits to different base",
          "Line 30-32: git rebase --continue - After resolving conflicts",
          "Line 34-40: git rebase options - Skip, abort, and comparison"
        ],
        simpleMeaning: "Rebasing rewrites history to make it look linear. Instead of a merge commit, your changes appear as if you just made them on top of main. Interactive rebase lets you clean up commit history - squash typos, reorder commits, edit messages. Like time travel to fix history before anyone sees it.",
        output: `First, rewinding head to replay your work on top of it...
Applying: Add login form
Applying: Fix typo in login
Applying: Add logout button

# With conflicts
CONFLICT (content): Merge conflict in app.js
error: could not apply a1b2c3d... Add login form

# After resolution
Applying: Add login form
No changes - did you forget to use 'git add'?
Resolved conflicts and continued rebase

Successfully rebased and updated refs/heads/feature.`,
        note: "Golden rule: Don't rebase public branches others use. Rebase private feature branches before merging. Interactive rebase only on commits not yet pushed. Rebase makes cleaner history than merge."
      },
      
      {
        name: "5. GIT STASHING - TEMPORARY SAVES",
        explanation: "Stashing temporarily saves uncommitted changes without committing. git stash saves working directory and index. git stash pop applies and removes stash, git stash apply applies but keeps stash. Multiple stashes create stack. Useful when switching branches with dirty working directory.",
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
git stash show stash@{1} -p  # Specific stash diff

# Remove stashes
git stash drop               # Remove latest
git stash drop stash@{2}     # Remove specific
git stash clear              # Remove all stashes

# Stash untracked files
git stash -u                 # Include untracked
git stash -a                 # Include all files

# Stash with untracked and ignore
git stash --all              # Stash everything including ignored

# Partial stash (specific files)
git stash push -m "partial" -- path/to/file.js
git stash push -- path/to/dir/ -- file2.txt

# Interactive stash
git stash --keep-index       # Stash only unstaged changes`,
        lineByLine: [
          "Line 1-3: git stash - Saves uncommitted changes temporarily",
          "Line 2: git stash push -m - Creates named stash",
          "Line 5-6: git stash list - Shows all stashes with indices",
          "Line 8-10: git stash apply - Applies stash but keeps it",
          "Line 12-14: git stash pop - Applies and removes stash",
          "Line 16-17: git stash branch - Creates branch from stash",
          "Line 19-21: git stash show - Views stash contents",
          "Line 23-25: git stash drop/clear - Removes stashes",
          "Line 27-31: Stash options for untracked files",
          "Line 33-36: Partial stash - Specific files only"
        ],
        simpleMeaning: "Stashing is like putting your work-in-progress in a drawer. You're not ready to commit, but need to switch tasks. git stash saves everything, cleans your desk. Later, git stash pop brings it back. Perfect for urgent bug fixes on a different branch.",
        output: `Saved working directory and index state WIP on main: a1b2c3d Add feature
HEAD is now at a1b2c3d Add feature

stash@{0}: On main: WIP: login feature
stash@{1}: On main: WIP: navigation fix

Changes not staged for commit:
  modified:   app.js

0 files changed

Dropped refs/stash@{0} (a1b2c3d4e5f6g7h8i9j0)`,
        note: "Stash before switching branches with uncommitted changes. Use descriptive messages for stashes. Stash is local - not pushed to remote. git stash pop removes stash, git stash apply keeps it. Clear old stashes periodically."
      },
      
      {
        name: "6. GIT REMOTES - COLLABORATION",
        description: "Remotes are versions of repository hosted on network. git remote add connects local to remote. git push uploads commits, git pull downloads and merges, git fetch downloads without merging. origin is default remote name. Multiple remotes can be configured.",
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

# Remove remote
git remote remove upstream

# Rename remote
git remote rename origin upstream

# Set remote URL
git remote set-url origin https://new-url.git

# Prune remote branches
git remote prune origin       # Remove deleted remote branches

# View remote branches
git branch -r
git branch -a`,
        lineByLine: [
          "Line 1-3: git remote add - Connects local repo to remote",
          "Line 5-7: git remote -v - Lists remotes with URLs",
          "Line 9-13: git push - Uploads commits to remote",
          "Line 10: git push -u - Sets upstream tracking",
          "Line 15-18: git pull - Downloads and merges remote changes",
          "Line 20-23: git fetch - Downloads without merging",
          "Line 25-28: git clone - Copies remote repository locally",
          "Line 30-36: Remote management commands"
        ],
        simpleMeaning: "Remotes connect your local Git to GitHub/GitLab/Bitbucket. push uploads your commits to the cloud. pull downloads others' changes. clone copies entire repository. Think of remote as shared drive everyone can push to and pull from.",
        output: `remote origin added
git remote -v
origin  https://github.com/user/repo.git (fetch)
origin  https://github.com/user/repo.git (push)

To https://github.com/user/repo.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.

From https://github.com/user/repo.git
 * branch            main       -> FETCH_HEAD
    a1b2c3d..d4e5f6g  main       -> origin/main

Cloning into 'repo'...
remote: Enumerating objects: 100, done.
remote: Total 100 (delta 0), reused 0 (delta 0)
Receiving objects: 100% (100/100), done.`,
        note: "git pull = git fetch + git merge. Use git pull --rebase for linear history. Push before pull if others may have pushed. Always pull before starting work on shared branches."
      },
      
      {
        name: "7. GIT LOG & HISTORY EXPLORATION",
        description: "git log displays commit history with various formatting options. Use --oneline for compact view, --graph for branch visualization, --author to filter authors, --since/--until for date ranges. git show displays specific commit details. git diff compares commits, branches, or working directory.",
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
git log -S"function name"     # Commits that changed text

# Filter by files
git log file.txt              # History of specific file
git log -- app.js src/        # Multiple files/dirs

# Range filters
git log main..feature         # Commits in feature not in main
git log HEAD~3..HEAD          # Last 3 commits

# Statistics
git log --stat                # Changed files stats
git log --shortstat           # Summary stats
git log --name-only           # Changed file names

# Show commit details
git show a1b2c3d              # Specific commit
git show HEAD~2               # Commit 2 back
git show HEAD:file.txt        # File at HEAD
git show --stat               # Stats for HEAD

# Compare commits
git diff a1b2c3d d4e5f6g      # Between two commits
git diff HEAD~3 HEAD          # Last 3 commits
git diff --name-only          # Only file names

# Formatting
git log --pretty=format:"%h - %an, %ar : %s"
# %h = hash, %an = author, %ar = relative date, %s = subject

git log --pretty=format:"%C(yellow)%h%Creset %s %Cgreen(%cr)%Creset" --graph

# Find commits
git blame file.js             # Who changed each line
git bisect start              # Binary search for bug
git reflog                    # Reference log (recover lost commits)`,
        lineByLine: [
          "Line 1-4: git log variations - Compact, graph, all branches",
          "Line 6-8: Filter by author - Specific contributors",
          "Line 10-13: Filter by date - Time-based history",
          "Line 15-17: Filter by message/content",
          "Line 19-21: Filter by file paths",
          "Line 23-25: Range filters - Commit differences",
          "Line 27-30: Statistical output - Changed files",
          "Line 32-35: git show - Detailed commit information",
          "Line 37-40: git diff - Compare commits",
          "Line 42-47: Custom formatting with pretty=format",
          "Line 49-51: Advanced tools - blame, bisect, reflog"
        ],
        simpleMeaning: "git log is your time machine viewer. See who changed what, when, and why. Filter by author to see someone's work, by date to see recent changes, by file to track specific code. git blame shows who last touched each line - like detective work for code.",
        output: `* d4e5f6g (HEAD -> main) Add user authentication
* a1b2c3d Fix login redirect bug
* h7i8j9k Initial commit

a1b2c3d - John, 2 days ago : Fix login redirect bug
d4e5f6g - Jane, 5 hours ago : Add user authentication

commit d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2
Author: Jane Doe <jane@example.com>
Date:   Mon Jan 15 10:30:00 2024 +0100

    Add user authentication

 app.js | 10 ++++++++--
 1 file changed, 8 insertions(+), 2 deletions(-)`,
        note: "Use git log --oneline --graph for quick branch overview. git reflog recovers 'lost' commits. git bisect is invaluable for finding when bugs were introduced. Learn custom formatting for your workflow."
      },
      
      {
        name: "8. GIT RESET & REVERT - UNDOING CHANGES",
        description: "Undo changes at different levels. git reset moves branch pointer (--soft keeps changes staged, --mixed keeps unstaged, --hard discards everything). git revert creates new commit that undoes previous commit (safe for shared branches). git restore unstages or discards working directory changes.",
        code: `# Soft reset (keep changes staged)
git reset --soft HEAD~1      # Undo last commit, keep changes staged
git reset --soft a1b2c3d     # Reset to specific commit

# Mixed reset (keep changes unstaged - default)
git reset HEAD~1             # Undo last commit, unstage changes
git reset --mixed HEAD~2     # Unstage last 2 commits

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

# Checkout (older way)
git checkout -- file.txt     # Discard changes (like restore)
git checkout HEAD~2 -- file.txt # Get file from 2 commits back

# Remove untracked files
git clean -n                 # Preview what would be removed
git clean -f                 # Remove untracked files
git clean -fd                # Remove untracked files and directories
git clean -fx                # Include ignored files

# Unstage all
git reset                    # Unstage everything (--mixed)
git reset -- .               # Same as above`,
        lineByLine: [
          "Line 1-3: git reset --soft - Undo commit but keep changes staged",
          "Line 5-7: git reset --mixed - Undo commit, unstage changes (default)",
          "Line 9-11: git reset --hard - Completely remove commit (dangerous!)",
          "Line 13-15: git reflog - Recover from hard reset",
          "Line 17-20: git revert - Safe undo for shared branches",
          "Line 22-25: git restore - Modern way to unstage/discard",
          "Line 27-29: git checkout -- - Older way to discard changes",
          "Line 31-34: git clean - Remove untracked files"
        ],
        simpleMeaning: "Reset rewinds history (dangerous for shared branches). Revert undoes by adding new commit (safe for teams). Use --soft to keep changes, --hard to nuke everything. git restore unstages or discards working directory changes. git clean removes untracked files.",
        output: `git reset --soft HEAD~1
Unstaged changes after reset:
M       app.js

git revert HEAD
[main a1b2c3d] Revert "Add feature"
 1 file changed, 1 deletion(-)

git restore app.js
Discarded changes in app.js

git clean -fd
Removing temp/
Removing debug.log

git reflog
a1b2c3d HEAD@{0}: reset: moving to HEAD~1
d4e5f6g HEAD@{1}: commit: Add feature`,
        note: "Never git reset --hard on shared branches. Use git revert for public history. git reflog is your safety net for 90 days. git clean requires -f for safety. Test with -n before cleaning."
      },
      
      {
        name: "9. GIT HOOKS - AUTOMATION",
        description: "Hooks are scripts that run automatically on Git events. Client-side hooks: pre-commit (lint/test before commit), prepare-commit-msg (edit message), post-commit (notify after). Server-side hooks: pre-receive (reject push), post-receive (deploy). Hooks in .git/hooks/, use .sample files as templates.",
        code: `# Navigate to hooks directory
cd .git/hooks
ls -la                    # Shows .sample hook files

# Pre-commit hook (run before commit)
#!/bin/sh
# .git/hooks/pre-commit

echo "Running tests..."
npm test
if [ $? -ne 0 ]; then
    echo "Tests failed. Commit aborted."
    exit 1
fi

# Lint staged files
npm run lint
if [ $? -ne 0 ]; then
    echo "Linting failed. Fix errors before commit."
    exit 1
fi

# Commit message hook
#!/bin/sh
# .git/hooks/commit-msg

# Check message format (Conventional Commits)
msg="$(cat $1)"
if ! echo "$msg" | grep -qE "^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .{1,50}"; then
    echo "ERROR: Commit message must follow Conventional Commits format"
    echo "Format: type(scope): subject (max 50 chars)"
    echo "Example: feat(auth): add login functionality"
    exit 1
fi

# Pre-push hook (run before push)
#!/bin/sh
# .git/hooks/pre-push

echo "Running full test suite..."
npm run test:full
if [ $? -ne 0 ]; then
    echo "Tests failed. Push aborted."
    exit 1
fi

# Post-commit hook (run after commit)
#!/bin/sh
# .git/hooks/post-commit

# Send notification
curl -X POST https://hooks.slack.com/xxx \
  -H 'Content-Type: application/json' \
  -d "{\"text\":\"New commit: $(git log -1 --pretty=%B)\"}"

# Prepare commit message hook
#!/bin/sh
# .git/hooks/prepare-commit-msg

# Add branch name to commit message
branch_name=$(git symbolic-ref --short HEAD)
echo "[$branch_name] $(cat $1)" > $1

# Install third-party hooks
npx husky install          # Husky (manage hooks)
npx lint-staged           # Run linters on staged files

# Skip hooks (temporarily)
git commit --no-verify    # Skip pre-commit
git push --no-verify      # Skip pre-push

# Make hook executable
chmod +x .git/hooks/pre-commit`,
        lineByLine: [
          "Line 1-3: Navigate to hooks directory",
          "Line 5-12: pre-commit hook - Runs tests before commit",
          "Line 6: #!/bin/sh - Shebang for shell script",
          "Line 9-11: npm test - Fails commit if tests fail",
          "Line 14-18: pre-commit - Linting check",
          "Line 21-32: commit-msg hook - Validates message format",
          "Line 25-31: Conventional Commits validation with regex",
          "Line 35-44: pre-push hook - Runs before git push",
          "Line 47-53: post-commit hook - Sends notification",
          "Line 56-62: prepare-commit-msg - Adds branch name",
          "Line 64-65: Third-party tools - Husky, lint-staged",
          "Line 67-70: Skip hooks temporarily",
          "Line 72: chmod +x - Make hook executable"
        ],
        simpleMeaning: "Hooks are automatic scripts that run at key moments. pre-commit checks your code before saving (run tests, linters). commit-msg checks your message format (like Conventional Commits). post-commit sends notifications. pre-push runs full test suite. Like airport security checks before your code travels.",
        output: `Running tests...
Test Suites: 10 passed, 10 total
Tests: 50 passed, 50 total
Linting...
No linting errors found

[main] feat(auth): add login functionality

Running full test suite...
Integration tests passed
E2E tests passed
Push successful

New commit: feat(auth): add login functionality
Notification sent to Slack

Skipping pre-commit hook
Committing anyway`,
        note: "Hooks are not pushed to remote (gitignored automatically). Share hooks via scripts directory and symlinks. Use Husky for team hook management. pre-commit hooks should be fast (<5 seconds). Test hooks locally before depending on them."
      },
      
      {
        name: "10. GIT TAGS - MARKING RELEASES",
        description: "Tags mark specific commits (releases, versions). Lightweight tags are just pointers. Annotated tags store metadata (author, date, message). git tag creates tags. git push --tags shares tags. Use semantic versioning (v1.2.3). Tags are immutable after push.",
        code: `# Create lightweight tag
git tag v1.0.0              # Tag current commit
git tag v1.0.0 a1b2c3d      # Tag specific commit

# Create annotated tag (recommended)
git tag -a v1.0.0 -m "Release version 1.0.0"
git tag -a v1.0.0 a1b2c3d -m "Release candidate"

# Create signed tag (GPG)
git tag -s v1.0.0 -m "Signed release"

# List tags
git tag                     # All tags
git tag -l "v1.*"           # Filter tags (v1.x)
git tag --sort=-v:refname   # Sort by version

# Show tag details
git show v1.0.0             # Annotated tag details
git show v1.0.0 --format=short

# Push tags to remote
git push origin v1.0.0      # Push specific tag
git push --tags             # Push all tags
git push origin --tags      # Same as above

# Push tags with commits
git push origin main --tags

# Delete tags
git tag -d v1.0.0           # Delete local tag
git push origin --delete v1.0.0  # Delete remote tag
git push origin :v1.0.0     # Alternative syntax

# Checkout tag (detached HEAD)
git checkout v1.0.0         # Read-only state
git checkout -b hotfix v1.0.0  # Create branch from tag

# Compare tags
git diff v1.0.0 v2.0.0
git log v1.0.0..v2.0.0 --oneline

# Create tag from previous commit
git tag -a v0.9.0 HEAD~5 -m "Previous version"

# Latest tag
git describe --tags         # Show most recent tag
git describe --tags --abbrev=0  # Tag name only

# Semantic versioning workflow
git tag -a v1.0.0 -m "Major release: breaking changes"
git tag -a v1.1.0 -m "Minor release: new features"
git tag -a v1.1.1 -m "Patch release: bug fixes"

# Fetch tags from remote
git fetch --tags
git pull origin --tags`,
        lineByLine: [
          "Line 1-3: Lightweight tag creation - Simple pointer",
          "Line 5-7: Annotated tag - With full metadata",
          "Line 9-10: GPG signed tag - Cryptographic verification",
          "Line 12-14: git tag listing - With filters and sorting",
          "Line 16-18: git show - View tag details",
          "Line 20-23: Push tags to remote - Share with team",
          "Line 25-28: Delete tags - Local and remote",
          "Line 30-32: Checkout tags - Detached HEAD state",
          "Line 34-36: Compare tags - Diff and log between versions",
          "Line 38-39: Create tag from previous commit",
          "Line 41-43: git describe - Latest tag info",
          "Line 45-49: Semantic versioning - Major.Minor.Patch"
        ],
        simpleMeaning: "Tags are bookmarks marking important commits - usually releases. Annotated tags are like certified mail (with metadata). Lightweight tags are sticky notes (just a pointer). Use v1.0.0, v1.1.0. Push tags separately - they don't travel with git push automatically.",
        output: `git tag -a v1.0.0 -m "First production release"

git tag
v0.9.0v1.0.0
v1.1.0

git show v1.0.0
tag v1.0.0
Tagger: John Doe <john@example.com>
Date:   Mon Jan 15 10:30:00 2024 +0100

First production release

commit a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t
Author: Jane Doe <jane@example.com>
Date:   Mon Jan 15 09:00:00 2024 +0100

    Add release features

git push origin v1.0.0
 * [new tag]         v1.0.0 -> v1.0.0

git describe --tags
v1.0.0-3-ga1b2c3d

git checkout v1.0.0
Note: switching to 'v1.0.0'.
You are in 'detached HEAD' state.`,
        note: "Use annotated tags for releases (preserves metadata). Semantic versioning recommended (v1.2.3). Tags are immutable - delete and recreate if mistake. git push --tags sends all tags. `git describe` useful for build versioning."
      }
    ]
  },
  
  advanced: {
    title: "🚀 ADVANCED GIT: MASTERING VERSION CONTROL",
    description: "Advanced Git techniques including rebasing, interactive rebase, cherry-picking, bisecting, worktrees, submodules, rerere, filter-branch, and GitHub Actions. Master these to handle complex collaboration, rewrite history safely, recover lost commits, and automate workflows.",
    
    topics: [
      {
        name: "11. GIT CHERRY-PICK - SELECTIVE COMMITS",
        description: "Cherry-pick applies specific commit(s) to current branch without merging entire branch. Useful for backporting fixes, applying hotfixes to multiple branches, or recovering lost commits. Can cherry-pick ranges, handle conflicts, and preserve original commit metadata.",
        code: `# Simple cherry-pick
git checkout main
git cherry-pick a1b2c3d        # Apply single commit

# Cherry-pick multiple commits
git cherry-pick a1b2c3d d4e5f6g  # Apply specific commits
git cherry-pick a1b2c3d..d4e5f6g  # Apply range (excludes first)
git cherry-pick a1b2c3d^..d4e5f6g # Apply range (includes first)

# Cherry-pick with options
git cherry-pick --edit a1b2c3d    # Edit commit message
git cherry-pick --no-commit a1b2c3d  # Stage changes only
git cherry-pick --signoff a1b2c3d    # Add Signed-off-by

# Handle conflicts during cherry-pick
git cherry-pick a1b2c3d
# CONFLICT error
git status                    # See conflicted files
# Resolve conflicts manually
git add resolved-file.js
git cherry-pick --continue     # Continue after resolution

# Abort cherry-pick
git cherry-pick --abort        # Cancel and clean up

# Skip commit
git cherry-pick --skip         # Skip problematic commit

# Cherry-pick from different repository
git remote add upstream https://github.com/other/repo.git
git fetch upstream
git cherry-pick upstream/main~5..upstream/main

# Cherry-pick range with interactive
git rev-list --reverse feature~5..feature | while read commit; do
    git cherry-pick $commit || break
done

# Best practice: cherry-pick hotfixes
git checkout main
git cherry-pick hotfix/fix-login-bug

# Cherry-pick to multiple branches
for branch in develop staging; do
    git checkout $branch
    git cherry-pick a1b2c3d
done

# Verify cherry-pick result
git log --oneline -5
git diff a1b2c3d HEAD --name-status`,
        lineByLine: [
          "Line 1-3: Simple cherry-pick - Apply single commit",
          "Line 5-7: Multiple commits - Specific commits or ranges",
          "Line 9-11: Options - Edit message, no commit, signoff",
          "Line 13-18: Conflict resolution - Resolve then continue",
          "Line 20-21: Abort cherry-pick - Cancel operation",
          "Line 23-24: Skip commit - Skip problematic commit",
          "Line 26-28: From different repository - Cross-repo cherry-pick",
          "Line 30-32: Loop cherry-pick - Multiple commits with error handling",
          "Line 34-36: Hotfix workflow - Apply fix to main",
          "Line 38-42: Multiple branches - Cherry-pick to several branches",
          "Line 44-46: Verification - Confirm cherry-pick results"
        ],
        simpleMeaning: "Cherry-pick picks individual commits like cherries from a tree. Found a bug fix on feature branch? Cherry-pick it directly to main without merging everything. Backport a security patch to older version? Cherry-pick that single commit. Like surgery - precise, targeted, careful.",
        output: `git cherry-pick a1b2c3d
[main d4e5f6g] Fix login redirect bug
 Date: Tue Jan 16 10:30:00 2024 +0100
 1 file changed, 1 insertion(+)

# With conflicts
Auto-merging app.js
CONFLICT (content): Merge conflict in app.js
error: could not apply a1b2c3d... Fix login bug

# After resolution
Resolved conflicts and continued
[main d4e5f6g] Fix login redirect bug

git log --oneline -3
d4e5f6g (HEAD -> main) Fix login redirect bug
h7i8j9k Add user authentication
a1b2c3d Initial commit`,
        note: "Cherry-picking duplicates commits (changes SHA hash). Can cause duplicate commits if not careful. Use for specific fixes, not whole features. Prefer merge/rebase for feature integration. Keep cherry-picked commits small and focused."
      },
      
      {
        name: "12. GIT BISECT - FINDING BUG ORIGINS",
        description: "Bisect performs binary search through commit history to find when bug was introduced. git bisect start begins search, git bisect bad marks current as broken, git bisect good marks known working commit. Git checks out midpoint commit for testing. Repeat until bug commit found.",
        code: `# Start bisect session
git bisect start
git bisect bad              # Current version is broken
git bisect good a1b2c3d     # Known working commit (or v1.0)

# Or specify commits directly
git bisect start a1b2c3d d4e5f6g  # bad = HEAD, good = a1b2c3d
git bisect start HEAD d4e5f6g     # Shorter syntax

# Test each commit (Bisect checks out middle)
# Run your test suite or manual test
npm test                    # Or any verification command

# Mark result
git bisect good             # If this commit works
git bisect bad              # If this commit is broken

# Automatic bisect with script
git bisect run npm test
git bisect run ./test.sh
git bisect run make test

# Custom test script
# test.sh:
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
# Bisecting: 12 revisions left to test
# (after 4 steps) 2 revisions left
# a1b2c3d is the first bad commit

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
          "Line 33-35: Results - Git identifies bug-introducing commit"
        ],
        simpleMeaning: "Bisect is like playing 'hot and cold' to find when a bug appeared. You give Git a known good version (no bug) and bad version (has bug). Git checks out halfway point. You test, say 'good' or 'bad'. Git narrows down. After ~10 steps on 1000 commits, Git finds the exact commit that broke everything.",
        output: `git bisect start
git bisect bad
git bisect good v1.0.0
Bisecting: 12 revisions left to test after this (roughly 4 steps)
[a1b2c3d] Add new feature

# Test commit a1b2c3d
npm test
Tests failed!
git bisect bad
Bisecting: 6 revisions left to test after this (roughly 3 steps)
[d4e5f6g] Update dependencies

npm test
Tests passed!
git bisect good
Bisecting: 2 revisions left to test after this (roughly 2 steps)

# Continue testing...
a1b2c3d is the first bad commit
commit a1b2c3d4e5f6g7h8i9j0
Author: John <john@example.com>
Date:   Mon Jan 10 15:30:00 2024

    Add new feature

 app.js | 3 ++-
 1 file changed, 2 insertions(+), 1 deletion(-)

git bisect reset
Previous HEAD position was a1b2c3d Add new feature
Switched to branch 'main'`,
        note: "Bisect works on linear history - rebase interactive branches first. Automatic bisect with scripts is very powerful. git bisect skip for commits that can't be tested. Saves enormous time on large repositories. Always reset after bisect."
      },
      
      {
        name: "13. GIT WORKTREES - MULTIPLE BRANCHES SIMULTANEOUSLY",
        description: "Worktrees allow checking out multiple branches simultaneously in different directories. Avoids stash switching or cloning. Each worktree is linked to main repository. git worktree add creates new working directory for branch. Great for reviewing PRs, running parallel builds, long-running tasks.",
        code: `# List worktrees
git worktree list
git worktree list --porcelain  # Script-friendly format

# Add new worktree
git worktree add ../project-hotfix hotfix
git worktree add ../project-feature feature-branch
git worktree add -b new-branch ../project-new main

# Add from specific commit
git worktree add ../project-old v1.0.0

# Add with tracking
git worktree add --track -b feature origin/feature ../project-feature

# Create worktree without checking out
git worktree add --no-checkout ../project-main main

# Lock/unlock worktree (prevent moves/deletes)
git worktree lock ../project-hotfix
git worktree unlock ../project-hotfix

# Prune worktree references
git worktree prune          # Remove stale worktree entries
git worktree prune --verbose

# Move worktree to new location
git worktree move ../project-hotfix ../project-bugfix

# Remove worktree
git worktree remove ../project-hotfix
git worktree remove --force ../project-hotfix  # Force even if dirty

# Repair broken worktree
git worktree repair ../project-broken

# Use cases:
# 1. Review PR
git worktree add ../pr-123 origin/pr/123
cd ../pr-123
# Review code, run tests

# 2. Parallel builds
git worktree add ../build-main main
cd ../build-main && make

# 3. Long-running experiment
git worktree add ../experiment experiment
# Work on experiment without disrupting main workspace

# 4. Documentation branch
git worktree add ../docs gh-pages
# Update documentation while coding

# Best practices
# - Keep worktrees in sibling directories
# - Name directories after branches
# - Remove worktrees when done
# - Don't nest worktrees inside main repo

# Integration with IDE
# VS Code: Open worktree as separate window
# IntelliJ: Add as new project root`,
        lineByLine: [
          "Line 1-3: List worktrees - Show all linked directories",
          "Line 5-8: Add worktree - Create new working directory",
          "Line 5: git worktree add - Basic branch checkout",
          "Line 7: git worktree add -b - Create and checkout new branch",
          "Line 10: Add from commit/tag - Checkout specific version",
          "Line 12-13: Add with tracking - Track remote branch",
          "Line 15-16: No checkout - Just create worktree structure",
          "Line 18-20: Lock/Unlock - Prevent modifications",
          "Line 22-24: Prune - Clean stale references",
          "Line 26-28: Move - Relocate worktree directory",
          "Line 30-33: Remove - Delete worktree",
          "Line 35-37: Repair - Fix broken references"
        ],
        simpleMeaning: "Worktrees let you work on multiple branches at once without stashing. Need to review a PR without losing your current work? Create a worktree. Want to run long tests on main while developing on feature? Create a worktree. Each worktree is a separate folder with its own branch checked out, sharing the same underlying repository.",
        output: `git worktree list
/project         a1b2c3d [main]
/project-hotfix  d4e5f6g [hotfix]

git worktree add ../project-feature feature
Preparing worktree (new branch 'feature')
HEAD is now at a1b2c3d Initial commit

git worktree list
/project           a1b2c3d [main]
/project-hotfix    d4e5f6g [hotfix]
/project-feature   a1b2c3d [feature]

cd ../project-feature
git branch -a
* feature
  main

git worktree remove ../project-hotfix

git worktree list
/project           a1b2c3d [main]
/project-feature   a1b2c3d [feature]`,
        note: "Worktrees share repository, not branches - changes in one worktree affect all (same repository). Don't delete worktree directory manually - use git worktree remove. Lock important worktrees to prevent accidental moves. Great for CI/CD parallel jobs."
      },
      
      {
        name: "14. GIT SUBMODULES - EXTERNAL DEPENDENCIES",
        description: "Submodules embed external repositories inside your repository. git submodule add links another repo at specific commit. Submodules are independent but tracked by parent repo. Update with git submodule update. Useful for shared libraries, components, or vendor code.",
        code: `# Add submodule
git submodule add https://github.com/library/common.git libs/common
git submodule add -b main https://github.com/library/utils.git libs/utils

# Clone repository with submodules
git clone --recursive https://github.com/project/main.git
git clone https://github.com/project/main.git
cd main
git submodule update --init --recursive

# Update submodules to latest
git submodule update --remote
git submodule update --remote --merge  # Merge changes
git submodule update --remote --rebase # Rebase changes

# Update specific submodule
cd libs/common
git pull origin main
cd ../..
git add libs/common
git commit -m "Update common library to latest"

# Update all submodules
git submodule foreach git pull origin main

# View submodule status
git submodule status
git submodule status --recursive

# Sync submodule URLs
git submodule sync
git submodule sync --recursive

# Change submodule branch
git config -f .gitmodules submodule.libs/common.branch develop
git submodule update --remote

# Remove submodule
git submodule deinit -f libs/common
git rm -f libs/common
rm -rf .git/modules/libs/common

# Customize submodule behavior
# Use relative URLs (works for everyone)
git submodule add ../common.git libs/common

# Shallow clone submodules (faster)
git clone --depth 1 --recursive https://github.com/project/main.git
git submodule update --depth 1

# Parallel submodule update
git submodule update --jobs 4

# Work on submodule (detached HEAD)
cd libs/common
git checkout main  # Get on a branch
# Make changes
git add .
git commit -m "Add new feature"
cd ../..
git add libs/common
git commit -m "Update common library with new feature"

# Checkout specific commit
cd libs/common
git checkout a1b2c3d
cd ../..
git add libs/common
git commit -m "Pin common library to specific commit"

# Submodule foreach examples
git submodule foreach 'git checkout main || :'
git submodule foreach 'git pull origin main || :'
git submodule foreach 'git status'

# Show submodule commits
git log -p --submodules
git diff --submodule=log`,
        lineByLine: [
          "Line 1-3: Add submodule - Link external repository",
          "Line 2: git submodule add - Basic submodule",
          "Line 3: git submodule add -b - Track specific branch",
          "Line 5-8: Clone with submodules - One command",
          "Line 10-12: Update to latest - Remote tracking",
          "Line 14-19: Manual update - Pull inside submodule",
          "Line 21-22: Update all - foreach loop",
          "Line 24-25: Status - Show submodule commits",
          "Line 27-28: Sync - Update submodule URLs",
          "Line 30-32: Change branch - Modify .gitmodules",
          "Line 34-37: Remove submodule - Clean removal",
          "Line 39-40: Relative URLs - Team-friendly",
          "Line 42-44: Shallow clones - Faster downloads",
          "Line 46-47: Parallel updates - Speed up",
          "Line 49-58: Work on submodule - Development workflow"
        ],
        simpleMeaning: "Submodules are Git repositories inside your Git repository. Like a bookshelf (your project) with books (submodules) that have their own content. You track which version of the book you're using. Update the book separately. Useful for shared libraries where you need specific versions.",
        output: `git submodule add https://github.com/libs/common.git libs/common
Cloning into '/project/libs/common'...
done.

git submodule status
 a1b2c3d4e5f6g7h8i9j0 libs/common (v1.0.0)

git submodule update --remote
remote: Counting objects: 10, done.
Unpacking objects: 100% (10/10), done.
From https://github.com/libs/common
   a1b2c3d..d4e5f6g  main -> origin/main
Submodule path 'libs/common': checked out 'd4e5f6g7h8i9j0k1l2m3'

git submodule foreach 'git status'
Entering 'libs/common'
HEAD detached at d4e5f6g
nothing to commit, working tree clean

git commit -m "Update common library"
[main a1b2c3d] Update common library
 1 file changed, 1 insertion(+), 1 deletion(-)`,
        note: "Submodules start in detached HEAD - always checkout branch before working. Use git submodule update --remote to track branch. git clone --recursive clones everything. Removing submodules is tricky - follow exact steps. Consider alternatives: package managers, monorepos."
      },
      
      {
        name: "15. GIT REBASE vs MERGE - ADVANCED COMPARISON",
        description: "Rebase rewrites history (linear, clean). Merge preserves true history (branch structure). Use merge for public branches (main, develop). Use rebase for feature branches before merge. Rebase interactive to clean commits. Never rebase public branches others use.",
        code: `# MERGE strategy (preserves history)
git checkout main
git merge feature
# Creates merge commit: M (merge commit)
#   /\\
# A B (feature commits)
# |/
# C

# REBASE strategy (linear history)
git checkout feature
git rebase main
git checkout main
git merge feature
# Creates linear history: A - B - C (feature commits)
# Main points to C

# Interactive rebase (clean history)
git checkout feature
git rebase -i main
# Options:
# pick - keep commit
# squash - combine with previous
# reword - change message
# edit - modify commit
# drop - remove commit

# Example interactive rebase
# pick a1b2c3d Add login form
# squash d4e5f6g Fix typo in login
# pick h7i8j9k Add logout button
# becomes: Add login form + Add logout button

# When to use MERGE
# - Integrating main into feature (updates)
# - Preserving exact timeline
# - Public branches others depend on
git checkout feature
git merge main  # Bring main changes into feature

# When to use REBASE
# - Cleaning feature branch before merge
# - Maintaining linear history
# - Private branches only
git checkout feature
git rebase main  # Replay feature on top of main

# Golden rules
# DO rebase: feature branches, local commits
# DON'T rebase: main, develop, shared branches

# Rebase with rerere (reuse recorded resolution)
git config --global rerere.enabled true
git rebase main  # Automatically reuse conflict resolutions

# Abort rebase
git rebase --abort

# Continue rebase after fix
git add .
git rebase --continue

# Rebase onto different branch
git rebase --onto main feature~3 feature  # Move last 3 commits

# Pull with rebase (default)
git config --global pull.rebase true
git pull origin main  # fetch + rebase instead of merge

# Compare merge vs rebase
git log --oneline --graph --all`,
        lineByLine: [
          "Line 1-9: Merge strategy - Preserves branch structure",
          "Line 11-20: Rebase strategy - Linear history",
          "Line 22-34: Interactive rebase - Clean up commits",
          "Line 36-42: Merge use cases - When to use merge",
          "Line 44-50: Rebase use cases - When to rebase",
          "Line 52-56: Golden rules - What not to rebase",
          "Line 58-60: Rerere - Reuse conflict resolutions",
          "Line 62-67: Rebase management - Abort, continue",
          "Line 69-70: Rebase onto - Move specific commits",
          "Line 72-74: Pull with rebase - Configure as default"
        ],
        simpleMeaning: "Merge preserves reality (history as it happened). Rebase rewrites reality (history as if you just finished). Merge commits create merge bubbles. Rebase keeps history linear. Use merge on shared branches (don't rewrite public history). Use rebase on private branches (clean up before sharing). Rebase is time travel - careful not to erase history others depend on.",
        output: `# Merge result (non-linear)
*   d4e5f6g (HEAD -> main) Merge branch 'feature'
|\\
| * a1b2c3d Add feature
| * h7i8j9k Fix bug
* | b2c3d4e Main update
|/
* e5f6g7h Initial commit

# Rebase result (linear)
* d4e5f6g (HEAD -> main) Add feature
* a1b2c3d Fix bug
* h7i8j9k Main update
* e5f6g7h Initial commit

# Interactive rebase
git rebase -i HEAD~3
pick a1b2c3d Add login
squash d4e5f6g Fix typo
pick h7i8j9k Add logout

# Result after interactive
* p1q2r3s Add login
* h7i8j9k Add logout
* e5f6g7h Initial commit`,
        note: "Always rebase feature branches before merging to main. Never rebase main. Use --force-with-lease instead of --force when pushing rebased branches. Rebase interactive is powerful - squash fixup commits. Golden rule: Don't rewrite public history."
      }
    ]
  }
};

export default learning;