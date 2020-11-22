Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :motorcycles, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  root to: 'motorcycles#index'

end
