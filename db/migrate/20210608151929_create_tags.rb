class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :name, null: false
      t.integer :author_id, null: false
    end
    add_index :tags, [:name, :author_id], unique: true
  end
end
