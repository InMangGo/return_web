Rails.application.routes.draw do
  namespace :backend do
    root 'dashboard#index'
  end
end
