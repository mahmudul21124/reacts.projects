import React, { useState} from 'react'



export default function App1() {

    const [search_term, setSearchTerm] = useState();
    console.log(search_term);
    // function SearchFunc(){

    //     alert(`You are lokking for ${search_term}`);
    //}
  return (
    <>
        <form>
            <input type="text" name='search_term' value={search_term} onChange={(e) => setSearchTerm(e.target.value)} />
            <button type='button'>Search</button>
        </form>
    </>
  )
}
