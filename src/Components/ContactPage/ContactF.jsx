import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import "./ContactF.css";
import Animatedpage from "../Animatedpage";
import Error from "../Error/Error";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import Usepro from "./Usepro";

export const ContactF = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [send, setSend] = useState("");

  //   const Send = async(e) => {

  //     e.preventDefault();
  //     if(name===''&&email===''&&subject===''&&message===''){
  //       setSend("Please fill in all required fields");
  //     }else{
  //       try{
  //         Setloader(true);
  //         setSend("Message has been send");
  //         await addDoc(collection(db, "contacts"),{
  //           name:name,
  //           email:email,
  //           subject:subject,
  //           message:message,
  //         });
  //         // alert("Message has been send ")
  //         Setloader(false);
  //       } catch(error) {
  //         alert(error.message)
  //         Setloader(false);
  //       }

  //       setName('');
  //       setEmail('');
  //       setSubject('');
  //       setMessage('');
  //     }

  // };
  //   setTimeout(() => setSend(""), 5000);

  const form = useRef();

  let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

  const sendEmail = (e) => {
    e.preventDefault();
    const isEmpty = (str) => str.trim() === "";
    if (
      isEmpty(name) ||
      isEmpty(email) ||
      isEmpty(subject) ||
      isEmpty(message)
    ) {
      setSend("Please fill in all required fields");
    } else if (!emailRegex.test(email)) {
      setSend("Error! you have entered invalid email.");
    } else {
      setLoader(true);
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_PUBLIC_KEYS,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setSend("Message has been send");
          },
          (error) => {
            console.log("FAILED...", error.text);
            setSend(`Message not send ${error.text}`);
          }
        );
      setSend("Message has been send");
      setTimeout(() => setLoader(false), 3000);
    }
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setTimeout(() => setSend(""), 5000);
  };
  return (
    <Animatedpage>
      <div className="containerF">
        <div className="Contact">
          <Usepro />
        </div>
        <h2>CONTACT ME</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="anime">
            <input
              type="text"
              placeholder="Name"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="from_name"
            />
            <span className="focus-broder"></span>
          </div>
          <div className="anime">
            <input
              type="email"
              placeholder="Email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="from_email"
            />
            <span className="focus-broder"></span>
          </div>
          <div className="anime">
            <input
              type="text"
              placeholder="Subject"
              className="form-input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              name="subject"
            />
            <span className="focus-broder"></span>
          </div>
          <div className="anime">
            <textarea
              type="text"
              placeholder="Message"
              className="form-input"
              value={message}
              style={{ height: "100px" }}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
            />
            <span className="focus-broder"></span>
          </div>

          <div className="message_button">
            <div className="errorM">
              <Error message={send} />
            </div>
            <button
              className="submit-button"
              type="submit"
              onClick={sendEmail}
              style={{ background: loader ? "#c764eb" : "" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Animatedpage>
  );
};

export default ContactF;
