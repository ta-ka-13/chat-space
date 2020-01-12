json.array! @messages do |message|
  json.content message.content
  json.image message.image.url
  json.user_name message.user.name
  json.id message.id
  json.group_id message.group_id
  json.date message.created_at.strftime("%Y/%m/%d %H:%M:%S")
  json.user_id message.user_id

end