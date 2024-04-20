import React from 'react'
import Button from "react-bootstrap/Button";

function Searchbar() {
  return (
    <>
        <div className='w-75 mx-auto gap-2 d-flex flex-column mt-5'>
          <input type='text' className='p-1' ></input>
          <button type="button" className="submit-btn btn btn-light d-flex justify-content-center border-dark">submit</button>
        </div>
    </>
  )
}

export default Searchbar