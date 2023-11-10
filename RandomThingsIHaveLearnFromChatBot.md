# Things

* `sudo apt update` do these works:
  * `apt update` **fetches** the **latest** versions of **package lists** from **repositories**
  * It updates the **local** package **cache** with new versions information
  * But **does not install** packages themselves
  * Needs to be run **regularly** to ensure apt can install **latest** available package versions
  * Always run `apt update` **before** commands like `apt upgrade` and `apt install` to refresh package data.
