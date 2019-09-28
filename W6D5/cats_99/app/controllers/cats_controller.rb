class CatsController < ApplicationController

  def new
    @cat = Cat.new
    render :new 
  end

  def index
    @cats = Cat.all 
    render :index
  end

  def show
    @cat = Cat.find(params[:id])
    render :show
  end

  def create 
    cat = Cat.new(cat_params)

    if cat.save
      redirect_to cat_url(cat)
    else
      render json: cat.errors.full_messages, status: 422 
    end
  end

  def edit 
    @cat = Cat.find(params[:id])
    render :edit
  end

  def cat_params
    params.require(:cat).permit(:name,:birth_date,:color,:sex,:description)
  end

end
