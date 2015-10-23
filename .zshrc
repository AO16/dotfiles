export ZSH=$HOME/.oh-my-zsh

ZSH_THEME="agnoster"

DEFAULT_USER="Andrew"

plugins=(git npm bower git-extras)

source $ZSH/oh-my-zsh.sh

source ~/.profile

export ANDROID_SDK="/usr/local/Cellar/android-sdk/23.0.2"
export ANDROID_HOME="$ANDROID_SDK"
export ANDROID_PLATFORM_TOOLS="$ANDROID_SDK/platform-tools"

path=(
	/usr/local/git/bin
	/usr/local/bin/mongodb/mongodb-osx-x86_64-2.6.3/bin
	/usr/bin
	/bin
	/usr/sbin
	/sbin
	/usr/local/bin
  $ANDROID_PLATFORM_TOOLS
	$ANDROID_HOME/tools
	~/bin
)

# Changed casks to install globally

export HOMEBREW_CASK_OPTS="--appdir=/Applications --caskroom=/opt/homebrew-cask/Caskroom"

export DOCKER_HOST=tcp://192.168.59.103:2375

alias emacs="/usr/local/Cellar/emacs/24.5/bin/emacs"

# Reload the shell (i.e. invoke as a login shell)
alias reload="exec $SHELL -l"

alias creep-on-rob="ssh pairprog@192.168.178.79"
