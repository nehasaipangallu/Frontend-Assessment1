import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ModalService from '../services/ModalService';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Switch from '@mui/material/Switch';
import Card from 'react-bootstrap/Card';

export default function ModalPop() {
  const [show, setShow] = useState(false);
 const [modal, setModal] = useState({})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  useEffect(() => {
    ModalService.on('open', ({ component, props }) => {
     
      console.log(props, component);
      setShow(true);
      setModal({
        props,
        component,
        close: (value) => {
          setModal({});
        },
        });
       });
  }, []
  );
  
  function hidePopup() {
    setShow(false);
  }
  return (
    <>
   

      <Modal show={show} onHide={hidePopup} className='modal-background'>
        <Modal.Header closeButton>
          <Modal.Title>Create Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image Link</Form.Label>
              <Form.Control
                type=""
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Row>
              <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type=""
                placeholder=""
                autoFocus
              />
            </Form.Group>
              </Col>
             
              <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type=""
                placeholder=""
                autoFocus
              />
            </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Verification</Form.Label>
           
                <Card>
      <Card.Body> <Switch {...label} defaultChecked /></Card.Body>
    </Card>
                
             
              
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

