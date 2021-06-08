class Api::TagsController < ApplicationController


    def index
        @tags = current_user.tags
        render :index
    end

    def show
        @tag = Tag.find(params[:id])
        render :show
    end

    def create 
        @tag = Tag.new(tag_params)
        
        if @tag.save
            render :show
        else
            render json: @tag.errors.full_messages, status: 404
        end
    end

    def destroy
        @tag = Tag.find(params[:id])

        if @tag && @tag.ddestroy
            render :show
        else
            render json: ["This tag does not exist"]
        end
    end

    private

    def tag_params
        params.require(:tag).permit(:name, :author_id)
    end



end

