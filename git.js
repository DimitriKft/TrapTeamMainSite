var shell = require('shelljs');
shell.exec("git remote add githubdirry https://github.com/TrapTeamCCNZ/TrapTeamMainSite.git");
shell.exec("git remote add gitlabby https://gitlab.com/trapteamccnz/TrapTeamMainSite.git");
shell.exec("npm install");
shell.exec("npm i -g yarn");
shell.exec("yarn install");
shell.exec("yarn add shelljs");
shell.exec("npm i -g firebase-tools");
shell.exec("yarn install");
shell.exec("firebase serve");
