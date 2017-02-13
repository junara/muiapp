Rails.application.routes.draw do
  match 'items', to: 'items#index', via: [:get], as: 'items'
end
