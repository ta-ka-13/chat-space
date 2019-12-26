json.arry! @message do |message|
  json.content message.content
  json.image message.image.url
  json.create_at message.created_at.strftime("%Y/%m/%d %H:%M:%S")
  json.user_name message.user.user_name
  json.id message.id
end