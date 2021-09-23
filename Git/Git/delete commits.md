### How to delete the commits

1. If we want to delele the last commits:

   ```bash
   git reset HEAD~1 'delete the last commit'
   ```

   or two last commits :

   ```bash
   git reset HEAD~2 'delete two commits'
   ```

2. But when we want to delete more than last commits, we have two methods are **rebase** and **cherry-pick** for one or more consecutive and one or more non consecutive commits:

   1. First - we check `git log` to find out the commits we want to remove

      ```bash
      | * s45f3c3 reorder js files 
      | * f3abbb6 (origin/OOP_again, OOP_again) change repo language on Github
      | * 6e8ce66 modified some css properties
      | * c51888c reorder js files to module-based structure
      | *   b5aa2d8 (add_animation_to_body) Merge branch 'master' into add_animation_to_body
      ```

      if we want to remove 4 and 5 commits - (c51888c) and (b5aa2d8), they’re two consecutive commits so we using **rebase** :

      ```bash
      git rebase --onto <branch name>~<first commit to remove> <branch name>~<first commit to kept> <branch name>
      git rebase --onto branch_name~5 branch_name~3 branch_name
      'it removes the commits from bottom to top direction'
      'from 5 to 4 and except 3'
      ```

      If  we must remove the non consecutive commits manually, we can use **cherry-pick** .
      For example: if we want to remove  commits 2 & 4:

      1. First, know  the hashes of the commits. 2 - f3abbb6 and 4 - c51888c

      2. ```bash
         git checkout b5aa2d8 'checkout the last usable commit - is 5'
         ```

      3. ```bash
         git checkout -b repair 'create a temporary branch for fix'
         ```

      4. ```bash
         git cherry-pick 6e8ce66 'run through commit #3 to remove #4 commit'
         ```

      5. ```bash
         git cherry-pick s45f3c3 'run through commit #1 to remove #2 commit'
         ```

      6. ```bash
         git checkout master
         ```

      7. ```bash
         git reset --hard b5aa2d8 'reset master to last usable commit'
         ```

      8. ```bash
         git merge repair 'merge our new branch to master'
         ```

      

commit 1 = 99abacd

commit 3 = 757b6ce