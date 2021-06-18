# == Schema Information
#
# Table name: notebooks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Notebook < ApplicationRecord

    validates :title, :author_id, presence: true;
    validates :title, uniqueness: {scope: :author_id}

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User 

    has_many :notes, dependent: :destroy,
    foreign_key: :notebook_id,
    class_name: :Note
    
end
