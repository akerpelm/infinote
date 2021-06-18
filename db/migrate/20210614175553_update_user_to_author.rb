class UpdateUserToAuthor < ActiveRecord::Migration[5.2]
  def change
    rename_column :tags, :user_id, :author_id

  end
end
