class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login!(@user)
            render '/api/users/show'
        else
            render json: ["Invalid credentials"], status: 401
        end
    end

    def destroy
        @user = current_user
        # debugger    
        if @user
            logout
            # render json: ["Successfully logged out"]
            render "api/users/show"
        else
            render json: ["Not logged in! Cannot sign you out!"], status: 403
        end
    end
end