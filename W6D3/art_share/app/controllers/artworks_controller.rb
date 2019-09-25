class ArtworksController < ApplicationController
  def index
    user = User.find(params[:user_id])
    artworks = user.artworks 
    shared_artworks = user.shared_artworks 
    render json: [artworks, shared_artworks]
  end

  def artwork_params
    params.permit(:title, :image_url, :artist_id)
  end

  def create
    artwork = Artwork.new(artwork_params)

    if artwork.save 
      render json: artwork 
    else
      render json: artwork.errors.full_messages, status:400  
    end
  end

  def destroy
    artwork = Artwork.find(params[:id])

    if artwork 
      artwork.destroy
      render json: artwork 
    else
      render json: artwork.errors.full_messages, status:400 
    end
  end

  def show
    artwork = Artwork.find(params[:id])
    if artwork
      render json: artwork
    else
      render json: artwork.errors.full_messages, status:400 
    end
  end

  def update
    artwork = Artwork.find(params[:id])

    if artwork
      artwork.update(artwork_params)
      render json: artwork 
    else
      render json: artwork.errors.full_messages, status:400 
    end
  end

end
