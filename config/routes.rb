Wikipages::Application.routes.draw do
  root to: 'application#index'
  resources :articles, except: [:new, :edit]
end
