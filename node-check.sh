#!/bin/sh
PATH=$PATH:/home/sstsahos/bin

#if telnet -c localhost 30000 </dev/null 2>&1 | grep -q Escape;
if [ -n "$(netstat -tupln | grep 30000)" ];
then
  echo "ssts web port is open."
else
  echo "ssts web port is NOT open."
  cd ~/ssts/
  NODE_ENV=production PORT=30000 pm2 start bin/www --name ssts-app --watch
fi
