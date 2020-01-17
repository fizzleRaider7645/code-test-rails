class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :name, :price
  has_many :members
end
