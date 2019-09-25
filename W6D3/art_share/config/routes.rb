Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :show, :create, :destroy, :update] do
    resources :artworks, only: [:index]
  end

  resources :artworks, only: [:show, :create, :destroy, :update]
  resources :shares, only: [:create, :destroy] 
end
