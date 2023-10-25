// ya no necesitamos los hooks gracias a redux : import { useEffect, useState } from 'react'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
//import products from '../_data/products'
import Product from '../components/Product'
import Loader from '../components/Loader'
//ya no necesitamos axios gracias al fetch de api slice : import axios from 'axios'
import Message from '../components/Message'

import { useGetProductsQuery } from '../_redux/slices/productApiSlice'

const HomeScreen = () => {

  //ya no necesitamos estado de componente gracias a redux const [products, setProducts] = useState([])  

  const {data: products , isLoading , error } = useGetProductsQuery()
  return (
    <>
    {isLoading ? (
            <Loader />
    ) : error ? ( <div>
            <Message variant='danger'>{error?.data?.message || error.error }</Message>
    </div>) : (
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


    )}
        
    </>
  )
}

export default HomeScreen