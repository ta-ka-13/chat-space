class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?
  include UserAgent
  # protect_from_forgery with: :exception
  before_action :detect_device_variant
  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
  def detect_device_variant
    request.variant = :smart if is_mobile?
  end

end
