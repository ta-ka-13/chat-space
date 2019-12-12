# json! array! @messages do |message|
  json.content @message.content
  json.image @message.image.url
  json.user_id @message.user_id
  json.group_id @message.group_id
  json.user_name @message.user.name
  json.date @message.created_at.strftime("%Y年%-m月%-d日 %-H時%-M分%-S秒")
# end
