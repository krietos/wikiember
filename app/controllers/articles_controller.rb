class ArticlesController < ApplicationController
  def index
    @articles = Article.all
    render json: @articles
  end

  def show
    @article = Article.find(params[:id])
    render json: @article
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      render json: @article, status: 201
    else
      render json: {errors: @article.errors}, status: 422
    end
  end

  def update
    @article = Article.find(params[:id])
    if @article.update(article_params)
      head :no_content
    else
      render json: {errors: @article.errors}, status: 422
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    head :no_content
  end

private

  def article_params
    params.fetch(:article).permit(:title, :body)
  end
end
