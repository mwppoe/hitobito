# Returns the absolute path of a file within a specific gem.
#
# Example:
#   webpack_gem_file_path(
#     'nested_form',
#     File.join('vendor', 'assets', 'javascripts', 'jquery_nested_form.js')
#   )
def webpack_gem_file_path(gem_name, relative_file_path)
  File.join(Gem.loaded_specs[gem_name].full_gem_path, relative_file_path)
end

# Yields the file path for every wagon that contains a file at
# `relative_file_path`. The optional `fallback_file_path` is yielded,
# if no wagon contains file at `relative_file_path`.
#
# Example:
#   webpack_wagon_file_paths(
#     File.join('app', 'javascript', 'stylesheets', 'customizable', '_fonts.scss'),
#     File.join('app', 'javascript', 'stylesheets', 'customizable', '_fonts.scss')
#   ) do |file_path|
#     # Do something...
#   end
def webpack_wagon_file_paths(relative_wagon_file_path, fallback_file_path = nil)
  file_paths = \
    Wagons
    .all
    .collect { |wagon| File.join(wagon.paths.path.to_s, relative_wagon_file_path) }
    .select { |file_path| File.exist?(file_path) }
    .each { |file_path| yield(file_path) }

  if fallback_file_path && file_paths.blank?
    yield(fallback_file_path)
  end
end
