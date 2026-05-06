export const questions = [
  { 
    line: "git init", 
    explanation: "Initializes a new Git repository in the current directory, creating .git folder.", 
    example: "mkdir my-project && cd my-project && git init", 
    output: "Initialized empty Git repository in /path/to/project/.git" 
  },
  { 
    line: "git add . && git commit -m 'Initial commit'", 
    explanation: "Stages all files and creates first commit with message.", 
    example: "After git init, stage all files and save first snapshot.", 
    output: "1 file changed, 3 insertions(+), create mode 100644 file.txt" 
  },
  { 
    line: "git status", 
    explanation: "Shows working tree status: staged, unstaged, and untracked files.", 
    example: "Check what changes will be in next commit.", 
    output: "Changes to be committed: modified: app.js, Untracked files: newfile.txt" 
  },
  { 
    line: "git log --oneline --graph", 
    explanation: "Shows compact commit history with branch visualization.", 
    example: "View commit history with branch structure.", 
    output: "* a1b2c3d (HEAD -> main) Add feature\n* d4e5f6g Initial commit" 
  },
  { 
    line: "git branch feature-login", 
    explanation: "Creates new branch named 'feature-login' at current position.", 
    example: "Create isolated branch for login feature development.", 
    output: "New branch created without switching to it." 
  },
  { 
    line: "git checkout -b bugfix/navbar", 
    explanation: "Creates and switches to new branch 'bugfix/navbar' in one command.", 
    example: "Start working on navbar bug fix immediately.", 
    output: "Switched to a new branch 'bugfix/navbar'" 
  },
  { 
    line: "git merge feature-login", 
    explanation: "Merges 'feature-login' branch into current branch.", 
    example: "Integrate completed login feature into main branch.", 
    output: "Merge made by the 'recursive' strategy." 
  },
  { 
    line: "git branch -d feature-login", 
    explanation: "Deletes branch 'feature-login' after it has been merged.", 
    example: "Clean up merged feature branch.", 
    output: "Deleted branch feature-login (was a1b2c3d)." 
  },
  { 
    line: "git stash push -m 'WIP login form'", 
    explanation: "Saves uncommitted changes with message, cleaning working directory.", 
    example: "Switch branches without committing work in progress.", 
    output: "Saved working directory and index state WIP login form" 
  },
  { 
    line: "git stash pop", 
    explanation: "Applies most recent stash and removes it from stash list.", 
    example: "Restore saved work and remove stash.", 
    output: "On branch main, Changes not staged for commit: modified: login.html" 
  },
  { 
    line: "git stash list", 
    explanation: "Lists all saved stashes with their indices and messages.", 
    example: "See all stashed changes.", 
    output: "stash@{0}: On main: WIP login form\nstash@{1}: On main: Fix navbar" 
  },
  { 
    line: "git pull origin main", 
    explanation: "Fetches changes from remote main branch and merges into current branch.", 
    example: "Update local branch with remote changes.", 
    output: "Updating a1b2c3d..d4e5f6g, 1 file changed, 1 insertion(+)" 
  },
  { 
    line: "git fetch origin", 
    explanation: "Downloads remote changes without merging (safe review first).", 
    example: "See what others pushed without affecting your work.", 
    output: "From https://github.com/user/repo, a1b2c3d..d4e5f6g main -> origin/main" 
  },
  { 
    line: "git remote -v", 
    explanation: "Shows configured remote repositories with fetch/push URLs.", 
    example: "Check which remote URLs are configured.", 
    output: "origin  https://github.com/user/repo.git (fetch)\norigin  https://github.com/user/repo.git (push)" 
  },
  { 
    line: "git push origin main", 
    explanation: "Uploads local commits to remote main branch.", 
    example: "Share your commits with team.", 
    output: "To https://github.com/user/repo.git, a1b2c3d..d4e5f6g main -> main" 
  },
  { 
    line: "git diff", 
    explanation: "Shows unstaged changes between working directory and index.", 
    example: "See what changes you made before staging.", 
    output: "-console.log('old')\n+console.log('new')" 
  },
  { 
    line: "git diff --staged", 
    explanation: "Shows staged changes between index and last commit.", 
    example: "Review changes before committing.", 
    output: "diff --git a/app.js b/app.js, +5 lines, -2 lines" 
  },
  { 
    line: "git reset HEAD file.txt", 
    explanation: "Unstages file.txt (keeps changes in working directory).", 
    example: "Remove file from staging area but keep modifications.", 
    output: "Unstaged changes after reset: M file.txt" 
  },
  { 
    line: "git restore file.txt", 
    explanation: "Discards working directory changes (restores to last commit).", 
    example: "Revert file to last committed version.", 
    output: "Updated 1 path from the index" 
  },
  { 
    line: "git commit --amend -m 'New message'", 
    explanation: "Changes last commit message and can add staged changes.", 
    example: "Fix typo in commit message or add forgotten file.", 
    output: "[main a1b2c3d] New message, Date: Mon Jan 15 10:30:00 2024" 
  },
  { 
    line: "git reset --soft HEAD~1", 
    explanation: "Undoes last commit but keeps changes staged.", 
    example: "Uncommit last commit while preserving changes ready to commit.", 
    output: "Changes to be committed: modified: app.js" 
  },
  { 
    line: "git reset --mixed HEAD~1", 
    explanation: "Undoes last commit and unstages changes (keeps working tree).", 
    example: "Uncommit and unstage changes for rework.", 
    output: "Changes not staged for commit: modified: app.js" 
  },
  { 
    line: "git reset --hard HEAD~1", 
    explanation: "Completely removes last commit and discards all changes (dangerous!).", 
    example: "Permanently undo last commit (use reflog to recover).", 
    output: "HEAD is now at a1b2c3d Previous commit" 
  },
  { 
    line: "git revert HEAD", 
    explanation: "Creates new commit that undoes previous commit (safe for shared branches).", 
    example: "Safely undo changes without rewriting history.", 
    output: "[main d4e5f6g] Revert 'Add feature', 1 file changed, 1 deletion(-)" 
  },
  { 
    line: "git tag -a v1.0.0 -m 'Production release'", 
    explanation: "Creates annotated tag for current commit with metadata.", 
    example: "Mark version 1.0.0 release.", 
    output: "Tag 'v1.0.0' created" 
  },
  { 
    line: "git push origin v1.0.0", 
    explanation: "Pushes specific tag to remote repository.", 
    example: "Share release tag with team.", 
    output: "* [new tag] v1.0.0 -> v1.0.0" 
  },
  { 
    line: "git clone --recursive https://github.com/user/repo.git", 
    explanation: "Clones repository and initializes all submodules.", 
    example: "Clone project with external dependencies.", 
    output: "Cloning into 'repo', Submodule 'libs/common' registered" 
  },
  { 
    line: "git remote add upstream https://github.com/original/repo.git", 
    explanation: "Adds second remote (upstream) for original repository.", 
    example: "Setup fork to sync with original repo.", 
    output: "New remote 'upstream' added" 
  },
  { 
    line: "git rebase main", 
    explanation: "Reapplies current branch commits on top of main branch (linear history).", 
    example: "Update feature branch with latest main without merge commit.", 
    output: "First, rewinding head to replay your work on top of it..." 
  },
  { 
    line: "git rebase -i HEAD~3", 
    explanation: "Interactive rebase for last 3 commits (squash, reword, edit, drop).", 
    example: "Clean up commit history before merging.", 
    output: "pick a1b2c3d Add feature, squash d4e5f6g Fix typo, Successfully rebased" 
  },
  { 
    line: "git cherry-pick a1b2c3d", 
    explanation: "Applies specific commit to current branch.", 
    example: "Backport bug fix to release branch.", 
    output: "[main d4e5f6g] Fix login bug, Date: Mon Jan 15 10:30:00 2024" 
  },
  { 
    line: "git bisect start", 
    explanation: "Starts binary search to find commit that introduced bug.", 
    example: "Find which commit broke the application.", 
    output: "Bisecting: 12 revisions left to test after this (roughly 4 steps)" 
  },
  { 
    line: "git bisect bad", 
    explanation: "Marks current commit as broken during bisect.", 
    example: "Tell Git this version has the bug.", 
    output: "Bisecting: 6 revisions left to test after this (roughly 3 steps)" 
  },
  { 
    line: "git bisect good", 
    explanation: "Marks current commit as working during bisect.", 
    example: "Tell Git this version works correctly.", 
    output: "Bisecting: 3 revisions left to test after this (roughly 2 steps)" 
  },
  { 
    line: "git bisect reset", 
    explanation: "Ends bisect session and returns to original branch.", 
    example: "Finish debugging session.", 
    output: "Previous HEAD position was a1b2c3d... Add feature, Switched to branch 'main'" 
  },
  { 
    line: "git reflog", 
    explanation: "Shows reference log of all HEAD movements (recovers lost commits).", 
    example: "Find lost commit after hard reset.", 
    output: "a1b2c3d HEAD@{0}: reset: moving to HEAD~1\nd4e5f6g HEAD@{1}: commit: Add feature" 
  },
  { 
    line: "git worktree add ../project-hotfix hotfix", 
    explanation: "Creates new worktree with hotfix branch in separate directory.", 
    example: "Work on hotfix without interrupting current work.", 
    output: "Preparing worktree (new branch 'hotfix'), HEAD is now at a1b2c3d" 
  },
  { 
    line: "git worktree list", 
    explanation: "Lists all worktrees linked to repository.", 
    example: "See all active worktree directories.", 
    output: "/project           a1b2c3d [main]\n/project-hotfix    d4e5f6g [hotfix]" 
  },
  { 
    line: "git worktree remove ../project-hotfix", 
    explanation: "Removes worktree directory and cleans up references.", 
    example: "Delete worktree when no longer needed.", 
    output: "Removed worktree at ../project-hotfix" 
  },
  { 
    line: "git submodule add https://github.com/lib/common.git libs/common", 
    explanation: "Adds external repository as submodule at specified path.", 
    example: "Include shared library at specific version.", 
    output: "Cloning into '/project/libs/common'... done." 
  },
  { 
    line: "git submodule update --init --recursive", 
    explanation: "Initializes and updates all submodules recursively.", 
    example: "Clone all nested dependencies.", 
    output: "Submodule path 'libs/common': checked out 'a1b2c3d'" 
  },
  { 
    line: "git clean -fd", 
    explanation: "Removes untracked files and directories (dry-run with -n).", 
    example: "Delete build artifacts and temporary files.", 
    output: "Removing temp/, Removing debug.log" 
  },
  { 
    line: "git grep 'console.log'", 
    explanation: "Searches working tree for text pattern.", 
    example: "Find all console.log statements in codebase.", 
    output: "app.js:10:console.log('debug');\nutils.js:5:console.log('test');" 
  },
  { 
    line: "git blame app.js", 
    explanation: "Shows who last modified each line of file.", 
    example: "Find which commit introduced specific line.", 
    output: "a1b2c3d (John 2024-01-15 10:30:00 +0100 10) console.log('hello');" 
  },
  { 
    line: "git shortlog -sn", 
    explanation: "Shows commit count sorted by author (s = summary, n = numbered).", 
    example: "See contribution statistics.", 
    output: "5  John Doe\n3  Jane Smith\n2  Bob Johnson" 
  },
  { 
    line: "git whatchanged --since='2 weeks ago'", 
    explanation: "Shows commit logs with diff of changed files (older command).", 
    example: "See recent changes with file lists.", 
    output: "commit a1b2c3d, Author: John, :100644 100644 file.txt" 
  },
  { 
    line: "git archive --format=zip HEAD > release.zip", 
    explanation: "Creates zip archive of repository without .git folder.", 
    example: "Package code for deployment.", 
    output: "release.zip created with project files." 
  },
  { 
    line: "git config --global alias.co checkout", 
    explanation: "Creates alias 'co' for 'checkout' command.", 
    example: "Shortcut for common commands.", 
    output: "Alias configured. Now 'git co' works like 'git checkout'" 
  },
  { 
    line: "git maintenance start", 
    explanation: "Starts automatic repository optimization (GC, prefetch, commit-graph).", 
    example: "Keep repository fast automatically.", 
    output: "Background maintenance enabled for repository." 
  },
  { 
    line: "git gc --aggressive --prune=now", 
    explanation: "Aggressively optimizes repository and removes unreachable objects.", 
    example: "Reduce repository size after large deletion.", 
    output: "Compressing objects: 100% (100/100), done." 
  },
  { 
    line: "git shortlog -sn --no-merges", 
    explanation: "Shows commit counts excluding merge commits for cleaner stats.", 
    example: "Count actual feature commits per author.", 
    output: "5  John Doe (5 features)\n3  Jane Smith (3 features)" 
  }
];