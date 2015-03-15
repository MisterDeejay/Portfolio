Rails.application.routes.draw do
  root to: 'static_pages#index'

  StaticPagesController.action_methods.each do |action|
    get "/#{action}", to: "static_pages##{action}", as: "#{action}_page"
  end
end
