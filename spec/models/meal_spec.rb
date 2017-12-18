require 'rails_helper'
require 'spec_helper'

RSpec.describe Meal, type: :model do
  it { should have_valid(:title).when('Breakfast', 'Dinner') }
  it { should_not have_valid(:title).when(nil, '') }

  it { should have_valid(:user_id).when(1, 2) }
  it { should_not have_valid(:user_id).when(nil, '') }
end
