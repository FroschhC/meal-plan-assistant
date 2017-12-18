FactoryBot.define do
  factory :user do
    first_name 'Fred'
    last_name 'Beans'
    user_name 'FBeans'
    password 'Password'

    sequence(:email) { |n| "FBeans#{n}@gmail.com" }
  end
end
