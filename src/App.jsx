import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import ButtonModules from "./Button/ButtonModules";
import ButtonExternal from "./ButtonExternal";
import ButtonInline from "./ButtonInline";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import Button from "./Button";
import ProfilePicture from "./ProfilePicture";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import OnChange from "./OnChange";
import ColorPicker from "./ColorPicker";
import UpdateObject from "./UpdateObject";
import UpdateArray from "./UpdateArray";
import UpdateArrayObject from "./UpdateArrayObject";
import ToDoList from "./ToDoList";
import UseEffect from "./HookUseEffect"
import EventListeners from "./EventListeners";
import DigitalClock from "./DigitalClock";
import ComponentA from "./ComponentA";
import HookRef from "./HookRef";
import StopWatch from "./StopWatch";


function App() {

  const fruits = [
    {id:"1", name:"Apple", calories: 95},
    {id:"2", name:"Orange", calories: 100},
    {id:"3", name:"Banana", calories:105},
    {id:"4", name:"Coconut",calories:159 },
    {id:"5", name:"Pineapple", calories:37}
  ]

  const vegetables = [
    {id:"6", name:"Potatoes", calories: 110},
    {id:"7", name:"Celery", calories: 15},
    {id:"8", name:"Carrots", calories: 25},
    {id:"9", name:"Corn", calories: 63 },
    {id:"10", name:"Broccoli", calories: 50}
  ]

  return (
    <>

    <StopWatch/>
    {/* <HookRef />
    <ComponentA /> */}

    {/* <DigitalClock/> */}





















    

    {/* <EventListeners />


    <UseEffect />
    <ToDoList/>

    <UpdateArrayObject />
    <UpdateArray />
    <UpdateObject /> 
    <ColorPicker />   
     {fruits.length>0 && <List items = {fruits} cetagories = "Fruits" />} 
     {vegetables.length>0 && <List items = {vegetables} cetagories = "Vegetables" />}
     <OnChange />
    <Counter />
    <MyComponent />
     <Button />
     <ProfilePicture />
      <Header/>
      <UserGreeting isLoggin = {true} name = "Saif"/>
      <UserGreeting isLoggin = {true}/>
      <Student name = "Saif" age = {23} isStudent = {true} />
      <Student name = "Enam" age = {22} isStudent = {true} />
      <Student name = "Arman" age = {21} isStudent = {true} />
      <Student name = "Sohan" age = {18} isStudent = {true} />
      <Student name="ksi"/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Food/>

      <Footer/>
      <ButtonModules />
      <ButtonExternal/>
      <ButtonInline/> */}
    </>
  )
}

export default App
