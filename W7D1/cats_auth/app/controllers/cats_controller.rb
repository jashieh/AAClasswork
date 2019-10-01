class CatsController < ApplicationController
  before_action :owns?, only: [:edit,:update]
  def index
    @cats = Cat.all
    render :index
  end

  def show
    @cat = Cat.find(params[:id])
    render :show
  end

  def new
    @cat = Cat.new
    @cat.user_id =  current_user.id 
    #params[:user_id] = current_user.id 
    render :new
  end

  def create
    #params[:user_id] = current_user.id 
    @cat = Cat.new(cat_params)
    @cat.user_id =  current_user.id 
    if @cat.save
      redirect_to cat_url(@cat)
    else
      flash.now[:errors] = @cat.errors.full_messages
      render :new
    end
  end

  def edit
    # @cat = Cat.find(params[:id])
    @cat = current_user.cats.find(params[:id])
    render :edit
  end
  
  def owns?
    render :error unless logged_in? && current_user.cats.find_by(id: params[:id])
  end

  def update
    @cat = Cat.find(params[:id])
    if @cat.update_attributes(cat_params)
      redirect_to cat_url(@cat)
    else
      flash.now[:errors] = @cat.errors.full_messages
      render :edit
    end
  end



  private

  def cat_params
    params.require(:cat).permit(:age, :birth_date, :color, :description, :name, :sex)
  end
end
