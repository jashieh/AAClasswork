class UsersController < ApplicationController
  def index
    @users = User.all
    render :index 
  end

  def new
    @user = User.new
    render :new
  end


  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      redirect_to users_url
    else
      render json: "error"
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end
  
  def user_params
    params.require(:user).permit(:username,:password)
  end
end
