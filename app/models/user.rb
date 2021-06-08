# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    # ger
    attr_reader :password

    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}

    has_many :notebooks,
    foreign_key: :author_id,
    class_name: :Notebook

    has_many :notes,
    foreign_key: :author_id,
    class_name: :Note

    has_many :tags,
    foreign_key: :author_id,
    class_name: :Tag
    
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def is_password?(password)
        pw_object = BCrypt::Password.new(self.password_digest)
        pw_object.is_password?(password) #bcrypt is_password method
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::base64
        self.save!
        self.session_token
    end

end
