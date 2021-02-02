@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

echo "Cari File dan Ren"
FOR /R %%a IN (*.java) DO (
	echo "%%a ditemukan"
	set /P ubah=diubah namanya Y/T? 
	IF /I !ubah!==y (
		set /p ubahNama=Input nama file baru :
		ren "%%a" "!ubahNama!.java"		
	)
)

pause

FOR /R %%a IN (*.java) DO (
	echo "nama file diubah menjadi %%a"
)

pause