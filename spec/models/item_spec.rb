require 'rails_helper'
require 'spec_helper'

RSpec.describe Item, type: :model do
  it { should have_valid(:name).when('Pie', 'Chicken') }
  it { should_not have_valid(:name).when(nil, '') }

  it { should have_valid(:user_id).when(1, 2) }
  it { should_not have_valid(:user_id).when(nil, '') }
end
