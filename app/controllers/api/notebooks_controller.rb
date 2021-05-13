class Api::NotebooksController < ApplicationController

    # before_action :underscore_params!, only: [:create, :update]

    def index
        @notebooks = current_user.notebooks
        render :index
    end

    def show
        @notebook = Notebook.find(params[:id])
        if @notebook
            render :show
        else
            render json: ['This notebook does not exist'], status: 404
        end
    end

    def create
        @notebook = Notebook.new(notebook_params)
        # debugger
        if @notebook.save
            render :show
        else
            render json: ['Oops, something went wrong!'], status: 404
        end
    end

    def update
        @notebook = Notebook.find(parmams[:id])
        if @notebook.update_attributes(notebook_params)
            render :show
        else
            render json: @notebook.errors.full_messages, status: 404
        end
    end

    def destroy
        @notebook = Notebook.find(params[:id])
        if @notebook && @notebook.destroy
            render :index
        else
            render json: ["This notebook does not exist"], status: 404
        end
    end
    
    private
    def notebook_params
        params.require(:notebook).permit(:title, :author_id)
    end
end
