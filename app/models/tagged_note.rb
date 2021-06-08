# == Schema Information
#
# Table name: tagged_notes
#
#  id         :bigint           not null, primary key
#  tag_id     :integer          not null
#  note_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class TaggedNote < ApplicationRecord
    validates :tag_id, :note_id, presence, true

    belongs_to :note,
    foreign_key: :note_id,
    class_name: :Note

    belongs_to :tag,
    foreign_key: :tag_id,
    class_name: :Tag

end
