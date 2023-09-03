class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :deadline
  has_many :todos, class_name: "todo", foreign_key: "reference_id"
end
