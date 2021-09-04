const { ThisReceiver } = require('@angular/compiler');
const Product = require('./model/product')

class FakeDb{
    constructor() {
        this.products = [
            {
                coverImage: './assets/img/phone-cover.jpg',
                listingImage: './assets/img/placeholder-400-300.png',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading_one: 'Heading 1',
                heading_one_desc: 'ヘッダー１のサンプルテキストです。',
                heading_two: 'Heading 2',
                heading_two_desc: 'ヘッダー２のサンプルテキストです。',
                heading_three: 'Heading 3',
                heading_three_desc: 'ヘッダー３のサンプルテキストです。'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                listingImage: './assets/img/placeholder-400-300.png',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading_one: 'Heading 1',
                heading_one_desc: 'desc 1',
                heading_two: 'Heading 2',
                heading_two_desc: 'desc 2',
                heading_three: 'Heading 3',
                heading_three_desc: 'desc 3'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                listingImage: './assets/img/placeholder-400-300.png',
                name: 'Phone Standard',
                price: 299,
                description: 'The most popular model in the Asia resion',
                heading_one: 'Heading 1',
                heading_one_desc: 'desc 1',
                heading_two: 'Heading 2',
                heading_two_desc: 'desc 2',
                heading_three: 'Heading 3',
                heading_three_desc: 'desc 3'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                listingImage: './assets/img/placeholder-400-300.png',
                name: 'Phone Standard 2',
                price: 199,
                description: '',
                heading_one: 'Heading 1',
                heading_one_desc: 'desc 1',
                heading_two: 'Heading 2',
                heading_two_desc: 'desc 2',
                heading_three: 'Heading 3',
                heading_three_desc: 'desc 3'
            }
        ]
    }

    async initDb(){
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb(){
        await Product.deleteMany({})
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb(){
        this.pushProductsToDb()
    }
}

module.exports = FakeDb