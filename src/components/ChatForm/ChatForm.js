import React from 'react'
import {
  Button,
  Input,
  Form
} from "reactstrap";
const ChatForm = ({ handleKeyPress, handleSendMessage, chatInputText,...props }) => {
  return (
    <Form className="justify-content-center flex-nowrap p-2 d-flex" onSubmit={handleSendMessage}>
      <Input type='text' className='form-control flex-grow-1' id='message_content' value={chatInputText ? chatInputText: ''} onChange={(e) => handleKeyPress(e.target.value)} />
      <Button type="submit" className='btn btn-success ml-2 flex-grow-1' id='send_btn'>Send</Button>
    </Form>
  )
}

export default ChatForm