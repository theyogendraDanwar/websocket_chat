import React, { useRef, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import {
  Container,
  Col,
  Row,
} from 'reactstrap'
import Header from '../../containers/HeaderContainer'
import ChatForm from '../ChatForm/ChatForm'

const Home = ({ input, messages, load, ...props }) => {
  useEffect(() => load(),[]);
  const ref = useRef()
  useEffect(() => {
    const { current } = ref
    if (current) {
      ref.current.scrollTop = ref.current ? ref.current.scrollHeight ? ref.current.scrollHeight : '' : ''
    }
  }, [messages])
  const handleUpdateInput = (e) => {
    props.updateInput(e)
  }
  const handleSendMessage = () => {
    props.sendMessageToSocket();
  }
  if (!props.isLoggedIn) {
    return <Redirect to="/" />
  }
  return (
    <>
      <Header />
      <Container fluid className="px-0">
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Col className='chat_messages'>
            <hr />
            <Row className="text-center justify-content-center column">
              <Col lg="11" sm="12" className="shadow-sm card bg-light">
                <h2 className="display-2 p-4 text-black">Chat with WebSocket</h2>
                <Container fluid className="mx-2">
                  <Row>
                    <div className='list-group flex-grow-1 h-200 overflow-y-scroll px-3' ref={ref}>
                      {messages.map((item, index) => {
                      let class_name = '  '
                      if (index % 2 === 0) {
                        class_name += 'alert alert-primary sender-message align-self-start'
                      }
                      else {
                        class_name += 'alert alert-warning reciever-message align-self-end'
                      }
                      return (
                        <div key={index} role="alert" className={class_name}>{item}</div>
                      )
                    }
                    )}
                    </div>
                  </Row>
                </Container>
                <ChatForm handleKeyPress={handleUpdateInput} chatInputText={input} handleSendMessage={handleSendMessage} />
              </Col>
            </Row>
          </Col>
        </section>
      </Container>
    </>
  )
}

export default Home