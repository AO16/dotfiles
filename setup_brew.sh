#!/usr/bin/env bash

# reference: http://lapwinglabs.com/blog/hacker-guide-to-setting-up-your-mac

###############################################################################
# Ask for the administrator password upfront.
sudo -v

# Keep-alive: update existing `sudo` time stamp until the script has finished.
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &


###############################################################################
# HOMEBREW
###############################################################################


###############################################################################
# Install Brew
# Check for Homebrew,
# Install if we don't have it
if test ! $(which brew); then
  echo "Installing homebrew..."
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi


# Update homebrew recipes
brew update

# Upgrade any already-installed formulae.
brew upgrade --all

brew install tig
brew install git-extras
brew install zsh
brew install zsh-completions
brew install tmux
brew install emacs
brew install docker
brew install nvm
