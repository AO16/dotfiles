source ~/.profile

export ZSH=$HOME/.oh-my-zsh

ZSH_THEME="agnoster"

DEFAULT_USER=`whoami`

plugins=(git npm bower git-extras)

source $ZSH/oh-my-zsh.sh

# export PATH="./node_modules/.bin:$PATH"

export NVM_DIR="$HOME/.nvm"
. "/usr/local/opt/nvm/nvm.sh"
