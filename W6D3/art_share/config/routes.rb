Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :show, :create, :destroy, :update] do
    resources :artworks, only: [:index]
    resources :comments, only: [:index]
    resources :likes, only: [:index]

    member do 
      get 'favorites'
      get 'favorited'
    end

  end

  resources :artworks, only: [:show, :create, :destroy, :update] do
    resources :comments, only: [:index]
    resources :likes, only: [:index]
  end

  resources :comments, only: [:index, :create, :destory] do
    resources :likes, only: [:index]
  end
  resources :shares, only: [:create, :destroy] 

  resources :collections, only: [:index]

end
