class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)
    if request.xhr?
      @tweet.save
      respond_to do |format|
        format.json { render json: @tweet }

      end

    else

      if @tweet.save
        redirect_to tweets_path
      else
        @tweets = Tweet.all.order(created_at: :desc)
        render :index
      end


    end
  end

  def destroy
    @tweet = Tweet.find(params[:id])
    @tweet.destroy
    render :index
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
