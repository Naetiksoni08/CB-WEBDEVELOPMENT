require("dotenv").config();
const connectdb = require("./config/db")
const ProductModel = require("./models/product") // product schema

connectdb();



async function seeddb() {
    const products = [
        {
          name: "Wireless Mouse",
          price: 1999,
          Image:
            "https://images.unsplash.com/photo-1631749352438-7d576312185d?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Ergonomic wireless mouse with 2.4GHz connectivity and adjustable DPI.",
        },
        {
          name: "Mechanical Keyboard",
          price: 5499,
          Image:
            "https://images.unsplash.com/photo-1602025882379-e01cf08baa51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "RGB backlit mechanical keyboard with blue switches and metal frame.",
        }
    ]


await ProductModel.deleteMany({});
await ProductModel.create(products)
console.log("db seeded");

};

seeddb();
