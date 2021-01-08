module Api
  module V1
    class Users::SessionsController < Devise::SessionsController
      respond_to :json
      before_action :authenticate_user!

      private

      def respond_with(resource, _opts = {})
        render json: {
          status: { code: 200, message: 'Logged in successfully.' },
          data: UserSerializer.new(resource).serializable_hash[:data][:attributes]
        }
      end

      def respond_to_on_destroy
        head :ok
      end
    end
  end
end
