class AuthorsController < ApplicationController
    http_basic_authenticate_with name: "dhh", password: "secret", except: [:index, :show]
    def index
        @authors = Author.all
    end
    def show
    end
    def new
        @author = Author.new
      end
    def create
        @author = Author.new(author_params)
        if @author.save
          redirect_to @author, notice: 'Author was successfully created.'
        else
          render :new
        end
      end

    private
    def author_params
        params.require(:author).permit(:name, :bio)
    end
end
