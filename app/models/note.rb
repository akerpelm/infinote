# == Schema Information
#
# Table name: notes
#
#  id          :bigint           not null, primary key
#  title       :string
#  content     :string
#  author_id   :integer          not null
#  notebook_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Note < ApplicationRecord

    validates :author_id, :notebook_id, presence: true

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :notebook,
    foreign_key: :notebook_id,
    class_name: :Notebook

end
