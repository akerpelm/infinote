class RemoveRequiredFromNotebookId < ActiveRecord::Migration[5.2]
  def change
        change_column_null(:notes, :notebook_id, true)

  end
end
