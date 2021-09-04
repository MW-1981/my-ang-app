const mangoose = require('mongoose')
const Schema = mangoose.Schema
//const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
//    author: ObjectId,
    coverImage: String,
    listingImage: String,
    name: {type: String, required: true, max:[60, 'Max Length is 60 caracters.']},
    price: Number,
    description: String,
    heading_one: String,
    heading_one_desc: String,
    heading_two: String,
    heading_two_desc: String,
    heading_three: String,
    heading_three_desc: String
})

module.exports = mangoose.model('Product', ProductSchema)
