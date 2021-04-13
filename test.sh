#!/bin/bash
# if [[ "a" =~ (/[abc]+/g) ]]; then
#   echo "valid"
# else
#   echo "Invalid"
# fi

raw="CodaBool/My-New-Repo"
first=${raw#CodaBool/}
lowerCase=${first,,}
echo "First ="$lowerCase