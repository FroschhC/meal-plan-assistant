require 'rails_helper'
require 'spec_helper'

RSpec.describe MealItem, type: :model do
  it { should have_valid(:item_id).when(1, 2) }
  it { should_not have_valid(:item_id).when(nil, '') }

  it { should have_valid(:meal_id).when(1, 2) }
  it { should_not have_valid(:meal_id).when(nil, '') }
end
