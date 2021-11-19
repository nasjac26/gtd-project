class TeamSerializer < ActiveModel::Serializer # execute logic inside serializer with method
  # has_many :users, include: :tasks # no show tasks
  # has_many :tasks, through: :users

  attributes :id, :team_name, :users # this :users points to our def users method = hooks it up

  # username, first task, profile picture
  def users
    allusersarray = [] # info we want shown
    object.users.each do |user| # object is the current class(team)?? # teams have many users -> each user
      new_user_hash = {id: user.id, username: user.username, tasks: user.tasks} # hash selects each users tasks (keys have these values)
      allusersarray << new_user_hash # new_user_hash(object) shoveled inside []
    end
    return allusersarray 
  end
end