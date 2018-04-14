#!/bin/sh

rm -f data.csv
make data.csv
git commit -a -m "update"
git push
ssh -i ~/.ssh/id_rsa inp9822058@alumni.cs.nctu.edu.tw mashaUpdate.sh
