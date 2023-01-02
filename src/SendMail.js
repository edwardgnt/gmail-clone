import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'

const SendMail = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      to: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = data => console.log(data);
  const dispatch = useDispatch();

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
            <input type="text" placeholder='To' {...register("to", { required: true })} />
            {errors.to && <span className='sendMail__error'>This field is required</span>}
            <input type="text" placeholder='Subject' {...register("subject", { required: true })} />
            {errors.subject && <span className='sendMail__error'>This field is required</span>}
            <input type="text" placeholder='Message...' className='sendMail__message' {...register("message", { required: true })}  />
            {errors.message && <span className='sendMail__error'>This field is required</span>}
            <div className="sendMail__options">
                <Button type='submit'>Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail
