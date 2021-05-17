Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { render: :json } do
    resources :users, only: [:create, :update]
    resources :notebooks, only: [:index, :show, :create, :update, :destroy]
    resources :notes, only: [:index, :show, :create, :update, :destroy]

    resource :session, only: [:create, :destroy]
  end
  root to: 'static_pages#root'
end
