class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
  end

  def show
    @poke = Pokemon.includes(:items).find(params[:id])
  end

  def create
    @poke = Pokemon.new(pokemon_params)
    if @poke.save
      render :show
    else         
      render json: @poke.errors.full_messages
    end
  
  end

  private 
  def pokemon_params
    params.require(:pokemon)
      .permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
  end

end
