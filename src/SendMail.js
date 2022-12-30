import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'

const SendMail = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <div className='sendMail'>
        <div className="sendMail__header">
            <h3>New Message</h3>
            <CloseIcon className='sendMail__close' />
        </div>

        <form>
            <input name='to' type="text" placeholder='To' />
            <input name='subject' type="text" placeholder='Subject' />
            <input name='message' type="text" placeholder='Message...' className='sendMail__message' />

            <div className="sendMail__options">
                <Button>Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail
