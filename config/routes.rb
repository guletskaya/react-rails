Rails.application.routes.draw do
  get 'tokens/create'
  root 'pages#index'
  
  namespace :api do 
    namespace :v1 do 
      resources :posts, param: :id
      get 'user.params[:id]', to: 'registrations#edit'
      get "signup", to: "users#new"
      

    end
  end
  devise_scope :user do
    delete '/users/sign_out' => 'api/v1/sessions#destroy'
    delete 'logout', to: 'api/v1/sessions#destroy'
    end
  devise_for :users, :path_prefix =>'auth',
    controllers: {
        sessions: 'api/v1/sessions',
        registrations: 'api/v1/registrations'
    }
    get '*path', to: 'pages#index', via: :all

end

