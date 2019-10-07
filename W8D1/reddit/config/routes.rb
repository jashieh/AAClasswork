Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resource :session
  resources :subs do
  end
  resources :posts do
    resources :comments, only: [:new]
  end
  resources :comments, except: [:new]
end

  # <input type="hidden" name="authenticity_token" 
  # value="<%=form_authenticity_token%>">