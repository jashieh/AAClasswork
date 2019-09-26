class CollectionsController < ApplicationController
  
  def collection_params
    params.permit(:name)
  end
  
  def index
    if params.has_key?(:name)
      collection = Collection.where(name: params[:name])
      render json: collection.artworks
    else
      collection = Collection.all 
      render json: collection
    end
  end

end
