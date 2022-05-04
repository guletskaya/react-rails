class AddBirthdateToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :birthdate, :string
  end
end
