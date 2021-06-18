class Api::NotesController < ApplicationController

    def index
        @notes = current_user.notes.order(updated_at: :desc)
        render :index
    end

    def show
        @note = Note.find(params[:id])
        if @note
            render :show
        else
            render json: ['This note does not exist'], status: 404
        end
    end

    def create
        @note = Note.new(note_params)
        if @note.save
            render :show
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    def update 
        @note = Note.find(params[:id])
        
        if @note.update_attributes(note_params)
            render :show
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    def destroy
        @note = Note.find(params[:id])
        if @note && @note.destroy
            render :show
        else
            render json: ["This note does not exist"], status: 404
        end
    end

    private
    def note_params
        params.require(:note).permit(:id, :title, :content, :author_id, :notebook_id, :tag_id)
    end



end