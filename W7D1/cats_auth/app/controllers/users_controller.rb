class UsersController < ApplicationController
  def new
    @user = User.new
    render :new 
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:session_token] = @user.session_token
      login(@user)
      redirect_to cats_url
    else
      render :new, status: 422 
    end
  end

  def user_params
    params.require(:user).permit(:username,:password)
  end
end
