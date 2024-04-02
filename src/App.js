import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./userSlice";
// import { Routes, Route } from 'react-router-dom';
// import { Register } from "./Register";
import { Login } from "./Login";
import './css/styles.css';
import Header from "./components/header";
import HomePage from './pages/homePage';
// import AboutPage from './pages/aboutPage';
// import ContactPage from './pages/contactPage';

// function App() {
//   const [currentForm, setCurrentForm] = useState('login');
//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }
//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         <Route path='/' element={<HomePage />} />
//         <Route path='about' element={<AboutPage/>} />
//         <Route path='contact' element={<ContactPage/>} />
//       </Routes>
//       {
//         currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
//       }
//     </div>
//   )
// }
// export default App;

function App() {
  const currentUser = useSelector(selectCurrentUser);
  const isLoggedIn = !!currentUser;
 
  return (
     <div className="App">
     {/* <Header /> */}
       {isLoggedIn ? (
         <HomePage /> // Render the home page content if the user is logged in
       ) : (
         <Login /> // Render the login form if the user is not logged in
       )}
     </div>
  );
 }
 
 export default App;
