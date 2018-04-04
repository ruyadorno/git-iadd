# git-iadd

[![NPM version](https://badge.fury.io/js/git-iadd.svg)](https://npmjs.org/package/git-iadd)
[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://raw.githubusercontent.com/ruyadorno/git-iadd/master/LICENSE)
[![Join the chat at https://gitter.im/ipipeto/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ipipeto/Lobby)

Git plugin that allows you to interactively select which files to add to stage (git add)

> An [iPipeTo](https://github.com/ruyadorno/ipt) workflow

<br />
<br />

<p align="center">
<a href="https://asciinema.org/a/174408">
<img alt="demo animation" width="600" src="https://cdn.rawgit.com/ruyadorno/git-iadd/master/demo.svg" />
</a>
</p>

<br />

## Install

Get it with **npm**:

```sh
npm install -g git-iadd
```

### Run

In any git repo folder:

```
git iadd
```

**OR**

bypass **npm install** and run it at once using **npx**:

```sh
npx git-iadd
```

## Bash alias equivalent

If you're already an **ipt** user that has it globally installed, you can get this same functionality by just adding this alias to your **bash** (or equivalent) file:

### Requirements

- Unix-like system (needs `sed`, `xargs` cmds)
- [git](https://git-scm.com/) globally installed
- [ipt](https://www.npmjs.com/package/ipt) globally installed

```sh
alias git-iadd="git status -s | sed s/^...// | ipt -m -M 'Select files to add:' | xargs git add"
```

## License

[MIT](LICENSE) © 2018 [Ruy Adorno](http://ruyadorno.com)

