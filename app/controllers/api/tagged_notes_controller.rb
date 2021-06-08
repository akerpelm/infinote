class Api::TaggedNotesController < ApplicationController

    def create
        @tagged_note = TaggedNote.new(tagged_note_params)

        if @tagged_note
            render :show
        else
            render json: @tagged_note.errors.full_messages, status: 404
    end


    def destroy
        @tagged_note = TaggedNote.find_by(
            note_id: params[:note_id]
            tag_id: params[:tag_id]
        )
        if @tagged_note && @tagged_note.destroy
            render :show
        else
            render json: ["A note with this tag does not exist!"]
        end
    end
    
    private

    def tagged_note_params
        params.require(:tagged_note).permit(:tag_id, :note_id)

end