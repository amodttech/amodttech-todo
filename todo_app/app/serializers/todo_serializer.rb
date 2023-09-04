class TodoSerializer < ActiveModel::Serializer
  attributes :id, :name, :deadline, :complete, :priority, :project_id, :created_at, :updated_at
end
