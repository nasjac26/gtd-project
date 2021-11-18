class UserTeamSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :team_id
end
