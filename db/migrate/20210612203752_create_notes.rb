class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
       t.string "title"
    t.string "content"
    t.integer "author_id", null: false
    t.integer "notebook_id", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_notes_on_author_id"
    t.index ["notebook_id"], name: "index_notes_on_notebook_id"
    t.index ["title"], name: "index_notes_on_title"
    end
  end
end
