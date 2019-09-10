import React from 'react'
import {
  Button,
  Input,
  Row,
} from "reactstrap";
const ChatForm = ({ handleKeyPress, handleSendMessage, chatInputText,...props }) => {
  return (
    <Row className="justify-content-center flex-nowrap p-2">
      <Input type='text' className='form-control flex-grow-1' id='message_content' value={chatInputText ? chatInputText: ''} onChange={(e) => handleKeyPress(e.target.value)} />
      <Button className='btn btn-success ml-2 flex-grow-1' id='send_btn' onClick={(e) => handleSendMessage(e.target.value)}>Send</Button>
    </Row>
  )
}

export default ChatForm