class Project < ApplicationRecord
  has_many :todos, dependent: :destroy

end
