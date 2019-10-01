class BandsController < ApplicationController

  def index 
    @bands = Band.all
    render :index 
  end
end
