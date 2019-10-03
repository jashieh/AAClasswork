require 'rails_helper'
require 'spec_helper'
require 'shoulda/matchers'

Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"

  let(:user) { 
    User.create!(
      username: 'test',
      password: 'password123'
    )
  }
  describe User do
    it {should validate_presence_of(:username)}
    # it {should validate_uniqueness_of(:username)}
    it {should validate_length_of(:password).is_at_least(6)}
    # expect(user.password_digest).to be_equal(user.is_password?(user.password))
  end

end
