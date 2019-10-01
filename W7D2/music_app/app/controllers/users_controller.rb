class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end
  def create
    @user = User.new(user_params)
    if @user.save
      log_in_user!(@user)
      redirect_to bands_url
    else
      render json: "error"
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end
  
  def user_params
    params.require(:user).permit(:email,:password)
  end


end
