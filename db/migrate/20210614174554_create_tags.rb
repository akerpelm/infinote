class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :name, null: false
      t.integer :note_ids, array: true, default: [];
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :tags, :name, unique: true
    add_index :tags, :note_ids
    add_column :notes, :tag_id, :integer
  end
end
