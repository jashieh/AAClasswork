class UsersController < ApplicationController
  def index
    users = User.all 
    render json: users
  end

  def user_params
    params.permit(:username)
  end

  def create
    user = User.new(user_params)

    if user.save 
      render json: user 
    else
      render json: user.errors.full_messages, status:400  
    end
  end

  def destroy
    user = User.find(params[:id])

    if user 
      user.destroy
      render json: user 
    else
      render json: user.errors.full_messages, status:400 
    end
  end

  def show
    user = User.find(params[:id])
    if user
      render json: user
    else
      render json: user.errors.full_messages, status:400 
    end
  end

  def update
    user = User.find(params[:id])

    if user
      user.update(user_params)
      render json: user 
    else
      render json: user.errors.full_messages, status:400 
    end
  end
end
