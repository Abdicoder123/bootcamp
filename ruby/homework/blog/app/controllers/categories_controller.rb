class CategoriesController < ApplicationController
    before_action :set_category, only: [:show, :edit, :update, :destroy]
    before_action :authenticate_user!, except: [:index, :show]
  
    def index
      @categories = Category.all
    end
  
    def show
    end
  
    def new
      @category = Category.new
    end
  
    def create
      @category = Category.new(category_params)
      if @category.save
        redirect_to @category, notice: 'Category was successfully created.'
      else
        render :new
      end
    end
  
    def edit
    end
  
    def update
      if @category.update(category_params)
        redirect_to @category, notice: 'Category was successfully updated.'
      else
        render :edit
      end
    end
  
    def destroy
      @category.destroy
      redirect_to categories_url, notice: 'Category was successfully deleted.'
    end
  
    private
  
    def set_category
      @category = Category.find(params[:id])
    end
    
    private
        def category_params
            params.require(:category).permit(:name, :description, :priority_level)
        end
end