import React, { useEffect, useState } from 'react'
import Book from '../compnents/Book';
import AddedBook from '../compnents/AddedBook';

const Bookshelf = () => {
 
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('books')) || [];
    setBookshelf(storedBookshelf);
    return ()=>{
      setBookshelf([]);
    }
  }, []);


  return (
    <>
    <div className='flex text-xl font-bold justify-center pt-3 items-start'>MY BOOKSHELF</div>
    <div  className='grid grid-cols-4  pt-12 pr-6 pl-4 ml-5 mr-5 gap-x-0 gap-y-4 justify-center'>
     {bookshelf.map((book)=>{
      return <AddedBook title={book.title} count={book.count}/>
     })}
    </div>
    </>
  )
}

export default Bookshelf
