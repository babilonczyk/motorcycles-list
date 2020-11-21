Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :motorcycles, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  root to: 'motorcycles#index'

end
