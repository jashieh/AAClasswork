class UsersController < ApplicationController
  def index
    if params.has_key?(:username)
      user = User.where(username: params[:username])
      render json: user 
    else
      users = User.all 
      render json: users
    end
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

  def favorites 
    user = User.find(params[:id])

    if user
      render json: user.artist_favorites
    else
      render json: user.errors.full_messages, status:400 
    end
  end

  def favorited
     user = User.find(params[:id])

    if user
      render json: user.viewer_favorited
    else
      render json: user.errors.full_messages, status:400 
    end
  end
end
