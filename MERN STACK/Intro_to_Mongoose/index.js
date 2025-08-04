const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/MovieApp') // connect fucntion will return a promise and name of my database will be movieapp
    .then(() => console.log("DB connected successfully"))
    .catch(() => console.log("something went wrong"));  //we handled the promise gracefully


//now we will make a blueprint structure of our document 

//schema without validations and constraints
// const movieSchema = new mongoose.Schema({
//     name:String,
//     year:Number,
//     Rating:Number,
//     Iswatched:Boolean
// })


const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        min: 1900,
        max: 2025
    },
    Rating: {
        type: Number,
        min: 0,
        max: 10
    },
    Iswatched: {
        type: Boolean,
        default: false
    }
})

// now i will make a model
// const Movie = mongoose.model('Movie',movieSchema); // name of my collection will be movie


// const ironman = new Movie({name:'ironman',year:2014,rating:9.5,Iswatched:"true"});//this is used to make one single movie and this is in memory until u do ironman.save
// console.log(ironman);



// ironman.save() //this also returns a promise
//     .then((e) => {
//         console.log(e);
//         console.log("Saved successfully");
//     })
//     .catch((err) => {
//         console.log(err);
//     })




// -------another way of sir----------
// create 

// const Movie = mongoose.model('Movie', movieSchema);



// async function createMovie() {
// //     const movie = new Movie({
//         "name": "Galactic Odyssey",
//         "year": 2024,
//         "Rating": 8.3,
//         "IsWatched": true
//     })

//  await movie.save();
// ab tu agar isko comment bhi kardega na tab bhi voh tera db mai show hoga jab tu db.movies.find() call karega toh u will see 3 movies galactic, ironman and this hearts unwritten why because u have saved them in ur db 

// await Movie.create({
//       name: "Hearts Unwritten",
//       year: 2019,
//       Rating: 5.6,
//       Iswatched: true,
//     })
// u dont need to explicitly write movies.save it automatically gets saved 
// It automatically creates and saves the document in one step
// console.log("movie saved successfully");
// }



// ___________________________________________________________
// if u want to bulk createMANY the data then u can do this_______


// const Movie = mongoose.model('Movie', movieSchema);

// async function createMOVIES() {

//     const data = [
//         {
//             name: "Inception",
//             year: 2010,
//             Rating: 8.8,
//             Iswatched: true
//         },
//         {
//             name: "The Matrix",
//             year: 1999,
//             Rating: 8.7,
//             Iswatched: true
//         },
//         {
//             name: "The Prestige",
//             year: 2006,
//             Rating: 8.5,
//             Iswatched: false
//         },
//         {
//             name: "Tenet",
//             year: 2020,
//             Rating: 7.4,
//             Iswatched: false
//         },
//         {
//             name: "Interstellar",
//             year: 2014,
//             Rating: 8.6,
//             Iswatched:true
//         }
//     ];

//     await Movie.create(data);
//     console.log("movies saved successfully");

// }
//basically maine agr object ke andar bheja toh voh create one hoga agr maine array mai bhej dia toh create many kardega






//Read-------------------===========-------------------
// const Movie = mongoose.model('Movie', movieSchema);

// async function getMovies() {

//     const data = [
//         {
//             name: "Inception",
//             year: 2010,
//             Rating: 8.8,
//             Iswatched: true
//         },
//         {
//             name: "The Matrix",
//             year: 1999,
//             Rating: 8.7,
//             Iswatched: true
//         },
//         {
//             name: "The Prestige",
//             year: 2006,
//             Rating: 8.5,
//             Iswatched: false
//         },
//         {
//             name: "Tenet",
//             year: 2020,
//             Rating: 7.4,
//             Iswatched: false
//         },
//         {
//             name: "Interstellar",
//             year: 2014,
//             Rating: 8.6,
//             Iswatched:true
//         }
//     ];
//     const getmovies = await Movie.find();
//     console.log(getmovies);



// }

//find one ------------------------------------------------
// async function getMovies() {
//         const data = [
//             {
//                 name: "Inception",
//                 year: 2010,
//                 Rating: 8.8,
//                 Iswatched: true
//             },
//             {
//                 name: "The Matrix",
//                 year: 1999,
//                 Rating: 8.7,
//                 Iswatched: true
//             },
//             {
//                 name: "The Prestige",
//                 year: 2006,
//                 Rating: 8.5,
//                 Iswatched: false
//             },
//             {
//                 name: "Tenet",
//                 year: 2020,
//                 Rating: 7.4,
//                 Iswatched: false
//             },
//             {
//                 name: "Interstellar",
//                 year: 2014,
//                 Rating: 8.6,
//                 Iswatched:true
//             }
//         ];
//         const getmovies = await Movie.findOne({name:"Interstellar"});
//         console.log(getmovies);

//     }

// find by id

//  async function getMovies() {
//          const data = [
//             {
//                 name: "Inception",
//                 year: 2010,
//                 Rating: 8.8,
//                 Iswatched: true
//             },
//             {
//                 name: "The Matrix",
//                 year: 1999,
//                 Rating: 8.7,
//                 Iswatched: true
//             },
//             {
//                 name: "The Prestige",
//                 year: 2006,
//                 Rating: 8.5,
//                 Iswatched: false
//             },
//             {
//                 name: "Tenet",
//                 year: 2020,
//                 Rating: 7.4,
//                 Iswatched: false
//             },
//             {
//                 name: "Interstellar",
//                 year: 2014,
//                 Rating: 8.6,
//                 Iswatched:true
//             }
//         ];
//         const getmovies = await Movie.findOne({_id:"688b5f19536853aad11fb4d1"});
//         console.log(getmovies);

