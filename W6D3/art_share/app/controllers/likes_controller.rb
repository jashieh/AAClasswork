class LikesController < ApplicationController

  def index 
    if params.has_key?(:user_id)
      like= Like.where(user_id: params[:user_id])
      render json: like
    elsif params.has_key?(:likeable_id)
      like= Like.where(likeable_id: params[:likeable_id])
      render json: like
    end
  end

  def create
    like = Like.new(like_params)
    if like.save
      render json: like
    else
      render json: like.errors.full_messages, status: 400
    end
  end

  def destroy
    like = Like.find(params[:id])
    if like 
      like.destroy
      render json: like
    else
      render json: like.errors.full_messages, status: 400
    end
  end

  def like_params
    params.permit(:user_id,:likeable_id)
  end
end
