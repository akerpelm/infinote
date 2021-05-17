class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :title
      t.string :content, null: false
      t.integer :author_id, null: false
      t.integer :notebook_id, null: false

      t.timestamps

    end
    add_index :notes, :author_id
    add_index :notes, :notebook_id
    add_index :notes, :title
  end
end
