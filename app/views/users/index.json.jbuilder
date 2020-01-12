json.array! @users do |user|
  json.id user.id
  json.name user.name
  json.email user.email
  
  
end

json.array! @groups do |group|
  json.group.id group.id
  
end