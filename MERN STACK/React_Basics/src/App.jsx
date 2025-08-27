import './App.css'
import Button from './components/Button'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Person from './components/Person'


function App() {

    const data = [
      {
        name: "Naetik soni",
        profession: "Singer",
        address: "Noida, India",
      },
      {
        name: "Keshav Soni",
        profession: "Singer 2",
        address: "Delhi, India",
      },
      {
        name: "Ravi Verma ",
        profession: "Singer 3",
        address: "Dholera, India",
      },
    ];
  
  return (
    // <>
    //   <div>
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni velit debitis eius aliquam hic officiis temporibus totam itaque, quis atque, sit ullam quas mollitia eum iure. Tenetur vitae voluptatum quidem!
    //   </div>
    //   <div>
    //     <p>this is my new tab</p>
    //   </div>
    // </>

    <div>
      {/* <Header></Header> */}
      {/* <Header/>   both are same  */}
      {/* <Main/>
      <Footer/>
      <Button/> */}

      {/* <Person name="Naetik soni" profession="Software Developer" Address="Noida, India"/>
      <Person name="Keshav soni" profession="Lawyer" Address="Noida 62, India"/>
      <Person name="Ravi verma" profession="Advocate" Address="Noida 15, India"/> */}

      {
        data.map(Persondata => 
          <Person name={Persondata.name}
           profession={Persondata.profession} 
           Address={Persondata.address}/>)
      }
    </div>
  )
}




export default App // if u have only one fucntion to export  
// module.exports = App same as above

// export {abc, xyz} if u have multiple files to export
// module.exports = {abc, xyz} we use to do this 

// if u want to do this module.exports = function(req,res) then u can do it like this
// exports function temp() {}



// if u have exported multiple files so when u will inport it you will need to import it using destructing import {} from the path 