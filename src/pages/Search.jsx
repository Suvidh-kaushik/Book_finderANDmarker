import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Book from "../compnents/Book";
import { useDebounce } from "../hooks/useDebounce";


export const Search=()=>{
  
   const[query,setquery]=useState("");
   const[books,setbooks]=useState([]);
   const[loading,setloading]=useState(false);
   const debounce=useDebounce(query,1000);

      useEffect(()=>{

    const fetchbooks=async ()=>{
      try{
        setloading(true);
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
      const data = await response.json();
      setbooks(data.docs);
          }
          catch{
            console.log("error");
          }finally{
            setloading(false);
          }
        }
          fetchbooks();
      },[debounce]);

      return (
        <>
        <div className="relative" >
        <div className="flex justify-center pt-3 items-start">
          <h2 className="font-bold">Search by book name:</h2>
        </div>


      <div className="flex justify-center pt-4 items-start" >
      <input
                type="text"
                value={query}
                 className="border-2"
                onChange={(e)=>setquery(e.target.value)}
            />
      </div>

 <div>
  {loading?<div className="flex jusitfy-center items-center">loading ... </div>:
        <div className="grid grid-cols-4 pb-5 pt-12 pr-4 pl-4 gap-x-0 gap-y-4">
          {books.map((book)=>{
           return <Book title={book.title} count={book.edition_count}/>
          })}
        </div>
}
    </div>
        <div>
      <a href="/shelf" className="absolute top-0 right-0 mt-5 mr-32 p-2 rounded-lg border-2 text-center border-solid w-36 h-fit bg-lime-600">My Bookshelf</a>
    </div>
        </div></>
      )


}

