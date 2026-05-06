export const interview = {
  fresher: [
    {
      question: "What is the difference between Git and GitHub?",
      answer: "Git is a distributed version control system (local). GitHub is a cloud-based hosting service for Git repositories (remote). Git works offline, GitHub requires internet. Git manages versions, GitHub adds collaboration features.",
      example: "git init                    # Creates local Git repository\ngit remote add origin https://github.com/user/repo.git  # Connects to GitHub\ngit push origin main          # Pushes local commits to GitHub",
      output: "Local repository connected to remote GitHub",
      note: "Git = tool, GitHub = platform. Alternatives: GitLab, Bitbucket."
    },
    {
      question: "What is the difference between git merge and git rebase?",
      answer: "Merge creates a merge commit preserving branch history (non-linear). Rebase reapplies commits on top of another base, creating linear history (rewrites commits). Merge is safer for shared branches, rebase creates cleaner history.",
      example: "git checkout feature\ngit merge main        # Creates merge commit (preserves history)\ngit rebase main       # Reapplies feature commits on top of main (linear)",
      output: "Merge has merge commit; rebase has linear history without merge commit",
      note: "Never rebase public/shared branches. Rebase private feature branches before merging."
    },
    {
      question: "How do you resolve a merge conflict?",
      answer: "Identify conflicted files (git status). Open files, remove conflict markers (<<<<<<<, =======, >>>>>>>). Keep desired changes. Stage resolved files (git add). Complete merge (git commit).",
      example: "<<<<<<< HEAD\nconsole.log('main version');\n=======\nconsole.log('feature version');\n>>>>>>> feature\n\n// RESOLVED to:\nconsole.log('merged version');\n\ngit add .\ngit commit -m 'Resolved merge conflict'",
      output: "Conflict resolved and committed successfully",
      note: "Use git mergetool for visual conflict resolution. Test after resolving."
    },
    {
      question: "What is a detached HEAD state?",
      answer: "HEAD points directly to a commit instead of a branch. New commits are not attached to any branch (can be lost). Exit by switching to a branch or create new branch to save work.",
      example: "git checkout a1b2c3d           # Detached HEAD (points to commit)\n# Make changes and commit\ngit commit -m 'Work in detached'\ngit switch -c new-branch       # Create branch to save work\ngit switch main                # Exit detached HEAD",
      output: "Create a new branch to save detached commits, otherwise they may be lost",
      note: "Check git status shows 'detached HEAD'. Switch to branch before making commits."
    },
    {
      question: "What is the difference between git pull and git fetch?",
      answer: "Fetch downloads remote changes without merging. Pull downloads AND merges (fetch + merge). Fetch is safer (review before merge). Pull can cause unexpected merge conflicts.",
      example: "git fetch origin              # Downloads changes, doesn't merge\ngit log origin/main            # Review changes\ngit merge origin/main          # Manual merge\n\n# OR\ngit pull origin main           # Fetches AND merges automatically",
      output: "Fetch: downloads only; Pull: downloads and merges",
      note: "Use fetch + log + merge for production branches. Pull is fine for feature branches."
    },
    {
      question: "What is a Git branch? Why are they useful?",
      answer: "Branch is independent line of development. Allows parallel work without affecting main codebase. Useful for features, bug fixes, experiments. Branches isolate changes until ready.",
      example: "git branch feature-login      # Create branch\ngit checkout feature-login     # Switch to branch\n# Make changes\ngit add .\ngit commit -m 'Add login'\ngit checkout main\ngit merge feature-login        # Merge when ready",
      output: "Parallel development without interfering with main branch",
      note: "Delete branches after merging: git branch -d feature-login"
    },
    {
      question: "How do you undo the last commit?",
      answer: "Use git reset to remove commit (rewrites history) or git revert to create inverse commit (safe for shared branches). Soft reset keeps changes staged, mixed keeps unstaged, hard discards everything.",
      example: "git reset --soft HEAD~1      # Undo commit, keep changes staged\ngit reset --mixed HEAD~1     # Undo commit, unstage changes\ngit reset --hard HEAD~1      # Completely remove commit (dangerous)\ngit revert HEAD              # Safe: creates new commit undoing last",
      output: "Last commit undone (method depends on situation)",
      note: "Use revert for public branches, reset for local commits only."
    },
    {
      question: "What is a .gitignore file?",
      answer: ".gitignore specifies intentionally untracked files that Git should ignore. Patterns for logs, dependencies (node_modules), environment files, build artifacts, IDE files.",
      example: "# .gitignore file\nnode_modules/\n.env\n*.log\ndist/\n.DS_Store\ncoverage/\n\n# Negation pattern\n!important.log  # Track this despite *.log rule",
      output: "Specified files/directories excluded from version control",
      note: "Commit .gitignore early. Use git check-ignore to test patterns."
    },
    {
      question: "What is the difference between git stash and git commit?",
      answer: "Stash temporarily saves uncommitted changes (not in history) without committing. Commit permanently saves changes to repository history. Stash is for switching branches, commit is for saving progress.",
      example: "git stash push -m 'WIP'      # Save uncommitted changes\ngit checkout main\ngit stash pop                   # Apply and remove stash\n\ngit add .\ngit commit -m 'Feature complete'  # Permanent save",
      output: "Stash: temporary, unsaved; Commit: permanent, saved",
      note: "Use stash for quick context switching. Use commit for checkpoints."
    },
    {
      question: "How do you see the commit history?",
      answer: "git log shows commit history. Use flags: --oneline (compact), --graph (branch visualization), --author (filter by author), --since (date filter), -p (show diffs).",
      example: "git log                       # Full history\ngit log --oneline            # One line per commit\ngit log --graph --all        # Visual branch structure\ngit log --author='John'\ngit log --since='2 weeks ago'\ngit log -p                   # Show actual changes",
      output: "Displays commit history with hash, author, date, message",
      note: "Use git log --oneline --graph for quick branch overview."
    },
    {
      question: "What is the staging area in Git?",
      answer: "Staging area (index) is intermediate area between working directory and repository. Use git add to stage changes, git commit to save staged changes. Allows selective commits.",
      example: "git add file1.js             # Stage specific file\ngit add .                    # Stage all changes\ngit add src/                 # Stage directory\ngit status                   # See staged changes\ngit commit -m 'Message'      # Commit only staged changes",
      output: "Staging area holds changes ready to be committed",
      note: "git commit -a stages and commits tracked files in one step."
    },
    {
      question: "What is a Git tag? Types of tags?",
      answer: "Tags mark specific commits (releases, versions). Lightweight tags are simple pointers. Annotated tags store metadata (author, date, message, GPG signature).",
      example: "# Lightweight tag (just pointer)\ngit tag v1.0.0\n\n# Annotated tag (with metadata)\ngit tag -a v1.0.0 -m 'Production release'\n\n# Show tag details\ngit show v1.0.0\n\n# Push tags to remote\ngit push origin v1.0.0\ngit push --tags                # All tags",
      output: "Tags mark important commits with readable names",
      note: "Use annotated tags for releases, lightweight for temporary marks."
    },
    {
      question: "How do you rename a branch?",
      answer: "Use git branch -m to rename branch. Current branch: git branch -m new-name. Other branch: git branch -m old-name new-name. Update remote after rename.",
      example: "# Rename current branch\ngit branch -m feature-login\n\n# Rename other branch\ngit branch -m old-feature-bug new-feature-fix\n\n# Update remote\ngit push origin -u new-name\ngit push origin --delete old-name",
      output: "Branch renamed successfully",
      note: "Remote branches need separate delete and push steps."
    },
    {
      question: "What is the difference between git clone and git fork?",
      answer: "Clone copies remote repository to local machine. Fork copies repository on GitHub (server-side) to your account. Clone is local copy, fork is server copy.",
      example: "# Clone (local copy)\ngit clone https://github.com/user/repo.git\n\n# Fork (GitHub UI) - then clone your fork\ngit clone https://github.com/your-username/repo.git",
      output: "Clone: local copy; Fork: server copy under your account",
      note: "Fork then clone for contributing to others' projects."
    },
    {
      question: "What is 'git cherry-pick'?",
      answer: "Applies specific commit(s) from one branch to another without merging entire branch. Useful for backporting fixes, applying hotfixes.",
      example: "git checkout main\ngit cherry-pick a1b2c3d        # Apply single commit\ngit cherry-pick a1b2c3d d4e5f6g  # Multiple commits\ngit cherry-pick main..feature   # Range of commits",
      output: "Specific commits applied to current branch",
      note: "Cherry-pick creates new commits (different SHAs). Avoid duplicate commits."
    },
    {
      question: "How do you discard local changes?",
      answer: "Use git restore (Git 2.23+) or git checkout -- to discard working directory changes. Use git restore --staged to unstage. Use git clean to remove untracked files.",
      example: "# Discard working directory changes\ngit restore file.txt\ngit checkout -- file.txt       # Older syntax\n\n# Unstage but keep changes\ngit restore --staged file.txt\n\n# Remove untracked files\ngit clean -n                   # Preview\ngit clean -fd                  # Remove files and directories",
      output: "Local changes discarded",
      note: "Discarded changes cannot be recovered. Use stash if unsure."
    },
    {
      question: "What is the difference between HEAD, working tree, and index?",
      answer: "HEAD points to current commit (last commit). Working tree is your current files (may have uncommitted changes). Index (staging area) is between working tree and HEAD, holds changes ready to commit.",
      example: "git diff                    # Working tree vs index\ngit diff --staged            # Index vs HEAD\ngit diff HEAD                # Working tree vs HEAD\ngit add .                    # Working tree -> Index\ngit commit                   # Index -> Repository",
      output: "Three trees: HEAD (committed), Index (staged), Working Tree (current)",
      note: "Think: Working Tree (edit) -> Index (stage) -> HEAD (commit)"
    },
    {
      question: "What is a fast-forward merge?",
      answer: "When branch is directly ahead of target (linear history), Git just moves pointer forward. No merge commit created. Happens when no divergent changes.",
      example: "git checkout main\ngit merge feature              # Fast-forward if feature ahead\n# Only works if main hasn't changed since feature branched\n\n# Prevent fast-forward (force merge commit)\ngit merge --no-ff feature",
      output: "Pointer moves forward, no merge commit",
      note: "Use --no-ff to preserve branch history in logs."
    },
    {
      question: "How do you see which files will be pushed?",
      answer: "git diff --stat origin/main shows local vs remote differences. git log origin/main..HEAD shows commits to push. git status shows staged changes.",
      example: "git status                    # Shows staged/unstaged\ngit diff --stat origin/main   # Files changed locally vs remote\ngit log origin/main..HEAD     # Commits to be pushed\ngit push --dry-run            # Simulate push without sending",
      output: "Files and commits pending push displayed",
      note: "Always review before push to avoid pushing unwanted changes."
    },
    {
      question: "What is the purpose of .gitkeep files?",
      answer: ".gitkeep is convention (not Git feature) to track empty directories. Git doesn't track empty directories; .gitkeep file forces directory inclusion.",
      example: "mkdir empty-directory\ntouch empty-directory/.gitkeep\ngit add empty-directory/.gitkeep\n\n# Or for log directory\nmkdir logs\ntouch logs/.gitkeep",
      output: "Empty directory now tracked in Git",
      note: "Can use any placeholder file (README.md, .gitignore)."
    },
    {
      question: "What is a remote tracking branch?",
      answer: "Remote tracking branch references remote branch state. Format: <remote>/<branch> (e.g., origin/main). Updated by git fetch. Local branch can track remote branch.",
      example: "git branch -r                 # List remote branches\ngit checkout -b feature origin/feature  # Track remote branch\ngit push -u origin feature      # Set upstream tracking\ngit branch -vv                  # Show tracking relationships",
      output: "Local branch connected to remote branch",
      note: "git pull uses tracking info to know which remote to fetch."
    },
    {
      question: "How do you delete a remote branch?",
      answer: "Delete remote branch with git push --delete or git push :<branch>. Local branch remains; delete separately if needed.",
      example: "git push origin --delete feature-branch\n# OR\ngit push origin :feature-branch\n\n# Delete local branch\ngit branch -d feature-branch\n\n# Prune remote tracking references\ngit remote prune origin",
      output: "Remote branch deleted",
      note: "Deleted remote branches still show in git branch -r until prune."
    },
    {
      question: "What is the difference between git reset and git revert?",
      answer: "Reset moves branch pointer (rewrites history). Revert creates new commit undoing previous commit (preserves history). Reset for local, revert for shared branches.",
      example: "git reset --hard HEAD~1      # Remove last commit (rewrite history)\ngit revert HEAD               # Create new commit that undoes last\ngit revert a1b2c3d            # Revert specific commit",
      output: "Reset: history changed; Revert: history preserved",
      note: "Never reset shared branches. Use revert for public history."
    },
    {
      question: "How do you temporarily save work without committing?",
      answer: "Use git stash to save uncommitted changes. Later apply with git stash pop or git stash apply. Multiple stashes form stack.",
      example: "git stash save 'WIP login'    # Save with message\ngit stash list                # List all stashes\ngit stash pop                 # Apply and remove latest\ngit stash apply stash@{2}     # Apply without removing\ngit stash drop stash@{1}      # Remove specific stash\ngit stash clear               # Remove all",
      output: "Changes saved temporarily, working directory clean",
      note: "Stash untracked files with git stash -u"
    },
    {
      question: "What is the difference between git and SVN?",
      answer: "Git is DVCS (distributed), each copy has full history. SVN is CVCS (centralized), single central repository. Git works offline, faster branching/merging. SVN has linear history.",
      example: "git clone https://repo.git    # Full copy with history\nsvn checkout https://repo.svn   # Working copy only\n\ngit commit -m 'message'         # Commits locally\nsvn commit -m 'message'          # Commits to central server",
      output: "Git: distributed, offline, fast branching; SVN: centralized, requires network",
      note: "Git replaced SVN in most modern development workflows."
    }
  ],
  
  experienced: [
    {
      question: "What are Git hooks? Give examples.",
      answer: "Hooks are scripts that run automatically on Git events. Client-side: pre-commit (lint/test), prepare-commit-msg (edit message), post-commit (notify). Server-side: pre-receive (reject push), post-receive (deploy).",
      example: "# .git/hooks/pre-commit\n#!/bin/sh\necho 'Running tests...'\nnpm test\nif [ $? -ne 0 ]; then\n  echo 'Tests failed. Commit aborted.'\n  exit 1\nfi\n\n# .git/hooks/commit-msg\n#!/bin/sh\nmsg=\"$(cat $1)\"\nif ! echo \"$msg\" | grep -qE '^(feat|fix|docs):'; then\n  echo 'Commit message must follow Conventional Commits'\n  exit 1\nfi",
      output: "Runs linting/tests before commit; blocks commit if fails",
      note: "Hooks are not versioned by default. Use Husky for team hook sharing."
    },
    {
      question: "What is git reflog and how can it save you?",
      answer: "Reflog records all branch and HEAD changes (commits, checkouts, resets, rebases, merges). Local-only, expires after 90 days. Recovers 'lost' commits not in any branch.",
      example: "git reflog\n# Shows:\n# a1b2c3d HEAD@{0}: commit: Add feature\n# d4e5f6g HEAD@{1}: rebase -i: fast-forward\n# h7i8j9k HEAD@{2}: reset: moving to HEAD~3\n\ngit checkout a1b2c3d           # Recover lost commit\ngit switch -c recovered-branch # Save to branch\n\n# Show reflog for specific branch\ngit reflog show feature-branch",
      output: "Recovers commits that seem lost after reset or rebase",
      note: "Reflog is local - can't recover what wasn't in your repository."
    },
    {
      question: "What is git bisect? How do you use it?",
      answer: "Bisect performs binary search through commit history to find bug origin. Mark known good commit and bad commit. Git checks out midpoint; test, mark good/bad, repeat until bug commit found.",
      example: "git bisect start\ngit bisect bad                 # Current version broken\ngit bisect good v1.0.0         # Known working version\n\n# Git checks out midpoint\nnpm test                       # Run your test\n\ngit bisect good                # If this version works\ngit bisect bad                 # If this version broken\n\n# Repeat until commit found\ngit bisect reset               # Return to original branch\n\n# Automatic bisect with script\ngit bisect run npm test",
      output: "Finds exact commit that introduced bug",
      note: "Bisect saves enormous time on large repositories. ~10 steps for 1000 commits."
    },
    {
      question: "What are Git worktrees? When to use them?",
      answer: "Worktrees allow checking out multiple branches simultaneously in different directories. Avoids stash switching or cloning. Great for reviewing PRs, parallel builds, long-running experiments.",
      example: "# Add worktree for branch\ngit worktree add ../project-feature feature-branch\ngit worktree add ../project-hotfix hotfix\n\n# List worktrees\ngit worktree list\n\n# Review PR without losing current work\ncd ../project-feature\n# Review code, run tests\n\n# Remove when done\ngit worktree remove ../project-feature",
      output: "Multiple branches checked out simultaneously",
      note: "Worktrees share repository, not branches. Changes reflect everywhere."
    },
    {
      question: "What are Git submodules? Advantages and disadvantages?",
      answer: "Submodules embed external repositories inside your repository. Share code across projects, pin specific versions. Disadvantages: complexity, detached HEAD, extra steps for updates.",
      example: "# Add submodule\ngit submodule add https://github.com/lib/common.git libs/common\n\n# Clone with submodules\ngit clone --recursive https://github.com/project/main.git\n\n# Update submodules\ngit submodule update --remote\n\n# Inside submodule (detached HEAD by default)\ncd libs/common\ngit checkout main               # Get on branch\ngit pull origin main            # Update",
      output: "External repository tracked at specific commit",
      note: "Alternatives: package managers, monorepos, git subtree."
    },
    {
      question: "How do you change the last commit message?",
      answer: "Use git commit --amend to modify last commit message or add forgotten changes. For older commits, use interactive rebase.",
      example: "# Change last commit message\ngit commit --amend -m \"New message\"\n\n# Add forgotten file to last commit\ngit add forgotten.js\ngit commit --amend --no-edit\n\n# Change older commit message\ngit rebase -i HEAD~3\n# Mark commit as 'reword'\n# Save and edit message",
      output: "Commit message updated (new SHA hash)",
      note: "Amend rewrites history. Don't amend pushed commits."
    },
    {
      question: "What is git rerere? How does it help?",
      answer: "Rerere (Reuse Recorded Resolution) remembers how you resolved merge conflicts. Automatically applies same resolution when conflicting hunks reappear. Great for long-running branches with frequent merges.",
      example: "# Enable rerere\ngit config --global rerere.enabled true\n\n# Conflict recorded when resolved\n# Next time same conflict appears, rerere applies resolution\n\n# View recorded resolutions\ngit rerere status\ngit rerere diff\n\n# Forget recorded resolution\ngit rerere forget file.txt\n\n# Manual rr-cache inspection\nls .git/rr-cache/",
      output: "Conflict resolutions remembered and reapplied automatically",
      note: "Rerere is local. Use carefully with squashed commits."
    },
    {
      question: "Explain git filter-branch. When to use it?",
      answer: "filter-branch rewrites history by applying filters (remove files, change emails, split repositories). Powerful but dangerous. Use git filter-repo (modern alternative). Rewrites commit SHAs.",
      example: "# Remove file from all commits\ngit filter-branch --tree-filter 'rm -f secret.txt' HEAD\n\n# Change author email globally\ngit filter-branch --env-filter '\nOLD_EMAIL=\"old@example.com\"\nCORRECT_NAME=\"New Name\"\nCORRECT_EMAIL=\"new@example.com\"\nif [ \"$GIT_COMMITTER_EMAIL\" = \"$OLD_EMAIL\" ]\nthen\n    export GIT_COMMITTER_NAME=\"$CORRECT_NAME\"\n    export GIT_COMMITTER_EMAIL=\"$CORRECT_EMAIL\"\nfi\n' HEAD\n\n# Modern alternative (git filter-repo)\ngit filter-repo --path secret.txt --invert-paths",
      output: "History rewritten according to filters",
      note: "Use --force-with-lease to push rewritten history. Always backup first."
    },
    {
      question: "How do you squash commits? Why?",
      answer: "Squash combines multiple commits into one using interactive rebase. Cleans up messy commit history, groups related changes, removes fixup commits before merging.",
      example: "git rebase -i HEAD~4\n# Editor opens:\n# pick a1b2c3d Add feature\n# squash d4e5f6g Fix typo\n# squash h7i8j9k Add test\n# pick i9j0k1l Add docs\n\n# After rebase: 3 commits become 2 commits\n\n# Squash using merge\ngit merge --squash feature-branch  # Stages all changes as single commit\n\n# Automatic squash with fixup\ngit commit --fixup a1b2c3d\ngit rebase -i --autosquash HEAD~5",
      output: "Multiple commits combined into single commit",
      note: "Squash before merging feature branches to main for clean history."
    },
    {
      question: "What is the difference between git switch and git checkout?",
      answer: "Git 2.23 introduced switch (branch operations) and restore (file operations). Checkout does both (confusing). Switch is safer, more intuitive for branch switching.",
      example: "# Old way (checkout does everything)\ngit checkout feature-branch     # Switch branch\ngit checkout -b new-branch      # Create and switch\ngit checkout -- file.txt        # Discard changes\n\n# New way (clear separation)\ngit switch feature-branch       # Switch branch\ngit switch -c new-branch        # Create and switch\ngit restore file.txt            # Discard changes\ngit restore --staged file.txt   # Unstage",
      output: "Switch handles branches; Restore handles files",
      note: "Switch is recommended for new users. Checkout still works."
    },
    {
      question: "Explain git's three-tree architecture.",
      answer: "Git manages: Working Tree (current files, editable), Index (staging area), HEAD (last commit). Changes flow: Working Tree -> (git add) -> Index -> (git commit) -> HEAD.",
      example: "# Add changes (Working Tree -> Index)\ngit add file.txt\n\n# Commit (Index -> HEAD)\ngit commit -m 'Message'\n\n# Check differences\ngit diff                    # Working Tree vs Index\ngit diff --staged           # Index vs HEAD\ngit diff HEAD               # Working Tree vs HEAD\n\n# Reset (move changes backward)\ngit reset --soft HEAD~1     # HEAD -> Index\ngit reset --mixed HEAD~1    # HEAD -> Working Tree\ngit reset --hard HEAD~1     # Discard everything",
      output: "Three trees: Working (editable), Index (staged), HEAD (committed)",
      note: "Understanding three trees is key to mastering Git."
    },
    {
      question: "How do you handle large files in Git?",
      answer: "Git not designed for large files. Use Git LFS (Large File Storage) for binaries, media files. Stores pointers in repo, actual files on LFS server. Alternative: git-annex, or exclude from version control.",
      example: "# Install Git LFS\ngit lfs install\n\n# Track file types\ngit lfs track \"*.psd\"\ngit lfs track \"*.zip\"\ngit lfs track \"assets/*\"\n\n# Add .gitattributes\ncat .gitattributes\n\n# Use normally\ngit add file.psd\ngit commit -m \"Add design file\"\ngit push origin main  # Pushes LFS files separately\n\n# Clone with LFS\ngit lfs clone https://github.com/user/repo.git",
      output: "Large files stored efficiently with LFS server",
      note: "Git LFS requires server support (GitHub, GitLab, Bitbucket)."
    },
    {
      question: "What is a bare repository? When to use it?",
      answer: "Bare repository has no working tree (no files checked out). Contains only .git contents. Used as central remote repository (server). Cannot edit files directly, only push/pull.",
      example: "# Create bare repository\ngit init --bare /path/to/repo.git\n\n# Clone creates working tree\ngit clone /path/to/repo.git my-working-copy\n\n# Push to bare\ngit push origin main\n\n# View contents (no working tree)\nls /path/to/repo.git\n# Shows: branches, config, objects, refs, HEAD",
      output: "Repository without working tree, ideal for central server",
      note: "Server repositories should be bare. Cannot git status in bare repo."
    },
    {
      question: "How do you find commits that deleted a file?",
      answer: "Use git log with --diff-filter=D to find deletion commits. --follow tracks renames. git rev-list lists commits affecting file.",
      example: "# Find when file was deleted\ngit log --diff-filter=D --summary | grep delete\n\n# More specific\ngit log --diff-filter=D -- file.txt\n\n# Find commits that deleted file\ngit log --diff-filter=D --name-only --oneline | grep file.txt\n\n# Restore deleted file\ngit checkout a1b2c3d^ -- file.txt  # Restore from before deletion\n\n# Find all deleted files\ngit log --diff-filter=D --summary --oneline",
      output: "Shows commits where file was deleted",
      note: "Use ^ (parent commit) to restore file from before deletion."
    },
    {
      question: " What is git prune? When is it needed?",
      answer: "prune removes unreachable objects (commits not in any branch or reflog). Free space after rebase, reset, or force push. Git auto-prunes, but manual prune may be needed.",
      example: "# Dry run (show what would be removed)\ngit prune --dry-run\n\n# Remove unreachable objects\ngit prune\n\n# Prune remote tracking branches\ngit remote prune origin\n\n# Garbage collection with pruning\ngit gc --prune=now\n\ngit gc --aggressive --prune=now\n\n# Check repository size before/after\ndu -sh .git/",
      output: "Unreachable objects removed, repository size reduced",
      note: "Can't recover pruned commits. Reflog must expire first (90 days default)."
    },
    {
      question: "How do you sign commits with GPG?",
      answer: "GPG signing proves commit authorship. Configure signing key, use -S flag. Verified badges on GitHub. Essential for open source and security-sensitive projects.",
      example: "# Generate GPG key\ngpg --full-generate-key\ngpg --list-secret-keys --keyid-format LONG\n\n# Configure Git\ngit config --global user.signingkey A1B2C3D4E5F6G7H8\ngit config --global commit.gpgsign true\n\n# Sign commits\ngit commit -S -m \"Signed commit\"\ngit commit -S --amend          # Sign last commit\n\n# Sign tags\ngit tag -s v1.0.0 -m \"Signed tag\"\n\n# Verify signatures\ngit log --show-signature\ngit verify-commit HEAD\ngit verify-tag v1.0.0",
      output: "Commits marked as verified on GitHub/GitLab",
      note: "Export public key to GitHub/GitLab settings for verification."
    },
    {
      question: "What is git worktree vs git submodule?",
      answer: "Worktree: multiple branches checked out simultaneously from same repo. Submodule: external repo embedded inside repo (different history). Worktree for parallel work, submodule for dependencies.",
      example: "# Worktree (same repo, different branches)\ngit worktree add ../project-feature feature\ngit worktree add ../project-docs gh-pages\n\n# Submodule (external repo)\ngit submodule add https://github.com/lib/common.git libs/common\n\n# Worktree use case: Review PR while coding\n# Submodule use case: Shared library used by multiple projects",
      output: "Worktree: parallel branches; Submodule: external dependencies",
      note: "Worktree shares .git; Submodule has independent .git."
    },
    {
      question: "How do you migrate from SVN to Git?",
      answer: "Use git svn clone to migrate SVN repository. Preserves history, branches, tags. Clean up with git filter-repo. Alternative: svn2git (Ruby) or Atlassian's migration tool.",
      example: "# Clone SVN with standard layout\ngit svn clone https://svn.example.com/repo --stdlayout\n\n# Clone without metadata\ngit svn clone https://svn.example.com/repo --no-metadata\n\n# Fetch authors mapping\ngit svn clone https://svn.example.com/repo --authors-file=authors.txt\n\n# Update from SVN after migration\ngit svn fetch\ngit svn rebase\n\n# Clean up\ngit svn gc\n\n# Push to Git remote\ngit remote add origin https://github.com/user/repo.git\ngit push origin --all\ngit push origin --tags",
      output: "SVN repository migrated to Git with history preserved",
      note: "Large SVN repos may take hours. Test migration first."
    },
    {
      question: " Explain git's object model.",
      answer: "Git objects: Blob (file content), Tree (directory structure), Commit (snapshot with metadata), Tag (named reference). Objects identified by SHA-1 hash. Referenced by branches, HEAD.",
      example: "# View object type\ngit cat-file -t a1b2c3d\n# commit, tree, blob, tag\n\n# View object content\ngit cat-file -p a1b2c3d\n# tree d4e5f6g\n# parent h7i8j9k\n# author John <john@example.com>\n# Add feature\n\n# List all objects\ngit cat-file --batch-check --batch-all-objects\n\n# Find object references\ngit rev-list --all --objects\n\n# Graph of objects\ngit log --graph --pretty=raw",
      output: "Shows Git's internal object structure",
      note: "Same content = same blob hash across commits (deduplication)."
    },
    {
      question: " What is the difference between --soft, --mixed, --hard reset?",
      answer: "--soft: moves HEAD only (changes remain staged). --mixed (default): moves HEAD and unstages changes (keeps working tree). --hard: moves HEAD, unstages, DISCARDS working tree changes (dangerous).",
      example: "# Before reset: HEAD~1 (old commit) <- HEAD (current commit)\n\n# --soft: HEAD moves, changes staged\ngit reset --soft HEAD~1\ngit status  # Changes shown as staged\n\n# --mixed: HEAD moves, changes unstaged\ngit reset --mixed HEAD~1\ngit status  # Changes shown as unstaged\n\n# --hard: HEAD moves, changes LOST!\ngit reset --hard HEAD~1\ngit status  # Working clean, no trace of changes",
      output: "Different levels of undo: staged, unstaged, or lost",
      note: "Hard reset is irreversible (except via reflog). Use with extreme caution."
    },
    {
      question: "How do you handle submodules in CI/CD pipelines?",
      answer: "CI/CD must initialize and update submodules recursively. Use --recursive flag. Authenticate for private submodules. Consider SSH keys or deploy tokens.",
      example: "# GitHub Actions example\n- name: Checkout with submodules\n  uses: actions/checkout@v3\n  with:\n    submodules: recursive\n    token: ${{ secrets.SUBMODULE_TOKEN }}\n\n# GitLab CI example\nvariables:\n  GIT_SUBMODULE_STRATEGY: recursive\n\n# Command line\ngit clone --recursive https://repo.git\ngit submodule update --init --recursive\n\n# Update submodules in CI\ngit submodule update --remote\n\n# Shallow submodules for speed\ngit clone --depth 1 --recursive https://repo.git",
      output: "CI/CD properly fetches and updates submodules",
      note: "Private submodules need authentication in CI environment."
    },
    {
      question: " What is git rerere and how to use it in rebase?",
      answer: "rerere remembers conflict resolutions. During rebase, automatically reapplies previous resolutions. Dramatically reduces manual conflict resolution in long-running rebase workflows.",
      example: "# Enable rerere\ngit config --global rerere.enabled true\n\n# First rebase (manual resolution)\ngit rebase main\n# Conflict in file.txt - resolve manually\ngit add file.txt\ngit rebase --continue\n\n# Second rebase (automatic resolution)\ngit rebase main\n# Conflict in file.txt - rerere applies saved resolution\n\n# See recorded resolutions\ngit rerere status\ngit rerere diff\n\n# Useful for long-running feature branches\ngit pull --rebase origin main  # Rerere helps each week",
      output: "Previous conflict resolutions reapplied automatically",
      note: "Rerere locally stored. Works best with consistent conflict patterns."
    },
    {
      question: "How do you split a Git repository?",
      answer: "Use git filter-repo or git subtree split to extract subdirectory into new repository. Preserves relevant history. Update original repo to remove extracted code.",
      example: "# Using git filter-repo (recommended)\ngit filter-repo --subdirectory-filter libs/common --path common\n\n# Using git subtree split\ngit subtree split -P libs/common -b extracted-branch\n\n# Create new repo\ngit init --bare new-repo.git\ncd new-repo.git\ngit pull ../original-repo extracted-branch\n\n# Remove from original (if needed)\ncd ../original-repo\ngit filter-repo --path libs/common --invert-paths\n\n# Add as submodule in original\ngit submodule add https://github.com/new/common.git libs/common",
      output: "Subdirectory extracted into independent repository",
      note: "Backup before splitting. Communicate with team about repository changes."
    },
    {
      question: "What is git notes? When to use them?",
      answer: "git notes adds extra information to commits without changing commit SHA. Used for: code review comments, CI results, after-the-fact annotations, release notes.",
      example: "# Add note to commit\ngit notes add -m \"Reviewed by John\" a1b2c3d\n\n# Append notes\ngit notes append -m \"LGTM\" a1b2c3d\n\n# Show notes\ngit log --show-notes\n\n# List all notes\ngit notes list\n\n# Remove note\ngit notes remove a1b2c3d\n\n# Push notes to remote\ngit push origin refs/notes/*\n\n# Fetch notes\ngit fetch origin refs/notes/*:refs/notes/*\n\n# Use notes refs namespace\ngit notes --ref=reviews add -m \"Approved\" a1b2c3d",
      output: "Additional metadata attached to commits",
      note: "Notes are versioned but not pulled by default. Explicitly push/pull refs/notes/*."
    },
    {
      question: "How do you debug Git performance issues?",
      answer: "Use GIT_TRACE environment variables. Profile with GIT_TRACE_PERFORMANCE. Check repository size (du -sh .git). Run git gc. Use git maintenance for automatic optimization.",
      example: "# Trace executed commands\nexport GIT_TRACE=1\ngit status\n\n# Trace performance\nexport GIT_TRACE_PERFORMANCE=1\ngit log --oneline\n\n# Trace packfile access\nexport GIT_TRACE_PACK_ACCESS=1\ngit fetch\n\n# Check repository size\ndu -sh .git\ngit count-objects -vH\n\n# Find large files\ngit rev-list --objects --all | git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' | awk '/^blob/ {print substr($0,6)}' | sort --numeric-sort --key=2 --reverse | head -10\n\n# Optimize\ngit gc --aggressive --prune=now\ngit maintenance start\ngit repack -ad --depth=250 --window=250",
      output: "Performance bottlenecks identified",
      note: "Large repositories (>1GB) may need LFS or shallow clones."
    }
  ]
};

export default interview;