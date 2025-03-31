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
      <h1 className="text-center p-3">Your Book to Add</h1>
      <form className="container p-4 border rounded" onSubmit={handleSubmit}>
        <div className="row">
          {/* Author */}
          <div className="col-md-6 mb-3">
            <label htmlFor="author" className="form-label">Author's Full Name</label>
            <input
              type="text"
              name="author"
              className="form-control"
              value={bookData.author}
              onChange={handleBookdata}
              placeholder="Enter author's full name"
              required
            />
          </div>

          {/* Title */}
          <div className="col-md-6 mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={bookData.title}
              onChange={handleBookdata}
              placeholder="Enter book title"
              required
            />
          </div>
        </div>

        {/* Body */}
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Description</label>
          <textarea
            id="body"
            name="body"
            className="form-control"
            value={bookData.body}
            onChange={handleBookdata}
            placeholder="Write about your book"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Public Checkbox */}
        <div className="form-check mb-3">
          <input
            type="checkbox"
            name="public"
            className="form-check-input"
            checked={bookData.public}
            onChange={handleBookdata}
          />
          <label htmlFor="public" className="form-check-label">Public Post</label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </>
  );

}

export default App
