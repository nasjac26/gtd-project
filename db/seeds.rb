# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Users...🐱🐱🐱"

User.create(username: "Jacob", admin: false)
User.create(username: "Sandy", admin: false)
User.create(username: "Dex", admin: true)
User.create(username: "Wren", admin: false)
User.create(username: "Yoshi", admin: false)

puts "Seeding Tasks...🧠🧠🧠"

Task.create(name: "Do project", weight_tag: 5)
Task.create(name: "Clean desk", weight_tag: 1)
Task.create(name: "Write things", weight_tag: 3)
Task.create(name: "Meet with client", weight_tag: 5)
Task.create(name: "Attend online zooms", weight_tag: 4)

puts "Seeding users with tasks...🔪🔪🔪"

UserTask.create(user_id: 1, task_id: 1)
UserTask.create(user_id: 2, task_id: 2)
UserTask.create(user_id: 3, task_id: 3)
UserTask.create(user_id: 4, task_id: 4)
UserTask.create(user_id: 5, task_id: 5)

puts "Seeding Done!🌱🌱🌱" 