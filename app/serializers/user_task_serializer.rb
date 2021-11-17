class UserTaskSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :task_id
end
