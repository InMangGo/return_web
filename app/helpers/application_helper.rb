module ApplicationHelper
  def html_body_classes
    controller_path_action_name = "#{controller.controller_path.gsub('/', '__')}__#{controller.action_name}"
    if @body_class.present?
      "#{@body_class} #{controller_path_action_name}"
    else
      controller_path_action_name.to_s
    end
  end
end
