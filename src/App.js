import React from 'react';
// import logo from './logo.svg';
// import './styles/App.css'
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import EmployeeCard from "../src/components/EmployeeCard/EmployeeCard";

function App() {
  return (
   <div className="App">
     <Wrapper>
       <Header/>
       <EmployeeCard/>
       </Wrapper>
   </div>
  );
}

export default App;
