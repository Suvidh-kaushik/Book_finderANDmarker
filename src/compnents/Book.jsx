import React, { useEffect, useState } from 'react'


const Book = (props) => {

 const[added,setadded]=useState(true);

   const addHandler=(book)=>{
      let bookshelf = JSON.parse(localStorage.getItem('books')) || [];
        bookshelf.push(book);
        console.log(bookshelf);
        localStorage.setItem('books', JSON.stringify(bookshelf));
   }

  return (
   
    <>
    <div class=" relative w-52 h-56 rounded  border-2 border-black p-4">
      <span className="font-bold">BookTitle :</span> {props.title}
      <br/>
      <span className='font-bold'>Edititon Count</span> {props.count}
      <br/>
      <br/>
      {added?
      <button className='mt-5 mr-32 p-2 text-sm rounded-lg border-2 text-center border-solid w-36 h-fit bg-lime-600' onClick={()=>{addHandler(props)
        setadded(false);
      }}>Add to Bookshelf</button>:<></>
    }
    </div>
  
    </>
  )
}

export default Book
