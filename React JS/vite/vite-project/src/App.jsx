// import Add from './components/Add';
// import Header from './components/Header';
// import Greeting from './components/Greeting';
// import Footer from './components/Footer';
// import MainContent from './components/MainContent';
// import Card from './components/card';
// import WelcomeClass from './components/WelcomeClass'
// import Wish from './components/PropsName';
// import BirthdayWish from './components/BirthdayWish';
// import ProbsClass from './components/ProbsClass';
// import FoodRating from './components/FoodRating';
// import Reminder from './components/Reminder';
// import './App.css';
// function App() {
//   let marks = 75;
//   const result = marks >= 40 ? "Passed" : "Failed";
//   let company = ["Google", "Megh Rice Mills", "Amazon", "Flipkart"];
//   const data = [
//     {images: 'https://images.unsplash.com/photo-1761839257664-ecba169506c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169', title: 'School', description: 'Shopping after school'},
//     {images: 'https://images.unsplash.com/photo-1760235128025-d0631be78bce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=685', title: 'Roof', description: 'Shopping after school'},
//     {images: 'https://images.unsplash.com/photo-1755018237266-d75ba7be9ebe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735', title: 'PRoof', description: 'Shopping after school'},
//   ];
//   return(
//     <>
//     <body>
//     {company.map(()=> <h2> These are the World leaders</h2> )}     // In this we have not used key attribute so the React JS want to know that what are those elements about.
//     {company.map((item, index)=> <div key={index} >These are the World leaders: {item} </div> )} 

//     {data.map((value, index) => <div key={index}> <img src={value.images} alt={value.title}></img></div>)} 
//     <FoodRating food="Sushi" rate="Stars⭐⭐⭐⭐⭐" />
//     <Header />
//     <Reminder />
//     <Add />
//     <Card />
//     <Greeting />
//     <Footer />
//     <MainContent />
//     <WelcomeClass />
//     <BirthdayWish name="Shivam" age={20} /> 
//     <ProbsClass name="Roll No. 55 & 56" />
//     <h1 style={{color: "Red"}}>Bhanu Partap</h1>
//     <h1>John</h1>
//     <h1>{result}</h1>
//     <Wish style={{color: "blue"}} name="Bhanu Partap"/>
    
//     <Wish style={{color: "blue"}} name="Shivam"/> 
//     </body>
//     </>
    
//   )
// }


// export default App;




// import Card from './components/card.jsx';
import './App.css';
// import EventDemo from './components/EventDemo.jsx';
// import Count from './components/Count.jsx';
// import Form from './components/Form.jsx';
// import Color from './components/Color.jsx';
// import BirthdayWish from './components/BirthdayWish.jsx';
// import EventHandler from './components/EventHandler.jsx'; 
// import Timer from './components/Timer.jsx';
import Countdown from './components/ca1.jsx';
import UnControlledFn from './components/unControlledFn.jsx';
import UnControlled from './components/que1.jsx';
import FetchData from './components/FetchData.jsx';
import Fetch from './components/Fetch.jsx';
function App() {
  return (
    <div>
      <Countdown />
      <FetchData />
      <UnControlledFn />
      <UnControlled />
      <Fetch />
    </div>
  )
}

export default App;