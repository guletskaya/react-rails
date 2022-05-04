module Api
    module V1
        class UsersController < ApplicationController
            respond_to :json
            
            before_action :set_user, only: [:show, :edit, :update]
            def index
                users = User.all
                render json: UserSerializer.new(users, options).serialized_json
            end

            def show
            
                render json: UserSerializer.new(user, options).serialized_json
            end

            def create
                user = User.create!(
                    username: params['user']['username'],
                    name: params['user']['name'],
                    surname: params['user']['surname'],
                    birthdate: params['user']['birthdate'],
                    email: params['user']['email'],
                    password: params['user']['password'],
                )
                
                if user.save
                    render json: UserSerializer.new(user).serialized_json
                else
                    render json: {error: user.errors.messages}, status: 422
                end
            end
            
            def update
                                
                if user.update(user_params)
                    render json: UserSerializer.new(user, options).serialized_json
                else
                    render json: {error: user.errors.messages}, status: 422
            
                end
            end
            def destroy
                                
                if user.destroy
                    head :no_content
                else
                    render json: {error: user.errors.messages}, status: 422
                end
            end
            
            private

            def user_params
                params.require(:user).permit(:username, :name, :surname, :birthdate, :email, :password)
            end

            def set_user
                @user = User.find(params[:id])
            end

            def options
                @options ||= { include: %i[posts] }
            end

            private
            def respond_with(resource, _opts = {})
                resource.persisted? ? register_success : register_failed
            end
            def register_success
                render json: { message: 'Signed up.' }
            end
            def register_failed
                render json: { message: "Signed up failure." }
            end

        end
    end
end