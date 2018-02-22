source ~/.profile

export ZSH=$HOME/.oh-my-zsh

ZSH_THEME="agnoster"

DEFAULT_USER=`whoami`

plugins=(git npm bower git-extras)

source $ZSH/oh-my-zsh.sh

export PATH="$PATH:`yarn global bin`:node_modules/.bin"

export NVM_DIR="$HOME/.nvm"

alias lc='colorls -r'

BASE16_SHELL=$HOME/.config/base16-shell/
[ -n "$PS1" ] && [ -s $BASE16_SHELL/profile_helper.sh ] && eval "$($BASE16_SHELL/profile_helper.sh)"

