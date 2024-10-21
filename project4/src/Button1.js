import React, {useState} from 'react'

    

export default function Button1() {
    const [count, setCount] = useState(0);

    function HandleClick(){
        setCount(count + 1);
    }
  return (
    <>
    <button onClick={HandleClick}>Click Here</button><br/><br/>
    You have clicked {count} times.
    </>
  )
}
