# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
UserTask.delete_all
Task.delete_all
Team.delete_all
UserTeam.delete_all


puts "Seeding Users...π±βπ±βπ±β"

User.create(username: "Wren", password: "password", email: "wrenniepie@hotmail.com")
User.create(username: "Sandy", password: "password", email: "slo@gmail.com")
User.create(username: "Dex", password: "password", email: "fireland@apple.com")
User.create(username: "Jacob", password: "password", email: "bourne2run@yahoo.com")
User.create(username: "Yoshi", password: "password", email: "not4springboard@castle.com")

puts "Seeding Tasks...π§ π§ π§ "

Task.create(name: "Do project", weight_tag: 5)
Task.create(name: "Clean desk", weight_tag: 1)
Task.create(name: "Write things", weight_tag: 3)
Task.create(name: "Meet with client", weight_tag: 5)
Task.create(name: "Attend online zooms", weight_tag: 4)

puts "Seeding Users with UserTasks...πͺπͺπͺ"

UserTask.create(user_id: 1, task_id: 1)
UserTask.create(user_id: 1, task_id: 2)
UserTask.create(user_id: 1, task_id: 3)
UserTask.create(user_id: 1, task_id: 4)
UserTask.create(user_id: 5, task_id: 5)

puts "Seeding Teams...π§Ώπ§Ώπ§Ώ"

Team.create(team_name: "Blue Lions")

puts "Seeding UserTeams...π§π§π§"

UserTeam.create(user_id: 1, team_id: 1)
UserTeam.create(user_id: 2, team_id: 1)
UserTeam.create(user_id: 3, team_id: 1)
UserTeam.create(user_id: 4, team_id: 1)
UserTeam.create(user_id: 5, team_id: 1)

puts "Seeding Done!π±π±π±" 

# add profile pictures to userteam