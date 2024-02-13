import React, { useState } from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import axios from "axios";


const CreateNewMenuItem = (props) => {

  const { menuItemsEndpoint } = props

  console.log(menuItemsEndpoint)

  return (
    <Container fluid className='mt-5'>
  
      <Row className='justify-content-center text-center'>

        <h1>Add A New Menu Item</h1>

      </Row>
      
      <Row className='justify-content-center mt-5'>

        <Col md={6}>
        
          <Form>
          
          <Form.Group className="mb-3" onChange={(e) => handleChange(e)}>
          <Form.Label>Menu Item:</Form.Label>
          <Form.Control type="text" placeholder="Enter Menu Item" name='title'/>
          </Form.Group>
          
          <Form.Group className="mb-3" onChange={(e) => handleChange(e)}>
          <Form.Label>Price:</Form.Label>
          <Form.Control type="text" placeholder="Enter Price" name='price'/>
          </Form.Group>
          
          <Form.Group className="mb-3" onChange={(e) => handleChange(e)}>
          <Form.Label>Description:</Form.Label>
          <Form.Control type="text" placeholder="Enter Description" name='name'/>
          </Form.Group>
          
          <Form.Group className="mb-3" onChange={(e) => handleChange(e)}>
          <Form.Label>Restaurant:</Form.Label>
          <Form.Select>
            <option disabled>Pick A Restaurant</option>
            <option value='gustardsBistro'>Gustard's Bistro</option>
            <option value='tastingRoom'>The Tasting Room</option>
          </Form.Select>
          </Form.Group>
          
          <Form.Group className="mb-3" onChange={(e) => handleChange(e)}>
          <Form.Label>Select Allergy Warnings:</Form.Label>
          
          <Form.Check // prettier-ignore
          type='checkbox'
          id='vegetarian'
          label='Vegetarian'
          />

          <Form.Check // prettier-ignore
          type='checkbox'
          id='vegan'
          label='Vegan'
          />
          

          <Form.Check // prettier-ignore
          type='checkbox'
          id='glutenFree'
          label='Gluten Free'
          />

          <Form.Check // prettier-ignore
          type='checkbox'
          id='dairyfree'
          label='Dairy Free'
          />

          </Form.Group>
          
          <Form.Group className="mb-3" onChange={(e) => handleChange(e)}>
          <Form.Label>Product Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter product name" name='name'/>
          </Form.Group>
          
          <Form.Group className="mb-3" onChange={(e) => handleChange(e)}>
          <Form.Label>Product Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter product name" name='name'/>
          </Form.Group>

          

          </Form>

        </Col>

      </Row>
    
    </Container>
  )
}

export default CreateNewMenuItem