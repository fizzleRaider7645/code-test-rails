class MemberSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone
  belongs_to :subscription
end
