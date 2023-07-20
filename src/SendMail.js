import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'
import { db } from "./firebase";
import { Timestamp } from '@firebase/firestore';
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

const SendMail = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      to: "",
      subject: "",
      message: ""
    }
  });

  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    console.log(formData);

    // Add a new document in collection "emails"
    await setDoc(doc(db, "emails", uuidv4()), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: Timestamp.fromDate(new Date())  // get firebase server timestamp
    });

    
    // db.collection("emails").add({
    //     to: formData.to,
    //     subject: formData.subject,
    //     message: formData.message,
    //     timestamp: Timestamp.fromDate(new Date())  // get firebase server timestamp
    // });

    dispatch(closeSendMessage());
  };

  return (
    <div className='sendMail'>
        <div className="sendMail__header">
            <h3>New Message</h3>
            <CloseIcon 
              onClick={() => dispatch(closeSendMessage())}
              className='sendMail__close'  
            />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
              name="to" 
              type="email" 
              placeholder='To' {...register("to", { required: true })} 
            />
            {errors.to && <span className='sendMail__error'>To is required</span>}

            <input 
              name="subject" 
              type="text" 
              placeholder='Subject' {...register("subject", { required: true })} 
            />
            {errors.subject && <span className='sendMail__error'>Subject is required</span>}

            <input 
              name="message" 
              type="text" 
              placeholder='Message...' 
              className='sendMail__message' {...register("message", { required: true })}  
            />
            {errors.message && <span className='sendMail__error'>Message is required</span>}
            
            <div className="sendMail__options">
                <Button type='submit'>Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail
