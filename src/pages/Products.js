import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Products = ({history}) => {
    return (
        <div>
            <h2>This is the products page</h2>
            <div className="cards">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/a/e/daedbc7758_50170718_2-lenovo-legion-y540-15irh.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="primary">
                        <Link className="link" to="/products/Pc">View laptop gamer</Link>
                    </Button>
                </Card.Body>
                </Card>
                
            </div>
            <Button onClick={() => history.goBack()} > go back </Button>
        </div>
    )
}

export default Products
