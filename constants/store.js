import Category1 from '@/public/stores/accessory.png'
import Category from '@/public/stores/category.png'
import Category2 from '@/public/stores/digital.png'
import FountainOfGlory from '@/public/stores/fountain_of_glory.jpg'
// import LetJudahLeadBlack from '@/public/stores/let_judah_black.jpg'
// import LetJudahLeadWhite from '@/public/stores/let_judah_white.jpg'
// import LetJudahLeadNavy from '@/public/stores/let_judah_navy.jpg'
import Hoodie from '@/public/stores/hoodie.jpg'
import LetJudahLead from '@/public/stores/let_judah.jpg'

export const store = [
    {
        image: FountainOfGlory,
        name: "Foundation of Glory T-Shirt",
        category: "Clothing",
        price: 20.00,
        description: "Comfortable cotton t-shirt featuring our ministry logo. Perfect for casual wear and showing your support.",
        sizes: ["S", "M", "L", "XL"],
        inStock: true
    },
    {
        image: LetJudahLead,
        name: "Let Judah Lead T-Shirt",
        category: "Clothing",
        price: 20.00,
        description: "Comfortable cotton t-shirt featuring our ministry logo. Perfect for casual wear and showing your support.",
        sizes: ["S", "M", "L", "XL"],
        inStock: true
    },
    // {
    //     image: Book,
    //     name: "Devotional Book",
    //     category: "Digital Product",
    //     price: 12.00,
    //     description: "Daily devotional guide to help you grow in your spiritual journey.",
    //     format: "PDF",
    //     inStock: true
    // },
    // {image: Bag, name: "Scripture Tote Bag", category: "Accessories", price: 18.00},
    // {image: CD, name: "Worship Album Download", category: "Digital Product", price: 7.00},
    {image: Hoodie, name: "Faith Hoodie", category: "Clothing", price: 28.00},
    // {image: Mug, name: "Inspirational Mug", category: "Accessories", price: 15.00},
]

export const category = [
    {image: Category, category: "Clothing", description: "T-shirts, hoodies, and caps featuring ministry logos"},
    {image: Category1, category: "Accessories", description: "Keychains, mugs, tote bags, and wristbands"},
    {image: Category2, category: "Digital Products", description: "Downloadable worship music and sermon series"},
]