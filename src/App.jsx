import { useState, useEffect } from 'react'


function App() {
  const [bookData, setBookdata] = useState({
    author: "",
    title: "",
    body: "",
    //public must give true || false a template or public
    public: ""
  })

  function handleBookdata(e) {
    setBookdata(e.target.value)

  }

  return (
    <>
      <h1 className='text-center p-3'> Your book to add</h1>
      <form className='text-center'>
        {/* author */}
        <input
          type="text"
          name="author"
          value={bookData.author}
          onChange={handleBookdata}
          placeholder="Author's full name" />
        {/* title */}
        <input
          type="text"
          name="title"
          value={bookData.title}
          onChange={handleBookdata}
          placeholder="title" />
        {/* body  */}
        <input
          type="text"
          name="body"
          value={bookData.body}
          onChange={handleBookdata}
          placeholder="Write here about your book" />


      </form>
    </>
  )
}

export default App
