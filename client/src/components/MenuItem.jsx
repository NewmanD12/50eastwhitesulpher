import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Pages/Menu.css'
import Button from 'react-bootstrap/Button'
import './MenuItem.css'
import { useAuth } from '../Hooks/Auth';
import axios from 'axios';



const MenuItem = (props) => {

    const { item, currentMenu, menuItemsEndpoint } = props
    const auth = useAuth();


    const [isEditing, setIsEditing] = useState(false)

    const mealPeriodAndPrices = item.mealPeriodAndPrices
    const menuPriceFound = mealPeriodAndPrices.filter((item) => {
        return item.mealPeriod === currentMenu
    })

    const price = menuPriceFound[0].price

    const subs = item.subsAndUpcharges.filter((sub) => {
        return sub.title
    })

    const convertSubs = (listOfSubs) => {
        const lengthOfSubs = listOfSubs.length

        let finalSubsAndPrices = ''

        if(lengthOfSubs === 1){
            finalSubsAndPrices = `${listOfSubs[0].title}}`
        }
        else if(lengthOfSubs === 2){
            finalSubsAndPrices = `${listOfSubs[0].title} ${listOfSubs[0].price ? `$${listOfSubs[0].price}` : '' } | ${listOfSubs[1].title} ${listOfSubs[1].price ? `$${listOfSubs[1].price}` : '' }`
        }
        else if(lengthOfSubs === 3){
            finalSubsAndPrices = `${listOfSubs[0].title} ${listOfSubs[0].price ? `$${listOfSubs[0].price}` : '' } | ${listOfSubs[1].title} ${listOfSubs[1].price ? `$${listOfSubs[1].price}` : '' } | ${listOfSubs[2].title} ${listOfSubs[2].price ? `$${listOfSubs[2].price}` : '' }`
        }
        else if(lengthOfSubs === 4){
            finalSubsAndPrices = `${listOfSubs[0].title} ${listOfSubs[0].price ? `$${listOfSubs[0].price}` : '' } | ${listOfSubs[1].title} ${listOfSubs[1].price ? `$${listOfSubs[1].price}` : '' } | ${listOfSubs[2].title} ${listOfSubs[2].price ? `$${listOfSubs[2].price}` : '' } | ${listOfSubs[3].title} ${listOfSubs[3].price ? `$${listOfSubs[3].price}` : '' }`
        }
        else if(lengthOfSubs === 5){
            finalSubsAndPrices = `${listOfSubs[0].title} ${listOfSubs[0].price ? `$${listOfSubs[0].price}` : '' } | ${listOfSubs[1].title} ${listOfSubs[1].price ? `$${listOfSubs[1].price}` : '' } | ${listOfSubs[2].title} ${listOfSubs[2].price ? `$${listOfSubs[2].price}` : '' } | ${listOfSubs[3].title} ${listOfSubs[3].price ? `$${listOfSubs[3].price}` : '' } | ${listOfSubs[4].title} ${listOfSubs[4].price ? `$${listOfSubs[4].price}` : '' }`
        }

        return finalSubsAndPrices
    }

    const handleEdit = (menuItemId) => {
        console.log(menuItemId)
    }

    const handleDelete = (menuItemId) => {
        console.log(menuItemId)
        axios.delete(`${menuItemsEndpoint}/delete-menu-item/${menuItemId}`)
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
                .finally(() => {
                    window.location.reload(false)
                })
    }

    if(subs.length > 0){
        convertSubs(subs)
    }


    // console.log(item._id)

    return (

        

        <Container fluid 
            id='individual-menu-items'
            onMouseEnter={(e) => {
                const editCol = document.getElementById(`${item._id}-edit-col`)
                const deleteCol = document.getElementById(`${item._id}-delete-col`)
                
                editCol.style.display = 'flex'
                deleteCol.style.display = 'flex'
            }}
            onMouseLeave={(e) => {
                const editCol = document.getElementById(`${item._id}-edit-col`)
                const deleteCol = document.getElementById(`${item._id}-delete-col`)
                
                editCol.style.display = 'none'
                deleteCol.style.display = 'none'
            }}
        >
            {auth.userToken && <Row 
                                    className='edit-row justify-content-end' 
                                    id={`${item._id}-edit-row`}
                                >
                                    <Col sm={2} className='button-cols' id={`${item._id}-edit-col`}>
                                        <Button 
                                            variant='warning'
                                            onClick={() => {
                                                handleEdit(item._id)
                                            }}    
                                        >Edit</Button>
                                    </Col>
                                    <Col sm={2} className='button-cols' id={`${item._id}-delete-col`}>
                                        <Button 
                                            variant='danger'
                                            onClick={() => {
                                                handleDelete(item._id)
                                            }}    
                                        >Delete</Button>
                                    </Col>
                                </Row>
            }
            
            <Row className='justify-content-center'>
                <Col id='menu-item-title' xs={8}>{item.title}</Col>
                <Col id='menu-item-price'>${price}</Col>
            </Row>
            <Row>
                <Col>
                    <p id='menu-item-desc'>{item.description}</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col>
                    <p className='subs'>{convertSubs(subs)}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default MenuItem