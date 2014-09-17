export ZSH=$HOME/.oh-my-zsh

ZSH_THEME="agnoster"

DEFAULT_USER="Andrew"

plugins=(git npm bower)

source $ZSH/oh-my-zsh.sh

export PATH="/usr/local/bin/mongodb/mongodb-osx-x86_64-2.6.3/bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin"

# Changed casks to install globally

export HOMEBREW_CASK_OPTS="--appdir=/Applications --caskroom=/opt/homebrew-cask/Caskroom"
