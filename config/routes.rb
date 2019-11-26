Rails.application.routes.draw do
  
  devise_for :users
  devise_for :models
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html  
  root to: 'messages#index'
  resource :users, only: [:index, :edit, :update]
  resource :groups, only: [:edit, :update, :new, :create]
  resource :message, only:[:index, :create]
end
