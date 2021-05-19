class AddDefaultNotebook < ActiveRecord::Migration[5.2]
  def change
    change_column_null :notes, :notebook_id, false, 0
    change_column_default :notes, :notebook_id, 0
  end
end
