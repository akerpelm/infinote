class AddTimestampstoTags < ActiveRecord::Migration[5.2]
  def change
    add_column :tags, :created_at, :datetime, null: false
  end
end
