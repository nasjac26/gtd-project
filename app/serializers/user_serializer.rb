class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :admin, :email, :password_digest
end
