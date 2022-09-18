import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row, Container, Image } from "react-bootstrap";
// const api = 'https://api.lemonilo.com/v1/product/recent/priority?';
const api = 'https://api.lemonilo.com/v1/product/recent/priority?';


function ProdukMakanan() {
    const [data, setData] = useState([])
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setData(response.data.data);
      } catch (error) {
        console.log('error', error)
      }
    }
    useEffect(() => {
      fetchData();
    }, [])
  
    return (
        <div>
            <Container>
            <br/>
            <h1 className='text-black'>Produk Lemoniloo</h1>
            <br/>
                <Row>
                    {data.map((d) => {
                        return (
                            <Col md={4} className='produkWrapper' id="produk" >
                                <Card className="produkImage">
                                <Image 
                                src={d.photoUrl} 
                                alt="test" className='produk'
                                />
                                <div className='bg-success'>
                                    <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>{d.Title}</Card.Title>
                                    <Card.Text className=' text-left'>
                                    {d.name}
                                    </Card.Text>
                                    <Card.Text className='text-left'>{d.price}</Card.Text>                       
                                    </div>
                                </div>                 
                                </Card>
                            </Col>
                        )
                    })}
                    
                </Row>
            </Container>
           
        </div>
      );
    }
    
    export default ProdukMakanan;