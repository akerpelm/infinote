# == Schema Information
#
# Table name: notes
#
#  id          :bigint           not null, primary key
#  title       :string
#  content     :string
#  author_id   :integer          not null
#  notebook_id :integer          default(0), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  tag_id      :integer
#
class Note < ApplicationRecord

    validates :author_id, presence: true

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :notebook, optional: true,
    foreign_key: :notebook_id,
    class_name: :Notebook

    # belongs_to :tag, optional: true,
    # foreign_key: :tag_id,
    # class_name: :Tag

    # has_many :tags, 
    # through: :tagged_notes,
    # source: :tag

end
