
import { useState } from 'react';
import './App.css'

function App() {
const [formDate, setformDate] = useState({
  firstName:"", lastName:"", email:"", Query:"",
  message:"", ruleAccepted: false,
  
});

  function Formonsubmit(event){
    event.preventDefault();
    console.log(formDate)
  };

  function Formonchange(event){
    const keyname = event.target.name;
    var keyvalue = event.target.value;
    const type = event.target.type;
    

    if(type == "checkbox"){
      keyvalue = event.target.checked;
    }

    setformDate({
      ...formDate,
      [keyname]: keyvalue
    })
    }
    
  
  return (
    <>
      <form id='main' onSubmit={Formonsubmit}>
        <h1>Contact Us</h1>

    <div id='first-last'>
        <div id='first'>
        <label htmlFor='firstName'>First Name</label>
        <input id='firstName' name='firstName' type="text" 
        value={formDate.firstName} onChange={Formonchange}/>
        </div>

        <div id='last'>
        <label htmlFor='lastName'>Last Name</label>
        <input id='lastName' name='lastName' type="text" 
        value={formDate.lastName} onChange={Formonchange}/>
        </div>
        </div>

        <div  id='email'>
        <label htmlFor='email'>Email Adress</label>
        <input id='email' name='email' type="email" 
        value={formDate.email} onChange={Formonchange}/>
        </div>

       
        <p id='Query'>Query Type</p>
        <div id='radidiv'>
        <div id='General'>
        <input name='Query' type="radio" 
        value="General" onChange={Formonchange}/>
        <label htmlFor="General">General Enquiry</label>
        </div>

        <div id='Support'>
        <input name='Query' type="radio" 
        value="Support" onChange={Formonchange}/>
        <label htmlFor="Support">Support Request</label>
        </div>

        </div>

        <div id='messdiv'>
        <label htmlFor='message'>Message</label>
        <textarea name='message' id='message'
        value={formDate.message} onChange={Formonchange}></textarea>
        </div>

        <div>
        <input type="checkbox" name='ruleAccepted'
        onChange={Formonchange} checked={formDate.ruleAccepted}/>
        <label htmlFor="">I consent to being contacted by the team</label>
        </div>

        <button type="submit" id='sub'
        disabled={formDate.ruleAccepted? false: true}>Submit</button>

        

      </form>
    </>
  )
}

export default App
