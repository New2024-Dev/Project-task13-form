
import './App.css'

function App() {
  
  return (
    <>
      <div id='main'>
        <h1>Contact Us</h1>
        <label>First Name</label>
        <input type="text" />
        <label>Last Name</label>
        <input type="text" />
        <p>Email Adress</p>
        <input type="text" />
        <p>Query Type</p>
        <input type="checkbox" />
        <label htmlFor="">General Enquiry</label>
        <input type="checkbox" />
        <label htmlFor="">Support Request</label>
        <p>Message</p>
        <textarea></textarea>
        <div>
        <input type="checkbox" />
        <label htmlFor="">I consent to being contacted by the team</label>
        </div>
        <button>Submit</button>

        

      </div>
    </>
  )
}

export default App
