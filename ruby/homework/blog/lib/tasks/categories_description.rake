# frozen_string_literal: true

namespace :db do
    desc 'backfill dedscriptions for the categories'
    task fill_description: :environment do
      Category.find_each do |category|
        if category.description.blank?
            category.update(description: "default description")
        end
      end
    end
end