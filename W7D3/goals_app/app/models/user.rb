class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true 
  validates :password, length: {minimum: 6}, allow_nil: true 

  before_validation :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(username,password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password 
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.update(session_token: session_token)
    self.session_token
  end


end