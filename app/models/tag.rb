# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  note_ids   :integer          default([]), is an Array
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tag < ApplicationRecord

    validates :author_id, :name, presence: true
    validates :name, uniqueness: {scope: :author_id}

    # has_many :notes,
    # foreign_key: :tag_id,
    # class_name: :Note

    # belongs_to :author
    # foreign_key: :author_id,
    # class_name: :author


end
