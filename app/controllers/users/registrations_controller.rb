# frozen_string_literal: true

module Api
  module V1
    class Users::RegistrationsController < Devise::RegistrationsController
      respond_to :json

      private

      def respond_with(resource, _opts = {})
        render json: {
          status: { code: 200, message: 'Logged in successfully.' },
          data: UserSerializer.new(resource).serializable_hash[:data][:attributes]
        }
      end
    end
  end
end
