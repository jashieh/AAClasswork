class PostsController < ApplicationController
  before_action :require_login

  def new 
    @post = Post.new 
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    # @post.sub_id = params[:sub_id]

    if @post.save 
      params[:post][:sub_id].each do |sub_id|
        PostSub.create(post_id: @post.id, sub_id: sub_id)
      end

      redirect_to post_url(@post)
    else
      flash[:errors] = @post.errors.full_messages
      render :new 
    end
  end

 
  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = current_user.posts.find(params[:id])

    if @post.update(post_params)
      redirect_to post_url(@post)
    else
      flash[:errors] = @post.errors.full_messages
      render :edit
    end
  end
  
  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to subs_url
  end

  def post_params
    params.require(:post).permit(:title,:url,:content, sub_id:[])
  end
end
