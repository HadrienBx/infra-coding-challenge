#! /bin/bash
if [[ $1 = "sleep" ]]; then
    sleep infinity
else
    node src/ "$@"
fi