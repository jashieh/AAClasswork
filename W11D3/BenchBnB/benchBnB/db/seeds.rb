# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.delete_all

benchs = Bench.create([{ description: 'bench1', lat: 37.767461, lng: -122.440857
}, { description: 'bench2', lat: 37.772934, lng: -122.441500},
{ description: 'bench3', lat:  37.792106, lng: -122.452286},
{ description: 'bench4', lat: 37.788696, lng:-122.410760} ])