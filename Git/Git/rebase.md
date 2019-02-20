#### git rebase :

use it when we want to change the base or start point in log or history of a branch to after a branch.

```bash
git checkout -b feature1
touch feature1.html
git add .
git commit -m "added feature1"
----
git checkout -b feature 2
touch feature2.html
git add .
git commint -m "added feature2"
----
git checkout master
git merge --no-ff feature1
git branch -d feature 1
---
// now feature 1 is above feature 2 in log tree
git checkout feature2
git rebase master
// now feature2 has base start from master head
git merge  -- no-ff feature2
git branch -d feature2
=> nice and clean history tree
```

