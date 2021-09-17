import React, {useState} from "react";
import '../Body/Body.css';
import './Contact.css'
import {Container} from '../Globalstyles'
import {db} from './Firebase'
import { collection, addDoc } from "firebase/firestore";





const ContactPage =()=> {
   //set names
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
//set loading
  const [loader,setLoader]=useState(false);

  const handleSubmit=(e) => {
    e.preventDefault();
    setLoader(true);

    try {
      const docRef= addDoc(collection(db,"contacts"),{
        name: name,
        email: email,
         message: message,

      }).then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      }).catch((error) => {
        alert(error.message);
       setLoader(false);
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // db.collection("contacts").add({
    //     name: name,
    //     email: email,
    //     message: message,
    //   })
    //    .then(() => {
    //      setLoader(false);
    //      alert("Your message has been submitted👍");
    //    })
    // .catch((error) => {
    //      alert(error.message);
    //     setLoader(false);
    //    });

    setName("");
    setEmail("");
    setMessage("");
  };



    return(
        <div className="contact" id="#contact">

           <Container>




                <div className="ContactmePage">
                    <form className="form" onSubmit={handleSubmit}>
                        <h1> Contact Form </h1>
                        <label>Name</label>
                        <input placeholder="Name" value={name}
        onChange={(e) => setName(e.target.value)}/>
                        <label>Email</label>
                        <input placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
                        <label>Message</label>
                       <textarea placeholder="Message" value={message}
        onChange={(e) => setMessage(e.target.value)}></textarea>
                       <button
         type="submit"  
         style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}

      >
        Submit
      </button>
                    </form>

                </div>
                </Container>
                </div>
    );}
    export default ContactPage