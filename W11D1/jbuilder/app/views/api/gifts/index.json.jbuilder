# @gifts.each do |gift| 
#   json.set! gift.id do 
#     p gift   
#     json.extract! gift, :title, :description
#   end
# end

json.array! @gifts do |gift|
  json.extract! gift, :title, :description
end