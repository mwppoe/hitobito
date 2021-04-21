# encoding: utf-8

#  Copyright (c) 2017, Pfadibewegung Schweiz. This file is part of
#  hitobito and licensed under the Affero General Public License version 3
#  or later. See the COPYING file at the top-level directory or at
#  https://github.com/hitobito/hitobito.

class Export::MessageJob < Export::ExportBaseJob

  self.parameters = PARAMETERS + [:message_id]

  def initialize(user_id, message_id, filename)
    super(:pdf, user_id, filename: filename)
    @message_id = message_id
  end

  private

  def message
    @message ||= Message.find(@message_id)
  end

  def data
    message.exporter_class.new(message).render
  end

end
