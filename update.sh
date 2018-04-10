#!/bin/sh

rm -f data.csv
make data.csv
git commit -a -m "update"
