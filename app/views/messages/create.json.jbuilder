  json.content @message.content
  json.image @message.image.url
  json.user_id @message.user_id
  json.group_id @message.group_id
  json.date @message.created_at.strftime("%Y/%m/%d %H:%M:%S")
  json.id @message.id
  json.user_name @message.user.name