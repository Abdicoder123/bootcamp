class CreateDonations < ActiveRecord::Migration[7.2]
  def change
    create_table :donations do |t|
      t.boolean :recurring, default: false

      t.timestamps
    end
  end
end
