function Form() {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title='close'>X</span>
      <form action='#'>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            data-testid='custom-element'
            value='me'
            onChange={() => {}}
          />
          <span title='title'>X</span>
          <img src='#' alt='picture' />
        </div>
        <div>
          <label htmlFor='bio'>Bio</label>
          <textarea name='bio' id='bio' placeholder='Fullname'></textarea>
        </div>
        <div>
          <label htmlFor='job-location'>Job location</label>
          <select id='job-location'>
            <option value=''>Select a country</option>
            <option value='US'>United States</option>
            <option value='GB'>United Kingdom</option>
            <option value='CA'>Canada</option>
            <option value='IN'>India</option>
            <option value='AU'>Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type='checkbox' id='terms' /> I agree to terms and conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  )
}

export default Form
