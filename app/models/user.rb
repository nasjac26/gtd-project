class User < ApplicationRecord
    has_many :user_tasks
    has_many :tasks, through: :user_tasks
    has_many :user_teams
    has_many :teams, through: :user_teams

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' },
    allow_blank: true
end
