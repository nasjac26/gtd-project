class UserSerializer < ActiveModel::Serializer
  has_many :tasks
  attributes :id, :username, :email, :password_digest
end
