class UserSerializer < ActiveModel::Serializer
  has_many :tasks

  attributes :id, :username
end

# 11/18/21
  # took out :email in attributes 

# remember to add profile pictures 