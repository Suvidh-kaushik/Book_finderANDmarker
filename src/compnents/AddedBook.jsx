import React from 'react'

const AddedBook = (props) => {
  
    return (
   
        <div >
        <div class="relative w-52 h-56 rounded  border-2 border-black p-4">
          Book : {props.title}
          <br/>
          Count : {props.count}
          <br/>
          <br/>
        </div>
        </div>
  )
}

export default AddedBook
