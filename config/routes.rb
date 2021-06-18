Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { render: :json } do
    resources :users, only: [:create, :update]

    resource :session, only: [:create, :destroy]

    resources :notebooks, only: [:index, :show, :create, :update, :destroy] do
      resources :notes, only: [:index]
    end

    resources :notes, only: [:index, :show, :create, :update, :destroy] do
    end
    
    # resources :tags, only: [:index, :create, :update, :show, :destroy] do
    #   resources :notes, only: [:index, :update]
    # end
        resources :tags, only: [:index, :show, :create, :update, :destroy]

  end
  root to: 'static_pages#root'
end
