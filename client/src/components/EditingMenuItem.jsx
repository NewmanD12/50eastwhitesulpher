import React from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import '../Pages/Menu.css'
import './MenuItem.css'
import { useAuth } from '../Hooks/Auth';
import axios from 'axios';

const EditingMenuItem = () => {
  return (
    <Container fluid className='mt-5'>
                            <Row 
                                className='justify-content-center text-center'
                            >
                                <Col xs={6}>
                                    <Form>
                                        <Form.Group className="mb-3" onChange={(e) => handleChange(e)}>
                                        <Form.Control type="text" placeholder={item.title} name='title'/>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col xs={3} className='text-right'>
                                    <Form>
                                        <Form.Group
                                        onChange={(e) => handleChange(e)}>
                                        <Form.Control 
                                        type='text'
                                        name='price'
                                        placeholder={price}
                                        />
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>

                            <Row className='justify-content-center'>
                                <Col xs={9}>
                                    <Form>
                                        <Form.Group className="mb-3" onChange={(e) => handleChange(e)}>
                                        <Form.Control as='textarea' rows={3} placeholder={item.description} name='description'/>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>

                            <Row className='justify-content-center mx-5'>
                                <Col xs={4}>
                                    <Form.Group className="mb-3" onChange={(e) => handleAlleryWarningChange(e)}>
                                        
                                        <Form.Check // prettier-ignore
                                        type='checkbox'
                                        id='vegetarian'
                                        label='Vegetarian'
                                        name='vegetarian'
                                        />
                            
                                        <Form.Check // prettier-ignore
                                        type='checkbox'
                                        id='vegan'
                                        label='Vegan'
                                        name='vegan'
                                        />
                                        
                                    </Form.Group>
                                </Col>
                                <Col xs={4}>
                                    <Form.Group className="mb-3" onChange={(e) => handleAlleryWarningChange(e)}>
                            
                                        <Form.Check // prettier-ignore
                                        type='checkbox'
                                        id='glutenFree'
                                        label='Gluten Free'
                                        name='gluten free'
                                        />
                            
                                        <Form.Check // prettier-ignore
                                        type='checkbox'
                                        id='dairyfree'
                                        label='Dairy Free'
                                        name='dairy free'
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className='justify-content-center'>
                                <Col xs={9}>
                                    <Form.Group onChange={(e) => {
                                        setEditedMenuItem({
                                            ...editedMenuItem, 
                                            'course' : e.target.value
                                        })
                                    }}>
                                        <Form.Select name='course'>
                                        <option id='pick-course'>Pick A Course</option>
                                        <option value='saladsAndStarters'>Crafted Salads & Starters</option>
                                        <option value='sandwichesAndPies'>Sandwiches & Pies</option>
                                        <option value='sides'>Sides</option>
                                        <option value='bowls'>Bowls</option>
                                        <option value='desserts'>Desserts</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className='justify-content-center'>
                                <Col className='mt-3' xs={5}>
                                    <Form.Group>
                                    <Form.Label>Substitution</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    placeholder="Enter Substitution" name='firstSubAndUpcharge'
                                    onChange={(e) => {
                                        setFirstSubAndUpcharge({...firstSubAndUpcharge, title : e.target.value})
                                    }}
                                    />
                                    </Form.Group>
                                </Col>
                                <Col className='mt-3' xs={4}>
                                    <Form.Group>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter Price" 
                                        name='sub1-price'
                                        onChange={(e) => {
                                        setFirstSubAndUpcharge({...firstSubAndUpcharge, price : e.target.value})
                                        }}
                                    />
                                    </Form.Group>
                                </Col>
                            </Row>
          
                            {currentSubLevel >= 2 && <Row className='justify-content-center'>
                                <Col className='mt-3' xs={5}>
                                    <Form.Group>
                                        <Form.Control 
                                        type="text" 
                                        placeholder="Enter Substitution" name='secondSubAndUpcharge'
                                        onChange={(e) => {
                                        setSecondSubAndUpcharge({...secondSubAndUpcharge, title : e.target.value})
                                        }}
                                    />
                                    </Form.Group>
                                </Col>
                                <Col className='mt-3' xs={4}>
                                    <Form.Group>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter Price" 
                                        name='sub2-price'
                                        onChange={(e) => {
                                        setSecondSubAndUpcharge({...secondSubAndUpcharge, price : e.target.value})
                                        }}
                                    />
                                    </Form.Group>
                                </Col>
                            </Row>}
          
                            {currentSubLevel >= 3 && <Row className='justify-content-center'>
                            <Col className='mt-3' xs={5}>
                                <Form.Group>
                                    <Form.Control 
                                    type="text" 
                                    placeholder="Enter Substitution" name='thirdSubAndUpcharge'
                                    onChange={(e) => {
                                    setThirdSubAndUpcharge({...thirdSubAndUpcharge, title : e.target.value})
                                    }}
                                />
                                </Form.Group>
                            </Col>
                            <Col className='mt-3' xs={4}>
                                <Form.Group>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter Price" 
                                    name='sub3-price'
                                    onChange={(e) => {
                                    setThirdSubAndUpcharge({...thirdSubAndUpcharge, price : e.target.value})
                                    }}
                                />
                                </Form.Group>
                            </Col>
                            </Row>}
                        
                            {currentSubLevel >= 4 && <Row className='justify-content-center'>
                                <Col className='mt-3' xs={5}>
                                <Form.Group>
                                    <Form.Control 
                                    type="text" 
                                    placeholder="Enter Substitution" name='fourthSubAndUpcharge'
                                    onChange={(e) => {
                                        setFourthSubAndUpcharge({...fourthSubAndUpcharge, title : e.target.value})
                                    }}
                                    />
                                </Form.Group>
                                </Col>
                                <Col className='mt-3' xs={4}>
                                <Form.Group>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter Price" 
                                    name='sub4-price'
                                    onChange={(e) => {
                                    setFourthSubAndUpcharge({...fourthSubAndUpcharge, price : e.target.value})
                                    }}
                                />
                                </Form.Group>
                                </Col>
                            </Row>}
          
                            {currentSubLevel >= 5 && <Row className='justify-content-center'>
                                <Col className='mt-3' xs={5}>
                                    <Form.Group>
                                        <Form.Control 
                                        type="text" 
                                        placeholder="Enter Substitution" name='fifthSubAndUpcharge'
                                        onChange={(e) => {
                                            setFifthSubAndUpcharge({...fifthSubAndUpcharge, title : e.target.value})
                                        }}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col className='mt-3' xs={4}>
                                    <Form.Group>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter Price" 
                                        name='sub5-price'
                                        onChange={(e) => {
                                        setFifthSubAndUpcharge({...fifthSubAndUpcharge, price : e.target.value})
                                        }}
                                    />
                                    </Form.Group>
                                </Col>
                            </Row>}
        
                            {currentSubLevel <= 4 && <Row className='justify-content-end m-3' xs={2}>
                            <Col xs={2}>
                                <p onClick={() => {
                                setCurrentSubLevel(currentSubLevel + 1)
                                }}>+Add Another</p>
                            </Col>
                            </Row>}

                            <Row className='justify-content-center text-center'>
                                <Col xs={4}>
                                    <Button
                                        variant='success'
                                        onClick={(e) => {
                                            e.preventDefault()
                                            submitEdit(e)}
                                        }
                                    >Save</Button>
                                </Col>
                                <Col xs={4}>
                                    <Button
                                        variant='danger'
                                        onClick={(e) => {
                                            setEditedMenuItem({})
                                            setAllergyWarnings([])
                                            setFirstSubAndUpcharge({})
                                            setSecondSubAndUpcharge({})
                                            setThirdSubAndUpcharge({})
                                            setFourthSubAndUpcharge({})
                                            setFifthSubAndUpcharge({})
                                            setIsEditing(false)
                                        }}
                                    >Cancel</Button>
                                </Col>
                            </Row>
                        </Container>
  )
}

export default EditingMenuItem