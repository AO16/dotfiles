" UI
set number
syntax on

" Vundle
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'VundleVim/Vundle.vim'

Plugin 'scrooloose/nerdtree'

Plugin 'kien/ctrlp.vim'

call vundle#end()

" Key mappings
map <C-n> :NERDTreeToggle<CR>
map <C-p> :CtrlP<CR>

" Ignore
set wildignore+=*/dist/*,*/build/*,*/cache/*,*/tmp/*,*/phonegap/*,*/plugman/*,*/bower_components/*,*/node_modules/*,*.so,*.swp,*.zip
let g:ctrlp_custom_ignore = '\v[\/]\.(git|hg|svn)$'
