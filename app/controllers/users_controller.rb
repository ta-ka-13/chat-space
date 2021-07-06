class UsersController < ApplicationController

  def edit
    @users = User.find(params[:id])
  end


  def index

    return nil if params[:name] == ""

    @users = User.where(['name LIKE ?', "%#{params[:name]}%"]).where.not(id: current_user.id)

    respond_to do |format|
      format.html
      format.json
    end
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

private

  def user_params
    params.require(:user).permit(:name, :email, :image)
  end
end