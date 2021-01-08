Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only: %i[create destroy]
      devise_for :users, path: '', path_names: {
        sign_in: 'login',
        sign_out: 'logout',
        registration: 'signup'
      },
                         controllers: {
                           sessions: 'users/sessions',
                           registrations: 'users/registrations'
                         }
    end
  end

  get '*path', to: 'pages#index', via: :all
end
