class UserSerializer < ActiveModel::Serializer
  has_many :tasks
  has_many :teams

  attributes :id, :username
end

# 11/18/21
  # took out :email in attributes 

# remember to add profile pictures 