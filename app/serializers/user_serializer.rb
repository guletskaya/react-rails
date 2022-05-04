class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :email, :password, :admin

  has_many :posts
end
