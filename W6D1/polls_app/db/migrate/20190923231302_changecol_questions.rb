class ChangecolQuestions < ActiveRecord::Migration[5.2]
  def change
    rename_column :questions, :question, :text
    rename_column :answer_choices, :answer, :text
  end
end
