@echo off

echo Converting files to DOS (djgpp) format...

echo # generated by fixdjgpp.bat > makefile
echo MAKEFILE_INC = makefile.dj >> makefile
echo include makefile.all >> makefile

cd ..

utod .../*.bat .../*.c .../*.h .../makefile.*
utod .../*.arg .../*.cfg .../*.en .../*.es .../*.txt

cd src

echo Done!
