import { useState, useEffect } from 'react'


function App() {
  const [bookData, setBookdata] = useState({
    author: "",
    title: "",
    body: "",
    //public must give true || false a template or public. Note gives on or off ?
    public: "",
  })

  //handling the data of the form
  function handleBookdata(e) {
    const key = e.target.name
    const value = e.target.value
    console.log(key, value)
    setBookdata({ ...bookData, [key]: value })

  };

  // for submit btn
  function handleSubmit(e) {
    e.preventDefault();
    console.log(bookData)
    // fetching the data to add
    fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts',
      {
        method: 'POST',
        body: JSON.stringify(bookData)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

  }


  return (
    <>
      <h1 className='text-center p-3'> Your book to add</h1>
      <form className='text-center' onSubmit={handleSubmit}>
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
        <button type="submit" >Submit</button>

      </form>
    </>
  );

}

export default App
