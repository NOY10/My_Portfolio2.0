import React, { useState } from 'react';
import './ContactF.css';
import Animatedpage from '../Animatedpage';
import Error from '../Error/Error';
import { db } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import Usepro from './Usepro';


function ContactF() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [subject,setSubject]=useState('');
  const [message,setMessage]=useState('');
  const [loader,Setloader]=useState(false);
  const [send,setSend]=useState('');

  const Send = async(e) => {
    
    e.preventDefault();
    if(name===''&&email===''&&subject===''&&message===''){
      setSend("Please fill in all required fields");
    }else{
      try{
        Setloader(true);
        setSend("Message has been send");
        await addDoc(collection(db, "contacts"),{
          name:name,
          email:email,
          subject:subject,
          message:message,
        });
        // alert("Message has been send ")
        Setloader(false);
      } catch(error) {
        alert(error.message)
        Setloader(false);
      };
      
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
   
};
  setTimeout(() => setSend(""), 5000);
  return (
    <Animatedpage>
      <div className="containerF">
        <div className='Contact'>
          <Usepro />  
       
        </div>
      <h2>CONTACT ME</h2>
       <form>
          
          <div className='anime'>
            <input 
              type='text' 
              placeholder='Name' 
              className='form-input'
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
            <span className='focus-broder'></span>
          </div>
          <div className='anime'>
            <input 
              type="email" 
              placeholder="Email" 
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            <span className='focus-broder'></span>
            
          </div>
          <div className='anime'>
            <input 
              type='text' 
              placeholder='Subject' 
              className='form-input'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              />
            <span className='focus-broder'></span>
            
          </div>
          <div className='anime'>
            <textarea 
              type='text' 
              placeholder='Message' 
              className='form-input' 
              value={message}
              style={{height:'100px'}} 
              onChange={(e) => setMessage(e.target.value)}
              />
            <span className='focus-broder'></span>
            
          </div>
        
          <div className='message_button'>
            <div className='errorM'>
                <Error message={send}/>
            </div>
            <button className="submit-button" type='submit' onClick={Send} style={{background: loader ? "#c764eb" : ""}}>Submit</button>
          </div>
        </form>
      </div>
    </Animatedpage>
  )

}

export default ContactF;
