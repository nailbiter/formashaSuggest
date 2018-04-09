.PHONY: all

all: data.csv
	#rm -rf $<

URL1="https://docs.google.com/spreadsheets/d/e/2PACX-1vRHDbWVpZeC2eWsDl0IYu0UpTZ8vFg5pBxoX5ueLHTvn4npuXFgHkfCeV0VpvJNsFJQ2Mu8JFq7KyUI/pub?gid=1160302316&output=csv"
URL2="https://docs.google.com/spreadsheets/d/e/2PACX-1vRHDbWVpZeC2eWsDl0IYu0UpTZ8vFg5pBxoX5ueLHTvn4npuXFgHkfCeV0VpvJNsFJQ2Mu8JFq7KyUI/pub?gid=0&output=csv"
data.csv:script.pl
	echo "csv=" > $@
	wget -o /dev/null $(URL1) -O - | perl $< >> $@
	wget -o /dev/null $(URL2) -O - | perl $< >> $@
	echo "\"\";" >> $@

data1.csv: script.pl
	wget -o /dev/null $(URL2) -O - | perl $< > $@
