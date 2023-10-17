import { Row, Col } from 'react-bootstrap'
import products from '../_data/products'
import Product from '../components/Product'

import React from 'react'

const HomeScreen = () => {
  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            { products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ) )}
        </Row>
    </>
  )
}

export default HomeScreen