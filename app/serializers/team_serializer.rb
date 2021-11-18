class TeamSerializer < ActiveModel::Serializer
  has_many :users
  attributes :id, :team_name
end
