class TodoSerializer < ActiveModel::Serializer
  attributes :id, :name, :deadline, :complete, :project_id, :created_at, :updated_at
end
