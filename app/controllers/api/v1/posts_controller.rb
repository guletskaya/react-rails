module Api
    module V1
        class PostsController < ApplicationController
            before_action :authenticate_user!
            before_action :set_post, only: [:show, :edit, :update]
            def index
                user_signed_in?
                byebug
                posts = Post.all
                render json: PostSerializer.new(posts).serialized_json
            end

            def show
                post = Post.find(params[:id])
                render json: PostSerializer.new(post).serialized_json
            end

            def create
                post = Post.new(post_params)
                if post.save
                    render json: PostSerializer.new(post).serialized_json
                else
                    render json: {error: post.errors.messages}, status: 422
                end            
            end

            def destroy
                 post = Post.find(post_params)               
                if post.destroy
                    head :no_content
                else
                    render json: {error: post.errors.messages}, status: 422
            
                end
            end

            private

            def post_params
                params.require(:post).permit(:title, :description, :user_id)
            end

            def set_post
                post = Post.find(params[:id])
            end

        end
    end
end