//     }

// //get by query
// async function getMovieswithquery(query) {
//     const data = [
//         {
//             name: "Inception",
//             year: 2010,
//             Rating: 8.8,
//             Iswatched: true
//         },
//         {
//             name: "The Matrix",
//             year: 1999,
//             Rating: 8.7,
//             Iswatched: true
//         },
//         {
//             name: "The Prestige",
//             year: 2006,
//             Rating: 8.5,
//             Iswatched: false
//         },
//         {
//             name: "Tenet",
//             year: 2020,
//             Rating: 7.4,
//             Iswatched: false
//         },
//         {
//             name: "Interstellar",
//             year: 2014,
//             Rating: 8.6,
//             Iswatched: true
//         }
//     ];
//     const getmovies = await Movie.find(query);
//     console.log(getmovies);


// }

//update
// const Movie = mongoose.model('Movie', movieSchema);

// async function updateMovies() {
//     const data = [
//         {
//             name: "Inception",
//             year: 2010,
//             Rating: 8.8,
//             Iswatched: true
//         },
//         {
//             name: "The Matrix",
//             year: 1999,
//             Rating: 8.7,
//             Iswatched: true
//         },
//         {
//             name: "The Prestige",
//             year: 2006,
//             Rating: 8.5,
//             Iswatched: false
//         },
//         {
//             name: "Tenet",
//             year: 2020,
//             Rating: 7.4,
//             Iswatched: false
//         },
//         {
//             name: "Interstellar",
//             year: 2014,
//             Rating: 8.6,
//             Iswatched: true
//         }
//     ];
//     // const updatemovie = await Movie.updateOne({name:"Inception"},{$set:{year:2015}});
// //updatemany
//     const updatemovie = await Movie.updateMany({ _id: "688b5f19536853aad11fb4ce" }, { $set: { name: "THE MATRIX", Rating: 21}},{ runValidators: true });

        
//     const updatemovie2 = await Movie.updateMany({ Iswatched: false }, { $set: { year: 2025 } });


//     console.log(updatemovie);
//     console.log(updatemovie2);

// }

// delete one and many
const Movie = mongoose.model('Movie', movieSchema);
async function deleteMovie() {
    const data = [
        {
            name: "Inception",
            year: 2010,
            Rating: 8.8,
            Iswatched: true
        },
        {
            name: "The Matrix",
            year: 1999,
            Rating: 8.7,
            Iswatched: true
        },
        {
            name: "The Prestige",
            year: 2006,
            Rating: 8.5,
            Iswatched: false
        },
        {
            name: "Tenet",
            year: 2020,
            Rating: 7.4,
            Iswatched: false
        },
        {
            name: "Interstellar",
            year: 2014,
            Rating: 8.6,
            Iswatched: true
        }
    ];

    const deletemovie = await Movie.deleteOne({ _id: "688b5f19536853aad11fb4ce" });
    console.log(deletemovie);


    // delete many 
    // const result = await Movie.deleteMany({ Iswatched: false });
}


// find by id update and delete 
// async function getMovieById(movieId){
//     // const movie = await Movie.findById(movieId);
//     // const movie = await Movie.findByIdAndUpdate(movieId, {releaseYear: 1800}, {new: true});
//     const movie = await Movie.findByIdAndDelete(movieId);
//     console.log(movie);
//   }
  



function main() {
    // createMovie();
    // createMOVIES();

    // getMovies();
    // getMovieswithquery({year:{$gt:2015}});
    // getMovieswithquery({year:{$gte:2015}});
    // getMovieswithquery({year:{$in:[2010,2020]}});
    // getMovieswithquery({year:{$nin:[2010,2020]}}); // 20210 ko and 2020 ko chodh kar konsi movie hai voh return kardega 
    // getMovieswithquery({year:{$eq:2020}});
    // getMovieswithquery({$and:[{year:{$eq: 2014}},{Iswatched:true}]});
    // getMovieswithquery({ $or: [{ year: { $eq: 2024 } }, { Iswatched: false }] });

    // getMovieswithquery({
    //     $and: [
    //       { year: { $gte: 2018 } },
    //       { year: { $lte: 2021 } },
    //       { rating: { $gte: 7 } },
    //       { rating: { $lte: 8 } }
    //     ]
    //   });


    // getMovieswithquery ({
    //     $and:[

    //         {
    //             $and: [
    //                 { year: { $gte: 2012 } },
    //                 { year: { $lte: 2014 } }
    //             ]
    //         },
    //         {
    //             $and: [
    //                 { Rating: { $gte: 7 } },
    //                 { Rating: { $lte: 8 } }
    //             ]
    //         }
    //     ]

    // })
    //     getMovieswithquery ({
    //         $and: [
    //           { year: { $gte: 2012 } },
    //           { year: { $lte: 2014 } },
    //           { Rating: { $gte: 8 } },
    //           { Rating: { $lte: 9 } }
    //         ]
    //       });


    // updateMovies();
    deleteMovie();

}

main();























