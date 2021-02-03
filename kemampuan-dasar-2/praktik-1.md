```bash
uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /e
$ cd D:

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d
$ ls
'$RECYCLE.BIN'/  'Dokumen Penting'/             praxis-academy/
'Data Aini'/     'System Volume Information'/

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d
$ cd praxis-academy/

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy (master)
$ ls
kemampuan-dasar-1/  kemampuan-dasar-2/

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy (master)
$ mkdir rhymes

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy (master)
$ cd rhymes/

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ git init
Initialized empty Git repository in D:/praxis-academy/rhymes/.git/

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ touch README.txt

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ git add README.txt

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ git commit -m "menambah readme"
[master (root-commit) 2afc44a] menambah readme
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.txt

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ echo 'gudang ini berisi nursery rhymes.' >> README.txt

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ cat README.txt
gudang ini berisi nursery rhymes.

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ git diff
warning: LF will be replaced by CRLF in README.txt.
The file will have its original line endings in your working directory
diff --git a/README.txt b/README.txt
index e69de29..3264752 100644
--- a/README.txt
+++ b/README.txt
@@ -0,0 +1 @@
+gudang ini berisi nursery rhymes.

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ git add README.txt
warning: LF will be replaced by CRLF in README.txt.
The file will have its original line endings in your working directory

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ git commit -m 'menambah review README.txt'
[master 8145a78] menambah review README.txt
 1 file changed, 1 insertion(+)

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ echo '1' > all-around-the-mulberry-bush.txt

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ echo '2' > jack-and-jill.txt

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ echo '3' > old-mother-hubbard.txt

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /
bash: $'\302\226\302\226wget': command not found

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
ttxtet https://www.acquia.com/sites/default/files/blog/all-around-the-mulberry-bush.
bash: $'\302\226\302\226wget': command not found

$ wget https://www.acquia.com/sites/default/files/blog/all-around-the-mulberry-bush.tt
bash: $'\302\226\302\226wget': command not found

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ wget https://www.acquia.com/sites/default/files/blog/all-around-the-mulberry-bush.tx
bash: $'\302\226\302\226wget': command not found

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ echo '4' > twinkle-twinkle.txt

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ echo '5' > hokey-pokey.txt

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ git add all-around-the-mulberry-bush.txt
warning: LF will be replaced by CRLF in all-around-the-mulberry-bush.txt.
The file will have its original line endings in your working directory

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   all-around-the-mulberry-bush.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        hokey-pokey.txt
        jack-and-jill.txt
        old-mother-hubbard.txt
        twinkle-twinkle.txt


uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ git commit -m 'added all-arround-the-mulberry-bush.txt'
[master 29280e7] added all-arround-the-mulberry-bush.txt
 1 file changed, 1 insertion(+)
 create mode 100644 all-around-the-mulberry-bush.txt

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ git add jack-and-jill.txt
warning: LF will be replaced by CRLF in jack-and-jill.txt.
The file will have its original line endings in your working directory

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ git commit -m 'Added jack-and-jill.txt'
[master 7bd8b34] Added jack-and-jill.txt
 1 file changed, 1 insertion(+)
 create mode 100644 jack-and-jill.txt

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ git add .
warning: LF will be replaced by CRLF in hokey-pokey.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in old-mother-hubbard.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in twinkle-twinkle.txt.
The file will have its original line endings in your working directory

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ git commit -m 'Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt'
[master fc6751d] Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
 3 files changed, 3 insertions(+)
 create mode 100644 hokey-pokey.txt
 create mode 100644 old-mother-hubbard.txt
 create mode 100644 twinkle-twinkle.txt

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ git log
commit fc6751d31cb9c3664c795c7a1d57db3ed065016f (HEAD -> master)
Author: Uhsina Huda <uhsinahuda@gmail.com>
Date:   Wed Feb 3 14:46:28 2021 +0700

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

commit 7bd8b340283b26c4adba3366dc581d073f48b9ad
Author: Uhsina Huda <uhsinahuda@gmail.com>
Date:   Wed Feb 3 14:43:42 2021 +0700

    Added jack-and-jill.txt

commit 29280e78d8a1ce5c6a9a822de6c923abe02fd2b6
Author: Uhsina Huda <uhsinahuda@gmail.com>
Date:   Wed Feb 3 14:42:43 2021 +0700

    added all-arround-the-mulberry-bush.txt

commit 8145a78ceaf764f7941bd0374994e7973762a070
Author: Uhsina Huda <uhsinahuda@gmail.com>
Date:   Wed Feb 3 14:32:57 2021 +0700

    menambah review README.txt

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ git log --oneline
fc6751d (HEAD -> master) Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
7bd8b34 Added jack-and-jill.txt
29280e7 added all-arround-the-mulberry-bush.txt
8145a78 menambah review README.txt
2afc44a menambah readme

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/praxis-academy/rhymes (master)
$ git log -p
commit fc6751d31cb9c3664c795c7a1d57db3ed065016f (HEAD -> master)
Author: Uhsina Huda <uhsinahuda@gmail.com>
Date:   Wed Feb 3 14:46:28 2021 +0700

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

diff --git a/hokey-pokey.txt b/hokey-pokey.txt
new file mode 100644
index 0000000..7ed6ff8
--- /dev/null
+++ b/hokey-pokey.txt
@@ -0,0 +1 @@
+5
diff --git a/old-mother-hubbard.txt b/old-mother-hubbard.txt
new file mode 100644
index 0000000..00750ed
--- /dev/null
+++ b/old-mother-hubbard.txt
@@ -0,0 +1 @@
+3
diff --git a/twinkle-twinkle.txt b/twinkle-twinkle.txt
new file mode 100644
index 0000000..b8626c4
--- /dev/null
+++ b/twinkle-twinkle.txt


uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/rhymes-clone/rhymes-1 (master)
$ git checkout hickory-dickory
error: pathspec 'hickory-dickory' did not match any file(s) known to git

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/rhymes-clone/rhymes-1 (master)
$ git checkout -b hickory-dickory
Switched to a new branch 'hickory-dickory'

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/rhymes-clone/rhymes-1 (hickory-dickory)
$ git add a.txt

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/rhymes-clone/rhymes-1 (hickory-dickory)
$ git commit -m 'menambah file'
[hickory-dickory 57b1a1a] menambah file
 1 file changed, 1 insertion(+)
 create mode 100644 a.txt

uhsina Huda@LAPTOP-QDVA8F7K MINGW64 /d/rhymes-clone/rhymes-1 (hickory-dickory)
$ git push origin hickory-dickory
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 266 bytes | 266.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote:
remote: Create a pull request for 'hickory-dickory' on GitHub by visiting:
remote:      https://github.com/uhsina/rhymes-1/pull/new/hickory-dickory
remote:
To https://github.com/uhsina/rhymes-1
 * [new branch]      hickory-dickory -> hickory-dickory

```