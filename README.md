# README

# 名前:application name
## chat space Custom

# 概要:overview
テストアカウントアドレス：i@i.com
パスワード：12345678

# スクリーンショット:screenshot

# gif

# 本番環境:production environment

# 目的:purpose

# 工夫したポイント:devised

# 追加機能: Additional features
・メッセージ削除機能
・グループ削除機能

# 使用技術:application technology
#### Ruby on Rails(5),GitHub

# 課題:issues in the future


# 実装予定の機能:implementation plan


# アプリケーションリンク先:application link
http://3.113.68.147/users/sign_in


# chat-space CB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|nul: false|
|password|string|null: false|
|name|string|null: false|
 ## Association
 - has_many :groups_users
 - has_many :messages
 - has_many :groups,through: :groups_users


## groups_usersテーブル
|Column|Type|Option|
|------|----|------|
|user_id|references|null: false, foreign: true|
|group_id|references|null: fales, foreign: true|
## Association
- belongs_to :group
- belongs_to :user


## groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false|
## Association
- has_many :groups_users
- has_many :users, through: :groups_users
- has_many :messages


## messageテーブル
|Column|Type|Option|
|------|----|------|
|text|text||
|image|string||
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
## Association
- belong_to :group
- belong_to :user 
