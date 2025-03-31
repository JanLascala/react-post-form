import { useState, useEffect } from 'react'


function App() {
  const [bookData, setBookdata] = useState({
    author: "",
    title: "",
    body: "",
    //public must give true || false a template or public. Note gives on or off ?
    public: "",

  })
  const [errors, setErrors] = useState({
    author: "",
    title: "",
    body: "",
  })

  //handling the data of the form
  function handleBookdata(e) {
    const key = e.target.name
    const value = e.target.value
    console.log(key, value)
    setBookdata({ ...bookData, [key]: value })

  };

  function validate() {
    const newErrors = {};

    if (!bookData.author.trim()) {
      newErrors.author = "Author's name is required.";
    }

    if (!bookData.title.trim()) {
      newErrors.title = "Title is required.";
    }

    if (!bookData.body.trim()) {
      newErrors.body = "Body is required.";
    }

    setErrors(newErrors);

    // Return true if no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  }

  // for submit btn
  function handleSubmit(e) {
    e.preventDefault();
    console.log(bookData);

    // Perform validation
    if (!validate()) {
      console.log("Validation failed");
      return;
    }

    // Fetching the data to add
    fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
          placeholder="Author's full name"
          required
        />
        {/* title */}
        <input
          type="text"
          name="title"
          value={bookData.title}
          onChange={handleBookdata}
          placeholder="title"
          required
        />

        {/* body  */}
        <input
          type="text"
          name="body"
          value={bookData.body}
          onChange={handleBookdata}
          placeholder="Write here about your book"
          required
        />
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
        <button type="submit">Submit</button>
      </form>
    </>
  );

}

export default App
