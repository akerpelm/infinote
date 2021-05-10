Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namesake :api, defaults: { render: :json } do
    resources :users, only: [:create, :new, :index, :show]
    resource :session, only: [:create, :destroy, :show]
  end
  root to: 'static_pages#root'
end
