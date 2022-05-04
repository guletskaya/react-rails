class Api::V1::SessionsController < Devise::SessionsController
  respond_to :json
  
  private

  def respond_with(resource, _opts = {})
    if resource.persisted?
      h = request.headers['Authorization']
      render json: { logged_in: true, token: h, message: 'You are logged in.', user: c }, status: :ok

    else
      login_failed
    end
  end

  def login_failed
    render json: { message: 'Something went wrong.' }, status: :unauthorized
  end

  def respond_to_on_destroy
    log_out_success && return if current_user
    log_out_failure
  end

  def log_out_success
    reset_session
    render json: { logged_in: false, message: 'You are logged out.' }, status: :ok
  end

  def log_out_failure
    render json: { message: 'Hmm nothing happened.' }, status: :unauthorized
  end
  end