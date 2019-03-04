# Recover any commit

- We can recover any commits  by:
  1. Open `.git` folder in the repository, and find the `logs` folder inside it and open the `HEAD` file.
  2. Copy the commit hash that we want to recover.
  3. Run `git checkout -b <new branch name>  <commit hash>`
  4. Run `git checkout <master or any pre-exist branches> –-force`.
  5. Run `git merge <new branch name> --no-ff --force`

