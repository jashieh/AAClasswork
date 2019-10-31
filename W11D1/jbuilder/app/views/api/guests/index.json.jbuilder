json.array! @guests do |guest|
  # json.name guest.name
  # json.age guest.age 
  if guest.age > 40 && guest.age < 50
    json.partial! 'guest', guest: guest 
  end
end