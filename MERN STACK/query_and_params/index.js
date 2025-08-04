const express = require('express');
const app = express();
// const path = require('path');

const quotes = [
    {
      "id": 1,
      "quote": "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
      "author": "Rumi"
    },
    {
      "id": 2,
      "quote": "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
      "author": "Abdul Kalam"
    },
    {
      "id": 3,
      "quote": "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
      "author": "Abdul Kalam"
    },
    {
      "id": 4,
      "quote": "If You Can'T Make It Good, At Least Make It Look Good.",
      "author": "Bill Gates"
    },
    {
      "id": 5,
      "quote": "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
      "author": "Rumi"
    },
    {
      "id": 6,
      "quote": "It is bad for a young man to sin; but it is worse for an old man to sin.",
      "author": "Abu Bakr (R.A)"
    },
    {
      "id": 7,
      "quote": "If You Are Out To Describe The Truth, Leave Elegance To The Tailor.",
      "author": "Albert Einstein"
    },
    {
      "id": 8,
      "quote": "O man you are busy working for the world, and the world is busy trying to turn you out.",
      "author": "Abu Bakr (R.A)"
    },
    {
      "id": 9,
      "quote": "While children are struggling to be unique, the world around them is trying all means to make them look like everybody else.",
      "author": "Abdul Kalam"
    },
    {
      "id": 10,
      "quote": "These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People.",
      "author": "Abraham Lincoln"
    },
    {
      "id": 11,
      "quote": "I Don'T Believe In Failure. It Is Not Failure If You Enjoyed The Process.",
      "author": "Oprah Winfrey"
    },
    {
      "id": 12,
      "quote": "Do not get elated at any victory, for all such victory is subject to the will of God.",
      "author": "Abu Bakr (R.A)"
    },
    {
      "id": 13,
      "quote": "Wear gratitude like a cloak and it will feed every corner of your life.",
      "author": "Rumi"
    },
    {
      "id": 14,
      "quote": "If you even dream of beating me you'd better wake up and apologize.",
      "author": "Muhammad Ali"
    },
    {
      "id": 15,
      "quote": "I Will Praise Any Man That Will Praise Me.",
      "author": "William Shakespeare"
    },
    {
      "id": 16,
      "quote": "One Of The Greatest Diseases Is To Be Nobody To Anybody.",
      "author": "Mother Teresa"
    },
    {
      "id": 17,
      "quote": "I'm so fast that last night I turned off the light switch in my hotel room and was in bed before the room was dark.",
      "author": "Muhammad Ali"
    },
    {
      "id": 18,
      "quote": "People Must Learn To Hate And If They Can Learn To Hate, They Can Be Taught To Love.",
      "author": "Nelson Mandela"
    },
    {
      "id": 19,
      "quote": "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
      "author": "Rumi"
    },
    {
      "id": 20,
      "quote": "The less of the World, the freer you live.",
      "author": "Umar ibn Al-Khattāb (R.A)"
    },
    {
      "id": 21,
      "quote": "Respond to every call that excites your spirit.",
      "author": "Rumi"
    },
    {
      "id": 22,
      "quote": "The Way To Get Started Is To Quit Talking And Begin Doing.",
      "author": "Walt Disney"
    },
    {
      "id": 23,
      "quote": "God Doesn'T Require Us To Succeed, He Only Requires That You Try.",
      "author": "Mother Teresa"
    },
    {
      "id": 24,
      "quote": "Speak any language, Turkish, Greek, Persian, Arabic, but always speak with love.",
      "author": "Rumi"
    },
    {
      "id": 25,
      "quote": "Happiness comes towards those which believe in him.",
      "author": "Ali ibn Abi Talib (R.A)"
    },
    {
      "id": 26,
      "quote": "Knowledge is of two kinds: that which is absorbed and that which is heard. And that which is heard does not profit if it is not absorbed.",
      "author": "Ali ibn Abi Talib (R.A)"
    },
    {
      "id": 27,
      "quote": "When I am silent, I have thunder hidden inside.",
      "author": "Rumi"
    },
    {
      "id": 28,
      "quote": "Technological Progress Is Like An Axe In The Hands Of A Pathological Criminal.",
      "author": "Albert Einstein"
    },
    {
      "id": 29,
      "quote": "No One Would Choose A Friendless Existence On Condition Of Having All The Other Things In The World.",
      "author": "Aristotle"
    },
    {
      "id": 30,
      "quote": "Life is a gamble. You can get hurt, but people die in plane crashes, lose their arms and legs in car accidents; people die every day. Same with fighters: some die, some get hurt, some go on. You just don't let yourself believe it will happen to you.",
      "author": "Muhammad Ali"
    }
  ]

app.get("/",(req,res)=>{
    res.send("hello you are at home");
})

app.get("/quotes",(req,res)=>{
    res.json(quotes);
})



// ab one of the way is mai yeh karu ki quotes 1 2 3 4 5 6 7 aise karte karte rahu but aise toh mere ko 100 port chhaiye honge toh mai millions of routes thodi banaunga so for that we have params we will make it generic

// app.get("/quotes/1", (req,res)=>{
//     const qoute = quotes.find(quote => quote.id == 1)
//     res.json(qoute);
// })
// app.get("/quotes/2", (req,res)=>{
//     const qoute = quotes.find(quote => quote.id == 2)
//     res.json(qoute);
// })

// now above dono codes mai the only thing that is changing is id 




// id is a param and params is a object and mai aur bhi bhot sare bana sakta hu like :/id/:name etc
// dyanmic routes
// id is variable if colon nahi lagunga toh yeh toh route ho jayega
// yaha par colon laga dio bhai lekin localhost/qoutes/3 likh direct not colon 
app.get('/quotes/:id', (req, res) => {
    // console.log(req)
    const id = req.params.id;
    const quote = quotes.find(quote => quote.id == id);
    res.json(quote);
  })  

// if i want a specific quote then 
// app.get('/quotes/:id',(req,res)=>{
//     const id = req.params.id;
//    const quote = quotes.find(quote => quote.id == id);
//    res.json(quote);
// })



// query params
// https://developer.mozilla.org/en-US/search?q=html;
// this org tk toh domain name hai aur 
// humne search kia hai html ko so end mai q= html yeh ek query param hai 
// mai mango send kardunga toh q = mango ho jayega
// mujhe jab mai koi qoute search karu na 2 words toh jin jin mai voh words lie karte honge na voh wale quotes aah jane chhaiye mere paas yeh task hai 

// http://localhost:3000/search?author=rumi
// if i want to send multiple value so i will do this 
// http://localhost:3000/search?author=rumi&age=30&gender=female
// { author: 'rumi', age: '30' }
app.get('/search',(req,res)=>{
const author =req.query.author;
// const quote = quotes.find(q => q.author.toLowerCase() == author.toLowerCase());
const quote = quotes.filter(q => q.author.toLowerCase() == author.toLowerCase());

res.json(quote);

})

app.get('/searchquote',(req,res)=>{
 const searchedquote = req.query.quote;
 console.log(searchedquote);
 const finalquote = quotes.filter(q => q.quote.toLowerCase().includes(searchedquote.toLowerCase()));
 res.json(finalquote);
})
// includes() ka kaam hota hai partial match dhundhna. 

const port = 3000;
app.listen(3000,()=>{
    console.log("server is up at port number",port);
})


