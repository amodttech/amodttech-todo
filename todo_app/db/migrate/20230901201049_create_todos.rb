class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.string :name
      t.date :deadline
      t.integer :priority
      t.boolean :complete
      t.references :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
