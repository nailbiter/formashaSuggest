#!/bin/sh

rm -f data.csv
make data.csv
git commit -a -m "update"
git push

#ssh inp9822058@alumni.cs.nctu.edu.tw mashaUpdate.sh
ssh inp9822058@alumni.cs.nctu.edu.tw /u/cs/98/9822058/bin/mashaUpdate.sh
