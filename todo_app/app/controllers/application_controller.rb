class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session,
      if: Proc.new { |c| c.request.format =~ %r{application/json} }
end



###### if you get a Can't verify CSRF token authenticity" use this: https://gist.github.com/thelastinuit/1f5c2d30eda01ac20bb6
