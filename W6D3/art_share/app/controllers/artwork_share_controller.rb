class ArtworkShareController < ApplicationController
  def index
    share = ArtworkShare.all.where('viewer_id = ?',params[:viewer_id])
    render json: share 
  end

  def create
    share = ArtworkShare.new(share_params)

    if share.save
      render json: share 
    else
      render json: share.errors.full_messages, status:400  
    end
  end

  def destroy
    share = share.find(params[:id])

    if share 
      share.destroy
      render json: share 
    else
      render json: share.errors.full_messages, status:400 
    end
  end

  def share_params
    params.permit(:artwork_id, :viewer_id)
  end
end
