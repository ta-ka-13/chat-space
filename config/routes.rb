Rails.application.routes.draw do
  
  devise_for :users
  devise_for :models
  root 'groups#index'

  resources :users, only: [:index,:edit, :update]
  resources :edit, only: [:group]
  resources :groups, only: [:edit, :update, :new, :create] do
    resources :messages, only: [:index, :create, :destroy]

    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end

end