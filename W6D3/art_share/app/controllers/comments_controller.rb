class CommentsController < ApplicationController
  def index 
    if params.has_key?(:user_id)
      comment = Comment.where(user_id: params[:user_id])
      render json: comment 
    elsif params.has_key?(:artwork_id)
      comment = Comment.where(artwork_id: params[:artwork_id])
      render json: comment 
    # else 
    #   render json:
    end
  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment
    else
      render json: comment.errors.full_messages, status: 400
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    if comment 
      comment.destroy
      render json: comment
    else
      render json: comment.errors.full_messages, status: 400
    end
  end

  def comment_params
    params.permit(:body, :user_id, :artwork_id)
  end
end
