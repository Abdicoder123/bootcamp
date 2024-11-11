class AddPriorityToCategories < ActiveRecord::Migration[7.2]
  def change
    add_column :categories, :priority_level, :integer, default: 0, null: false
  end
end