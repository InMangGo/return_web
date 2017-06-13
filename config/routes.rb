Rails.application.routes.draw do

  namespace :backend do
    root 'dashboard#index'
  end

  namespace :web, path: '' do
    get :case, to: 'home#case'
    get :case_video, to: 'home#case_video'
    get :case_project, to: 'home#case_project'
    get :about, to: 'home#about'
    get :contact, to: 'home#contact'
  end

  root 'web/home#index'
end
