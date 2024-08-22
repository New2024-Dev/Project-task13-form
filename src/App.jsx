
import { useState } from 'react';
import './App.css'
import * as yup from "yup"

function App() {
const [formDate, setformDate] = useState({
  firstName:"", lastName:"", email:"", Query:"",
  message:"", ruleAccepted: false,
  
});

const [errorsObject, seterrorsObject] = useState({})

const userSchema = yup.object().shape({
  firstName: yup.string().required("This field is required"), 
  lastName: yup.string().required("This field is required"), 
  email:yup.string().email('please enter a valid email address'), 
  Query: yup.string().oneOf(["General", "Support"], "Please select a query type"),
  message:yup.string().required("This field is required"),
  ruleAccepted: yup.boolean().oneOf([true], "To submit this form, please consent to being contacted"),
})

async function testvalidation() {
  try {
    const response = await userSchema.validate(formDate, {
      abortEarly: false,
    });
    console.log(response, "Is valid Object");
    alert("Message sent\nThanks for completing the form we'll be in touch soon!");
  } catch (err) {
    var errors = {};
    err.inner.forEach((error) => {
      console.log(`${error.path} : ${error.message}`);
      errors[error.path] = error.message;
    });
    seterrorsObject(errors);
    console.log(errors)
  }
}

  function Formonsubmit(event){
    testvalidation();
    event.preventDefault();
    
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
        <label htmlFor='firstName'>First Name *</label>
        <input id='firstName' name='firstName' type="text" 
        value={formDate.firstName} onChange={Formonchange}
        className={errorsObject.firstName ? 'inputerror' : ''}/>
        {errorsObject.firstName ? <label className='errormessg'>{errorsObject.firstName}</label> : null}
        </div>

        <div id='last'>
        <label htmlFor='lastName'>Last Name *</label>
        <input id='lastName' name='lastName' type="text" 
        value={formDate.lastName} onChange={Formonchange}
        className={errorsObject.lastName ? 'inputerror' : ''}/>
        {errorsObject.lastName ? <label className='errormessg'>{errorsObject.lastName}</label> : null}
        </div>
        </div>
        

        <div  id='email'>
        <label htmlFor='email'>Email Adress *</label>
        <input id='email' name='email'  
        value={formDate.email} onChange={Formonchange} 
        className={errorsObject.email ? 'inputerror' : ''}/>
        {errorsObject.email ? <label className='errormessg'>{errorsObject.email}</label> : null}
        </div>

       
        <p id='Query'>Query Type *</p>
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
        {errorsObject.Query ? <label className='errormessg'>{errorsObject.Query}</label> : null}

        <div id='messdiv'>
        <label htmlFor='message'>Message *</label>
        <textarea name='message' id='message'
        value={formDate.message} onChange={Formonchange}
        className={errorsObject.message ? 'inputerror' : ''}></textarea>
        {errorsObject.message ? <label className='errormessg'>{errorsObject.message}</label> : null}
        </div>

        <div>
        <input type="checkbox" name='ruleAccepted'
        onChange={Formonchange} checked={formDate.ruleAccepted}/>
        <label htmlFor="">I consent to being contacted by the team *</label>
        </div>
        {errorsObject.ruleAccepted ? <label className='errormessg'>{errorsObject.ruleAccepted}</label> : null}

        <button type="submit" id='sub'
        >Submit</button>

        

      </form>
    </>
  )
}

export default App
