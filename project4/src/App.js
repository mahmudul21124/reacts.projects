import React from "react";
import { fruits } from "./Fruits";
import Button1 from "./Button1";


const items = fruits.map(fruit =>
    <li key ={fruit.id} 
    style={{color: fruit.local ? 'Green' : 'Red'}}>
        <b>Name:</b> {fruit.name} <br /> <b>Price:</b> {fruit.price}
    </li>
)

function MyButton() {
    function HandleClick(){
        alert ("You have clicked");
    }
  return <button onClick={HandleClick} className="blue">Click Here</button>;
}

const user = {
  name: "Saif Jahan",
  imgUrl: "images/image1.jpeg",
  imgSize: 100,
}

export default function App() {
  return (
    <>
      <div>Welcome to my app</div>
      <MyButton />
      <h1>{user.name}</h1>
      <img src={user.imgUrl} alt={user.name} style={{width: '150px', height: user.imgSize}} />
      <hr />
      <ul>{items}</ul>
      <Button1 /><br/><br/>
      <Button1 />

    </>
  );
}
