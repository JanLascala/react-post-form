import { useState, useEffect } from 'react'


function App() {
  const [bookData, setBookdata] = useState({
    author: "",
    title: "",
    body: "",
    //public must give true || false a template or public
    public: false
  })

  //handling the data of the form
  function handleBookdata(e) {

    const { name, value, type, checked } = e.target;
    setBookdata(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

  }
  //for submit btn
  function handleSubmit(e) {
    e.preventDefault();
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
        {/* Public or not Checkbox */}
        <label>
          <input
            type="checkbox"
            name="public"
            checked={bookData.public}
            onChange={handleBookdata}
          />
          Public Post
        </label>
        <button type="submit"
          onAuxClick={handleSubmit}>Submit</button>

      </form>
    </>
  )
}

export default App
