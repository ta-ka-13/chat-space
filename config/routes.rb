Rails.application.routes.draw do
  
  devise_for :users
  devise_for :models
  root 'groups#index'
  # root to: 'messages#index'
  resources :users, only: [:index,:edit, :update]
  resources :groups, only: [:edit, :update, :new, :create] do
    resources :messages, only: [:index, :create]


  end

end
