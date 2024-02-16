import React, { useState } from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import axios, { all } from "axios";
import './CreateNewMenuItem.css'


const CreateNewMenuItem = (props) => {

  const { menuItemsEndpoint } = props
  const [currentSubLevel, setCurrentSubLevel] = useState(1)

  const [newMenuItem, setNewMenuItem] = useState({})
  const [allergyWarnings, setAllergyWarnings] = useState([])
  const [mealPeriodAndPrices, setMealPeriodAndPrices] = useState([])
  const [primaryMealPeriodAndPrice, setPrimaryMealPeriodAndPrice] = useState({})
  const [secondaryMealPeriod, setSecondaryMealPeriod] = useState({})

  const submitMenuItem = () => {
    console.log(primaryMealPeriodAndPrice)
    console.log(secondaryMealPeriod)
  }

  const handleChange = (e) => {
    setNewMenuItem({
        ...newMenuItem,
        [e.target.name]: e.target.value
    })
  }

  const handleAlleryWarningChange = (e) => {

    if(allergyWarnings.includes(e.target.name)){

      const index = allergyWarnings.indexOf(e.target.name)
      let newAllergyWarnings = []

      if(index === 0){
        newAllergyWarnings = allergyWarnings.slice(1)
        setAllergyWarnings(newAllergyWarnings)
      }
      else if(index === allergyWarnings.length - 1){
        newAllergyWarnings = allergyWarnings.slice(0, index)
        setAllergyWarnings(newAllergyWarnings)
      }
      else{
        const beginning = allergyWarnings.slice(0, index)
        const ending = allergyWarnings.slice(index + 1)
        setAllergyWarnings(beginning.concat(ending))
      }
    }
    else {
      setAllergyWarnings([
        ...allergyWarnings, e.target.name
      ])
    }
  }

  const handleMealPeriodAndPriceChange = (e) => {
    if(e.target.value === 'lunch' || e.target.value === 'dinner'){
      setPrimaryMealPeriodAndPrice({...primaryMealPeriodAndPrice, title : e.target.value})
    }
    else{
      setPrimaryMealPeriodAndPrice({...primaryMealPeriodAndPrice, price : e.target.value})
    }
  }

  const handleSecondaryMealPeriod = (e) => {
    console.log(e.target.value)
    if(e.target.value === 'lunch' || e.target.value === 'dinner'){
      setSecondaryMealPeriod({...secondaryMealPeriod, title : e.target.value})
    }
    else{
      setSecondaryMealPeriod({...secondaryMealPeriod, price : e.target.value})
    }
  }

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
          <Form.Label>Description:</Form.Label>
          <Form.Control type="text" placeholder="Enter Description" name='description'/>
          </Form.Group>
          
          <Form.Group className="mb-3" onChange={(e) => {
              const pickRest = document.getElementById('pick-rest')
              pickRest.disabled = true
              handleChange(e)
            }}>
          <Form.Label>Restaurant:</Form.Label>
          <Form.Select name='restaurant'>
            <option id='pick-rest'>Pick A Restaurant</option>
            <option value='gustardsBistro'>Gustard's Bistro</option>
            <option value='tastingRoom'>The Tasting Room</option>
          </Form.Select>
          </Form.Group>
          
          <Form.Group className="mb-3" onChange={(e) => handleAlleryWarningChange(e)}>
            <Form.Label>Select Allergy Warnings:</Form.Label>
            
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
          
          <Row>
            <Col className='mt-3' md={6}>
              <Form.Group onChange={(e) => {
                const pickMeal = document.getElementById('pick-meal')
                pickMeal.disabled = true
              }}>
              <Form.Label>Meal Period</Form.Label>
              <Form.Select name='mealPeriodAndPrice'  onChange={(e) => {
                handleMealPeriodAndPriceChange(e)
              }}>
              
                  <option id='pick-meal'>Meal</option>
                  <option value='lunch'>Lunch</option>
                  <option value='dinner'>Dinner</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col className='mt-3'>
              <Form.Group onChange={(e) => {
                handleMealPeriodAndPriceChange(e)
              }}>
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Enter Price" name='price'/>
              </Form.Group>
            </Col>
          </Row>

          <Row id='additional-meal-period'>
            <Col className='mt-3' md={6}>
              <Form.Group>
                <Form.Select onChange={(e) => {
                  handleSecondaryMealPeriod(e)
                }}>
                  <option id='pick-meal'>Meal</option>
                  <option value='lunch'>Lunch</option>
                  <option value='dinner'>Dinner</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col className='mt-3'>
              <Form.Group onChange={(e) => {
                handleSecondaryMealPeriod(e)
              }}>
              <Form.Control type="text" placeholder="Enter Price" name='price'/>
              </Form.Group>
            </Col>
          </Row>

          <Row className='justify-content-end mt-3'>
            <Col xs={2}>
              <p onClick={() => {
                const additionalMealPeriod = document.getElementById('additional-meal-period')

                const thisButton = document.getElementById('add-button')

                const cancelButton = document.getElementById('cancel-button')

                additionalMealPeriod.style.display = 'flex'
                thisButton.style.display = 'none'
                cancelButton.style.display = 'flex'
              }}
              id='add-button'
              >+Add Another</p>
              <p onClick={() => {
                const additionalMealPeriod = document.getElementById('additional-meal-period')

                const addButton = document.getElementById('add-button')

                const thisButton = document.getElementById('cancel-button')

                additionalMealPeriod.style.display = 'none'
                thisButton.style.display = 'none'
                addButton.style.display = 'flex'

              }}
              id='cancel-button'
              >Cancel</p>
            </Col>
          </Row>
          
          <Row>
            <Col className='mt-3' md={6}>
              <Form.Group>
                <Form.Label>Subs And Upcharges</Form.Label>
                <Form.Control type="text" placeholder="Enter Substitution" name=''/>
              </Form.Group>
            </Col>
            <Col className='mt-3'>
              <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Enter Price" name='sub1-price'/>
              </Form.Group>
            </Col>
          </Row>
          
          {currentSubLevel >= 2 && <Row>
            <Col className='mt-3' md={6}>
              <Form.Group>
                <Form.Control type="text" placeholder="Enter Substitution" name=''/>
              </Form.Group>
            </Col>
            <Col className='mt-3'>
              <Form.Group>
              <Form.Control type="text" placeholder="Enter Price" name='sub1-price'/>
              </Form.Group>
            </Col>
          </Row>}
          
          {currentSubLevel >= 3 && <Row>
            <Col className='mt-3' md={6}>
              <Form.Group>
                <Form.Control type="text" placeholder="Enter Substitution" name=''/>
              </Form.Group>
            </Col>
            <Col className='mt-3'>
              <Form.Group>
              <Form.Control type="text" placeholder="Enter Price" name='sub1-price'/>
              </Form.Group>
            </Col>
          </Row>}
          
          {currentSubLevel >= 4 && <Row>
            <Col className='mt-3' md={6}>
              <Form.Group>
                <Form.Control type="text" placeholder="Enter Substitution" name=''/>
              </Form.Group>
            </Col>
            <Col className='mt-3'>
              <Form.Group>
              <Form.Control type="text" placeholder="Enter Price" name='sub1-price'/>
              </Form.Group>
            </Col>
          </Row>}
          
          {currentSubLevel >= 5 && <Row>
            <Col className='mt-3' md={6}>
              <Form.Group>
                <Form.Control type="text" placeholder="Enter Substitution" name=''/>
              </Form.Group>
            </Col>
            <Col className='mt-3'>
              <Form.Group>
              <Form.Control type="text" placeholder="Enter Price" name='sub1-price'/>
              </Form.Group>
            </Col>
          </Row>}
          


          {currentSubLevel <= 4 && <Row className='justify-content-end mt-3'>
          <Col xs={2}>
            <p onClick={() => {
              setCurrentSubLevel(currentSubLevel + 1)
            }}>+Add Another</p>
          </Col>
          </Row>}


          <Row className='justify-content-center my-5'>
            <Col className='text-center' sm={6}>
              <Button onClick={(e) => {
                e.preventDefault()
                submitMenuItem()
              }}>Submit</Button>
            </Col>
          </Row>

          </Form>

        </Col>

      </Row>
    
    </Container>
  )
}

export default CreateNewMenuItem