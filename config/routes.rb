Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :motorcycles, only: [:index, :show, :new, :create, :edit, :update, :destroy, :seed_db]

  root to: 'motorcycles#index'
  post 'motorcycles/seed_db' => 'motorcycles#seed_db', as: :motorcycles_seed_db

end
