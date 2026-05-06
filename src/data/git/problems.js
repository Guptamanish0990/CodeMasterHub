// /data/git/problems.js

export const problems = {
  fresher: [
    {
      title: "Initialize a Git Repository",
      description: "Create a new Git repository in an existing directory.",
      answer: "Use 'git init' to initialize a new Git repository in the current directory. This creates a .git folder that contains all the version control information. Run this command in the root of your project folder.",
      example: "cd my-project\ngit init",
      output: "Initialized empty Git repository in /path/to/my-project/.git/",
      note: "💡 Don't initialize a Git repo inside another Git repo (nested repos)."
    },
    {
      title: "Clone a Remote Repository",
      description: "Download a copy of a remote repository to your local machine.",
      answer: "Use 'git clone' followed by the repository URL. This creates a local copy of the remote repository including all files, branches, and commit history. You can optionally specify a directory name as the second argument.",
      example: "git clone https://github.com/username/repository.git\n# Or with custom name\ngit clone https://github.com/username/repository.git my-folder",
      output: "Cloning into 'repository'...\nremote: Enumerating objects: 100, done.\nremote: Counting objects: 100% (100/100), done.",
      note: "💡 Use --depth 1 for shallow clone (only latest commit) to save bandwidth."
    },
    {
      title: "Check Repository Status",
      description: "Check the current status of your working directory and staging area.",
      answer: "Use 'git status' to see which files are staged, unstaged, or untracked. This is the most frequently used Git command. It shows changes to be committed, changes not staged for commit, and untracked files.",
      example: "git status\n# Short format\ngit status -s",
      output: "On branch main\nChanges to be committed:\n  new file:   newfile.txt\nChanges not staged for commit:\n  modified:   existing.txt\nUntracked files:\n  temp.log",
      note: "💡 Run 'git status' frequently to know what's happening in your repo."
    },
    {
      title: "Add Files to Staging Area",
      description: "Add specific files or all changes to the staging area before committing.",
      answer: "Use 'git add' to stage changes. You can add specific files, directories, or all changes. Staging is like preparing changes for a snapshot. Use '.' for all changes in current directory, '*' for all files.",
      example: "# Add specific file\ngit add index.html\n# Add all files in current directory\ngit add .\n# Add all files with pattern\ngit add *.js\n# Add all files (including new, modified, deleted)\ngit add -A",
      output: "No output on success. Use 'git status' to verify staged files.",
      note: "💡 'git add -p' allows interactive staging of chunks within a file."
    },
    {
      title: "Commit Changes",
      description: "Save staged changes to the repository with a descriptive message.",
      answer: "Use 'git commit -m' to create a commit with a message. Commit messages should be descriptive and in present tense. The -m flag adds the message inline. Without -m, an editor opens for multi-line message.",
      example: "# Basic commit\ngit commit -m \"Add new feature\"\n# Commit with description and body\ngit commit -m \"Add feature\" -m \"- Implement login\n- Add tests\"\n# Commit all tracked files (skip add)\ngit commit -a -m \"Update all tracked files\"",
      output: "[main abc1234] Add new feature\n 1 file changed, 10 insertions(+)",
      note: "💡 Commit messages should follow convention: subject line (max 50 chars), blank line, detailed description."
    },
    {
      title: "View Commit History",
      description: "Display the commit history of the repository.",
      answer: "Use 'git log' to view commit history. Shows commit hash, author, date, and message. Various options customize output: --oneline (compact), --graph (branch visualization), --author (filter by author), --since (date filter).",
      example: "# Standard log\ngit log\n# One line per commit\ngit log --oneline\n# Last 3 commits\ngit log -3\n# Graph with branches\ngit log --graph --oneline --all",
      output: "abc1234 (HEAD -> main) Add new feature\ndef5678 Fix bug in login\nghi9012 Initial commit",
      note: "💡 Use 'git log --oneline --graph' for better branch visualization."
    },
    {
      title: "View Changes with Diff",
      description: "See the differences between working directory, staging area, and last commit.",
      answer: "Use 'git diff' to show unstaged changes. 'git diff --staged' shows staged changes. 'git diff HEAD' shows all changes since last commit. Compare branches with 'git diff branch1..branch2'.",
      example: "# Unstaged changes\ngit diff\n# Staged changes\ngit diff --staged\n# Compare with last commit\ngit diff HEAD\n# Between two branches\ngit diff main..feature",
      output: "diff --git a/file.txt b/file.txt\nindex 1234567..89abcde 100644\n--- a/file.txt\n+++ b/file.txt\n@@ -1 +1 @@\n-Hello\n+Hello World",
      note: "💡 'git diff --color-words' shows word-level differences for better readability."
    },
    {
      title: "Unstage a File",
      description: "Remove a file from the staging area while keeping working directory changes.",
      answer: "Use 'git reset HEAD <file>' or 'git restore --staged <file>' to unstage a file. This removes it from staging but keeps your modifications. Use 'git reset' without file to unstage all files.",
      example: "# Unstage specific file\ngit restore --staged file.txt\n# Alternative syntax\ngit reset HEAD file.txt\n# Unstage all files\ngit restore --staged .",
      output: "Unstaged changes after reset:\nM       file.txt",
      note: "💡 'git restore' is newer and more intuitive than 'git reset' for unstaging."
    },
    {
      title: "Discard Working Directory Changes",
      description: "Revert a file to its last committed state, discarding all local modifications.",
      answer: "Use 'git restore <file>' or 'git checkout -- <file>' to discard changes. This permanently removes uncommitted changes. Cannot be undone! Use 'git clean' to remove untracked files.",
      example: "# Discard changes to specific file\ngit restore file.txt\n# Older syntax\ngit checkout -- file.txt\n# Discard all changes (keep staged)\ngit restore .\n# Remove untracked files\ngit clean -fd",
      output: "Updated 1 path from the index",
      note: "💡 This action is irreversible! Use 'git stash' if you might need changes later."
    },
    {
      title: "Create a New Branch",
      description: "Create a new branch to work on features without affecting the main codebase.",
      answer: "Use 'git branch' to create a branch. Use 'git checkout -b' to create and switch in one command. Branch names should be descriptive. Local branches exist only on your machine until pushed.",
      example: "# Create branch only\ngit branch feature-login\n# Create and switch to branch\ngit checkout -b feature-login\n# Create branch from specific commit\ngit checkout -b hotfix abc1234",
      output: "Switched to a new branch 'feature-login'",
      note: "💡 Always create feature branches from an up-to-date main branch."
    },
    {
      title: "Switch Between Branches",
      description: "Switch from one branch to another to work on different features.",
      answer: "Use 'git checkout' or 'git switch' (newer) to move between branches. Your working directory updates to match the branch. Uncommitted changes may cause conflicts when switching.",
      example: "# Switch using checkout\ngit checkout main\n# Switch using switch (Git 2.23+)\ngit switch feature-login\n# Create and switch\ngit switch -c new-feature",
      output: "Switched to branch 'main'",
      note: "💡 Use 'git switch' instead of 'git checkout' to avoid ambiguity."
    },
    {
      title: "Merge a Branch into Main",
      description: "Combine changes from a feature branch into the main branch.",
      answer: "First switch to main branch, then use 'git merge' to integrate changes. Fast-forward merge happens if no divergent changes. Three-way merge creates merge commit when branches have diverged.",
      example: "# Switch to main branch\ngit checkout main\n# Update main\ngit pull origin main\n# Merge feature branch\ngit merge feature-login\n# Delete branch after merge\ngit branch -d feature-login",
      output: "Updating abc1234..def5678\nFast-forward\n file.txt | 2 +-\n 1 file changed, 1 insertion(+), 1 deletion(-)",
      note: "💡 Use '--no-ff' to force merge commit even for fast-forward."
    },
    {
      title: "Delete a Branch",
      description: "Remove a local or remote branch that is no longer needed.",
      answer: "Use 'git branch -d' for safe delete (only if merged). Use '-D' for force delete (even if unmerged). Remote branches need 'git push origin --delete'.",
      example: "# Delete local merged branch\ngit branch -d feature-login\n# Force delete local branch\ngit branch -D feature-login\n# Delete remote branch\ngit push origin --delete feature-login",
      output: "Deleted branch feature-login (was abc1234).",
      note: "💡 Use '-d' to prevent accidental loss of unmerged work."
    },
    {
      title: "Pull Latest Changes from Remote",
      description: "Download and integrate remote changes into your local branch.",
      answer: "Use 'git pull' to fetch remote changes and merge them. Equivalent to 'git fetch' followed by 'git merge'. Use '--rebase' for cleaner history. Always pull before pushing to avoid conflicts.",
      example: "# Basic pull\ngit pull origin main\n# Pull with rebase\ngit pull --rebase origin main\n# Pull from upstream (forked repo)\ngit pull upstream main",
      output: "remote: Counting objects: 5, done.\nUnpacking objects: 100% (5/5), done.\nFrom github.com:user/repo\n   abc1234..def5678  main     -> origin/main\nUpdating abc1234..def5678\nFast-forward",
      note: "💡 'git pull --rebase' creates linear history without merge commits."
    },
    {
      title: "Push Changes to Remote",
      description: "Upload local commits to a remote repository.",
      answer: "Use 'git push' to send commits to remote. First push needs '-u' to set upstream. Use '--force' carefully when rewriting history. Always pull before push to avoid rejection.",
      example: "# First push with upstream\ngit push -u origin main\n# Subsequent pushes\ngit push\n# Push specific branch\ngit push origin feature-login\n# Force push (use with caution!)\ngit push --force-with-lease",
      output: "Enumerating objects: 5, done.\nCounting objects: 100% (5/5), done.\nTo github.com:user/repo.git\n   abc1234..def5678  main -> main",
      note: "💡 Use '--force-with-lease' instead of '--force' for safer force push."
    },
    {
      title: "View Remote Repositories",
      description: "List and inspect remote repositories connected to your local repo.",
      answer: "Use 'git remote -v' to view remote URLs. 'git remote show origin' displays detailed info about branches and tracking. Add remotes with 'git remote add'.",
      example: "# List remotes with URLs\ngit remote -v\n# Show detailed remote info\ngit remote show origin\n# Add new remote\ngit remote add upstream https://github.com/original/repo.git\n# Rename remote\ngit remote rename origin upstream",
      output: "origin  https://github.com/user/repo.git (fetch)\norigin  https://github.com/user/repo.git (push)",
      note: "💡 'origin' is default name for your main remote repository."
    },
    {
      title: "Create a .gitignore File",
      description: "Create a .gitignore file to exclude certain files from version control.",
      answer: "Create .gitignore file in repo root. Add patterns for files/directories to ignore. Common ignores: node_modules/, .env, *.log, .DS_Store. Use glob patterns. Already tracked files need 'git rm --cached'.",
      example: "# .gitignore content\nnode_modules/\n.env\n*.log\n.DS_Store\ndist/\ncoverage/\n# Comment line\n# Ignore all .txt files\n*.txt\n# But not this one\n!important.txt",
      output: "No output. Use 'git status' to verify ignored files don't appear.",
      note: "💡 Use 'git check-ignore -v file' to debug why a file is ignored."
    },
    {
      title: "Stash Changes Temporarily",
      description: "Save uncommitted changes temporarily to work on something else.",
      answer: "Use 'git stash' to save uncommitted changes. Working directory becomes clean. Retrieve with 'git stash pop'. Multiple stashes create a stack. Include untracked files with '-u'.",
      example: "# Stash changes\ngit stash\n# Stash with message\ngit stash push -m \"WIP: login feature\"\n# Include untracked files\ngit stash -u\n# List stashes\ngit stash list\n# Apply and remove\ngit stash pop\n# Apply without removing\ngit stash apply",
      output: "Saved working directory and index state WIP on main: abc1234 Add feature",
      note: "💡 Use 'git stash branch new-branch' to create branch from stash."
    },
    {
      title: "View Specific Commit Details",
      description: "Inspect a specific commit to see its changes and metadata.",
      answer: "Use 'git show' with commit hash to view details. Shows author, date, message, and diff. Use '--stat' for summary or '--name-only' for file list only.",
      example: "# Show full commit details\ngit show abc1234\n# Show statistics only\ngit show --stat abc1234\n# Show file names only\ngit show --name-only abc1234\n# Show commit message only\ngit log -1 --format=%B abc1234",
      output: "commit abc1234...\nAuthor: John Doe <john@example.com>\nDate:   Mon Jan 15 14:30:00 2024 +0000\n\n    Add new feature\n\ndiff --git a/file.txt b/file.txt...",
      note: "💡 'git show HEAD~2' shows commit 2 steps back from HEAD."
    },
    {
      title: "Amend Last Commit Message",
      description: "Change the message of the most recent commit.",
      answer: "Use 'git commit --amend -m' to change last commit message. Also works for adding forgotten files (stage then amend). Avoid amending pushed commits as it rewrites history.",
      example: "# Change message only\ngit commit --amend -m \"New message\"\n# Add forgotten file\ngit add forgotten.txt\ngit commit --amend --no-edit\n# Open editor to edit message\ngit commit --amend",
      output: "[main def5678] New message\n Date: Mon Jan 15 14:30:00 2024 +0000\n 1 file changed, 1 insertion(+)",
      note: "💡 Never amend commits already pushed to shared branches."
    },
    {
      title: "Reset to Previous Commit",
      description: "Move HEAD and branch pointer to a previous commit, discarding changes.",
      answer: "Use 'git reset' with different modes: --soft (keep changes staged), --mixed (keep changes unstaged), --hard (discard all). Use carefully as --hard cannot be undone easily.",
      example: "# Soft reset (keep changes staged)\ngit reset --soft HEAD~1\n# Mixed reset default (keep changes unstaged)\ngit reset HEAD~1\n# Hard reset (discard all changes)\ngit reset --hard abc1234\n# Reset to specific file\ngit reset HEAD file.txt",
      output: "Unstaged changes after reset:\nM       file.txt",
      note: "💡 'git reset --hard ORIG_HEAD' undoes a hard reset if done immediately."
    },
    {
      title: "View Branch Differences",
      description: "Compare differences between two branches.",
      answer: "Use 'git diff branch1..branch2' to see changes. 'git log branch1..branch2' shows commit differences. Use 'git diff --name-only' for file list only.",
      example: "# Show content differences\ngit diff main..feature\n# Show commit differences\ngit log main..feature --oneline\n# Show files changed\ngit diff --name-only main..feature\n# Symmetric difference\ngit diff main...feature",
      output: "diff --git a/file.txt b/file.txt\nindex 1234567..89abcde 100644\n--- a/file.txt\n+++ b/file.txt\n@@ -1 +1,2 @@\n Hello\n+World",
      note: "💡 'git diff main...feature' shows changes on feature since branching."
    },
    {
      title: "Tag a Specific Commit",
      description: "Create a tag to mark a specific commit (e.g., for releases).",
      answer: "Use 'git tag' to create lightweight or annotated tags. Annotated tags store metadata (author, date, message). Lightweight tags are just pointers. Push tags separately.",
      example: "# Lightweight tag\ngit tag v1.0.0\n# Annotated tag with message\ngit tag -a v1.0.0 -m \"Release version 1.0.0\"\n# Tag specific commit\ngit tag -a v0.9.0 abc1234\n# List tags\ngit tag -l\n# Push tags\ngit push origin --tags",
      output: "new tag: v1.0.0 (HEAD -> main)",
      note: "💡 Use annotated tags for releases; lightweight tags for personal bookmarks."
    },
    {
      title: "Revert a Commit",
      description: "Create a new commit that undoes a previous commit (safe for shared branches).",
      answer: "Use 'git revert' to create inverse commit. Unlike reset, revert preserves history. Works safely on shared branches. Auto-commit unless '--no-commit' used.",
      example: "# Revert last commit\ngit revert HEAD\n# Revert specific commit\ngit revert abc1234\n# Revert without auto-commit\ngit revert -n abc1234\n# Revert range\ngit revert HEAD~3..HEAD",
      output: "[main def5678] Revert \"Add feature\"\n 1 file changed, 1 deletion(-)",
      note: "💡 'git revert' is safer than 'git reset' for published history."
    },
    {
      title: "Cherry-pick a Commit",
      description: "Apply a specific commit from another branch to current branch.",
      answer: "Use 'git cherry-pick' to apply changes from one commit. Creates new commit with same changes but different hash. Useful for selective merging or hotfixes.",
      example: "# Cherry-pick single commit\ngit cherry-pick abc1234\n# Cherry-pick range\ngit cherry-pick abc1234..def5678\n# Cherry-pick with edit\ngit cherry-pick -e abc1234\n# Continue after conflict\ngit cherry-pick --continue",
      output: "[main def5678] Add feature from branch\n Date: Mon Jan 15 14:30:00 2024 +0000\n 1 file changed, 5 insertions(+)",
      note: "💡 Cherry-pick creates new commit hash even if content identical."
    },
    {
      title: "Set Global Git Configuration",
      description: "Configure global Git settings like user name, email, and editor.",
      answer: "Use 'git config --global' to set preferences that apply to all repos. Set user.name and user.email for commit attribution. Configure default editor, diff tool, and aliases.",
      example: "# Set user info\ngit config --global user.name \"John Doe\"\ngit config --global user.email \"john@example.com\"\n# Set default editor\ngit config --global core.editor \"code --wait\"\n# Set diff tool\ngit config --global diff.tool vscode\n# View all settings\ngit config --global --list",
      output: "user.name=John Doe\nuser.email=john@example.com\ncore.editor=code --wait",
      note: "💡 Remove '--global' to configure only current repository."
    },
    {
      title: "Create and Apply Patch",
      description: "Create a patch file from commits and apply it to another repository.",
      answer: "Use 'git format-patch' to create patch files. 'git apply' applies patch without commit info. 'git am' applies with commit metadata. Useful for sharing changes without push access.",
      example: "# Create patch from last commit\ngit format-patch -1 HEAD\n# Create patch from range\ngit format-patch abc1234..def5678\n# Apply patch (no commit)\ngit apply file.patch\n# Apply patch with commit\ngit am file.patch\n# Apply multiple patches\ngit am *.patch",
      output: "0001-Add-feature.patch\nApplying: Add feature",
      note: "💡 Use 'git send-email' to email patches to mailing lists."
    },
    {
      title: "Interactive Rebase to Reorder Commits",
      description: "Use interactive rebase to reorder, edit, or squash commits.",
      answer: "Run 'git rebase -i HEAD~N' to interact with last N commits. Editor opens with list. Reorder lines to change order. Change 'pick' to 'edit' to modify, 'squash' to combine.",
      example: "# Interactive rebase last 3 commits\ngit rebase -i HEAD~3\n# In editor:\n# pick abc1234 First commit\n# pick def5678 Second commit\n# squash ghi9012 Third commit\n# Save and close\n# For edit: make changes then continue\ngit add .\ngit rebase --continue",
      output: "Successfully rebased and updated refs/heads/main.",
      note: "💡 Never rebase commits already pushed to shared branches."
    },
    {
      title: "Bisect to Find Buggy Commit",
      description: "Use git bisect to find which commit introduced a bug.",
      answer: "Start bisect with 'git bisect start'. Mark good commit, mark bad commit. Git checks middle commit. Test, mark good/bad. Repeat until buggy commit found. End with 'git bisect reset'.",
      example: "# Start bisect\ngit bisect start\n# Mark current as bad\ngit bisect bad\n# Mark known good commit\ngit bisect good abc1234\n# Git checks commit X\n# Test and mark\ngit bisect good\n# or\ngit bisect bad\n# Continue until commit found\n# Reset bisect\ngit bisect reset",
      output: "Bisecting: 3 revisions left to test after this (roughly 2 steps)\nabc1234 is the first bad commit",
      note: "💡 Use 'git bisect run npm test' to automate testing."
    },
    {
      title: "Submodule Management",
      description: "Add, update, and clone repositories with submodules.",
      answer: "Submodules are nested Git repos. Add with 'git submodule add'. Clone with '--recursive'. Update with 'git submodule update'. Useful for shared libraries or external dependencies.",
      example: "# Add submodule\ngit submodule add https://github.com/user/lib.git libs/lib\n# Clone with submodules\ngit clone --recursive https://github.com/user/repo.git\n# Update all submodules\ngit submodule update --init --recursive\n# Update submodule to latest\ngit submodule update --remote libs/lib",
      output: "Cloning into 'libs/lib'...\nSubmodule path 'libs/lib': checked out 'abc1234'",
      note: "💡 Use 'git submodule foreach' to run commands in all submodules."
    }
  ],

  experienced: [
    {
      title: "Simulate and Resolve Merge Conflict",
      description: "Simulate a merge conflict and resolve it using Git commands.",
      answer: "Create two branches making changes to same lines of same file. Attempt merge to create conflict. Manually edit file to resolve. Remove conflict markers, stage, and commit. Verify resolution with 'git status' and 'git log'.",
      example: "# Create conflict scenario\ngit checkout -b branch-A\necho \"Line from A\" > file.txt && git add . && git commit -m \"A\"\ngit checkout main\ngit checkout -b branch-B\necho \"Line from B\" > file.txt && git add . && git commit -m \"B\"\ngit checkout main\ngit merge branch-A  # Works\n# Create conflict\ngit merge branch-B  # Conflict!\n# Resolve conflict\ncode file.txt  # Edit to desired content\ngit add file.txt\ngit commit -m \"Resolve merge conflict\"",
      output: "Auto-merging file.txt\nCONFLICT (content): Merge conflict in file.txt\nAutomatic merge failed; fix conflicts and then commit the result.",
      note: "💡 Use 'git mergetool' to launch GUI conflict resolution tool."
    },
    {
      title: "Auto-Commit Script with Timestamp",
      description: "Create a bash script to automatically commit all changes with a timestamp message.",
      answer: "Write shell script that runs 'git add -A', then 'git commit -m' with dynamic timestamp. Use date command to generate commit message. Add script to PATH or alias for easy access.",
      example: "#!/bin/bash\n# auto-commit.sh\ngit add -A\ntimestamp=$(date \"+%Y-%m-%d %H:%M:%S\")\ngit commit -m \"Auto-commit: $timestamp\"\necho \"Changes committed at $timestamp\"",
      output: "[main abc1234] Auto-commit: 2024-01-15 14:30:00\n 1 file changed, 5 insertions(+)",
      note: "💡 Make script executable: 'chmod +x auto-commit.sh'"
    },
    {
      title: "Rebase Feature onto Main and Squash Last Three Commits",
      description: "Rebase a feature branch onto main and squash the last three commits into one.",
      answer: "First ensure feature branch is up to date. Use 'git rebase -i HEAD~3' to squash last 3 commits. Change 'pick' to 'squash' for commits 2 and 3. Write new commit message. Then rebase onto main.",
      example: "# On feature branch\ngit checkout feature\n# Interactive rebase for last 3 commits\ngit rebase -i HEAD~3\n# In editor: change second and third 'pick' to 'squash'\ngit checkout main\ngit pull origin main\ngit checkout feature\ngit rebase main\n# Force push if needed\ngit push --force-with-lease",
      output: "Successfully rebased and updated refs/heads/feature.\nCreated commit xyz7890: Combined feature work",
      note: "💡 Use 'fixup' instead of 'squash' to discard commit messages."
    },
    {
      title: "Write a Pre-commit Hook for Linting",
      description: "Create a Git pre-commit hook that runs a linter before allowing commits.",
      answer: "Create .git/hooks/pre-commit file (executable). Script runs linter on staged files. Exit with non-zero code to prevent commit. Use pre-commit framework for complex hooks.",
      example: "#!/bin/bash\n# .git/hooks/pre-commit\necho \"Running linter...\"\n# Run linter on staged Python files\nSTAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep '.py$')\nif [ -n \"$STAGED_FILES\" ]; then\n    pylint $STAGED_FILES\n    if [ $? -ne 0 ]; then\n        echo \"Linting failed. Commit aborted.\"\n        exit 1\n    fi\nfi\necho \"Linting passed.\"",
      output: "Running linter...\nLinting passed.",
      note: "💡 Make hook executable: 'chmod +x .git/hooks/pre-commit'"
    },
    {
      title: "Recover a Lost Commit Using git reflog",
      description: "Use git reflog to find and recover a commit that was lost due to reset or rebase.",
      answer: "Run 'git reflog' to see history of HEAD movements. Find lost commit hash. Create new branch or reset to that commit. Use 'git checkout' to inspect, then 'git branch recover <hash>' to restore.",
      example: "# View reference log\ngit reflog\n# Output shows commit history\nabc1234 HEAD@{0}: reset: moving to HEAD~1\ndef5678 HEAD@{1}: commit: Important work\n# Recover lost commit\ngit checkout def5678\n# Create branch to save\ngit branch recovered-work\n# Or reset to restore\ngit reset --hard def5678",
      output: "def5678 HEAD@{1}: commit: Important work\nSwitched to branch 'recovered-work'",
      note: "💡 'git reflog' expires after 90 days by default."
    },
    {
      title: "Set Up Git Alias for Complex Command",
      description: "Create a Git alias for a complex command like 'git tree' to show branch graph.",
      answer: "Use 'git config --global alias.tree' to create alias. Alias can be command with flags. Complex aliases can use '!' to run shell commands.",
      example: "# Simple alias\ngit config --global alias.tree \"log --graph --oneline --all\"\n# Complex alias with format\ngit config --global alias.lg \"log --graph --pretty=format:'%C(yellow)%h%Creset - %C(green)%an%Creset, %C(blue)%ar%Creset : %s' --abbrev-commit\"\n# Shell command alias\ngit config --global alias.tree \"!git log --graph --oneline --all | head -20\"\n# Usage\ngit tree",
      output: "* abc1234 - (HEAD -> main) Add feature\n* def5678 Fix bug\n* ghi9012 Initial commit",
      note: "💡 View aliases: 'git config --get-regexp alias'"
    },
    {
      title: "Sign Commits with GPG Key",
      description: "Configure Git to sign commits with GPG key for verification.",
      answer: "Generate GPG key, add to GitHub/GitLab. Configure Git to use key. Add '-S' flag to commits. Use '--show-signature' to verify. Set 'commit.gpgsign' to sign all commits.",
      example: "# Configure GPG key\ngit config --global user.signingkey ABC123DEF456\ngit config --global commit.gpgsign true\n# Sign specific commit\ngit commit -S -m \"Signed commit\"\n# Sign tag\ngit tag -s v1.0.0 -m \"Signed tag\"\n# Verify signature\ngit log --show-signature -1",
      output: "gpg: Signature made Mon Jan 15 14:30:00 2024\ngpg: Good signature from \"John Doe <john@example.com>\"",
      note: "💡 Verify GPG setup: 'git verify-commit HEAD'"
    },
    {
      title: "Interactive Git Add with Patch Mode",
      description: "Use git add -p to stage specific hunks of a file, not entire file.",
      answer: "Run 'git add -p' or 'git add --patch'. Git shows each change hunk. Use y/n to stage/skip. Use s to split hunks. Use e to edit manually. Great for partial commits.",
      example: "# Start patch mode\ngit add -p file.txt\n# In interactive mode:\n# y - stage this hunk\n# n - skip this hunk\n# s - split hunk\n# e - edit hunk\n# q - quit\n# ? - help\n# After selection, commit\ngit commit -m \"Partially staged changes\"",
      output: "diff --git a/file.txt b/file.txt\nStage this hunk [y,n,q,a,d,s,e,?]?",
      note: "💡 'git add -p' prevents committing unrelated changes in same file."
    },
    {
      title: "Git Worktree for Multiple Branches",
      description: "Use git worktree to work on multiple branches simultaneously without stashing.",
      answer: "Create separate working directories for different branches. Each has its own working tree. Useful for parallel development. Avoids constant switching and stashing.",
      example: "# Create worktree for feature branch\ngit worktree add ../repo-feature feature\n# Create worktree from commit\ngit worktree add ../repo-hotfix abc1234\n# List worktrees\ngit worktree list\n# Remove worktree\ngit worktree remove ../repo-feature\n# Prune stale worktrees\ngit worktree prune",
      output: "Preparing worktree (new branch 'feature')\nHEAD is now at abc1234 Add feature",
      note: "💡 Worktrees share same Git directory, saving disk space."
    },
    {
      title: "Git Filter Branch to Remove Sensitive Data",
      description: "Use git filter-branch to permanently remove sensitive data from history.",
      answer: "Rewrite history using 'git filter-branch'. Remove file or replace content. Need '--force' if branch already pushed. Alternative: 'git filter-repo' or BFG Repo-Cleaner.",
      example: "# Remove file from all commits\ngit filter-branch --force --index-filter \\\n  \"git rm --cached --ignore-unmatch secrets.txt\" \\\n  --prune-empty --tag-name-filter cat -- --all\n# Replace text in all commits\ngit filter-branch --tree-filter \\\n  \"find . -name '*.txt' -exec sed -i 's/old/password/g' {} \\;\" HEAD\n# Clean up\ngit reflog expire --expire=now --all\ngit gc --prune=now --aggressive",
      output: "Rewrite abc1234..def5678 (10/10)\nRef 'refs/heads/main' was rewritten",
      note: "💡 Use BFG Repo-Cleaner for faster, simpler history rewriting."
    }
  ]
};

export default problems;