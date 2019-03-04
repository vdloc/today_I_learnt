Re-commit a commit

- We can edit message of a commit by:
  1. Find the commit hash
  2. Run `git checkout -b <new branch name> <commit hash>`.
  3. Run `git commit --amend -m “new commit message”`.
  4. `git checkout master`.
  5. `git merge <new branch name> --no-ff`.