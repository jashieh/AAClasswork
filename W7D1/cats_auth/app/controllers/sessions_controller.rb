class SessionsController < ApplicationController
  before_action :double_signin, only: [:create,:new]

  def new
    render :new 
  end

  def double_signin
    if logged_in?
      render :error 
    end
  end

  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if user
      login(user)
      redirect_to cats_url
    else
      render json: ["invalid username and/or password"], status: 401
    end

  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    redirect_to cats_url
  end
end
