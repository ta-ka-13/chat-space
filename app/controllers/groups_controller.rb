class GroupsController < ApplicationController

  before_action :set_group, only: %i(edit update)
  
  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path(@group), notice:"グループを作成しました"
    eles
      # flash.now[:alert] = "グループ作戦に失敗しました"
      # render action: :new

      render :new

    end    
  end

  def edit ; end

  # def update
  #   if @group.update(group_params)
  #     redirect_to group_messages_path(@group), notice: "グループ編集に失敗しました"
  #     render action: :edit
  #   end
  end


private

 def group_params
 params.require(:group).permit(:name, { :user_ids: [] })
 end

#  def set_group
#   @group = Group.find(params[:id])
#  end

end
