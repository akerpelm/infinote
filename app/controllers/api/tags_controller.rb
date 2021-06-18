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
        if params["tag"]["note_ids"] != nil
            @tag.note_ids.concat(params["tag"]["note_ids"])
        end
        
        if @tag.save
            render :show
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    def update 
        @tag = Tag.find(params[:id])
        @tag["note_ids"].concat(params["tag"]["note_ids"])
 
        if @tag.update(tag_params)
            render :show
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    def destroy
        @tag = Tag.find(params[:id])
        if @tag && @tag.destroy
            render :show
        else
            render json: ["This tag does not exist"]
        end
    end

    private

    def tag_params
        params.require(:tag).permit(:name, :author_id, :note_ids)
    end
end
