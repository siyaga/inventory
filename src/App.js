
import './App.css';
import { useState, useEffect } from 'react';
import DatePickers from './components/DatePickers';
import GoogleMaps from './components/GoogleMaps';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Row, Col, Button, Card} from 'react-bootstrap';

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [brand, setBrand] = useState([]);
  const [paperType, setPaperType] = useState("");
  const [colorType, setColorType] = useState("");
  const [paperSize, setPaperSize] = useState("");
  const [thickness, setThickness] = useState("");

  useEffect(()=> {
    console.log(brand);
  
   },[brand])
  

 useEffect(()=> {
  console.log(paperType);

 },[paperType])

 useEffect(()=> {
  console.log(colorType);

 },[colorType])

 useEffect(()=> {
  console.log(thickness);

 },[thickness])

 useEffect(()=> {
  console.log(paperSize);

 },[paperSize])

 const handleDateChange = (event)=> {
  setStartDate(Date.now());
 }
 console.log(startDate)
  return (
    <div className="App">
    <div className='contai'>
      <div className='wrapper left'>
      <div className="form">
        <Form>
      <Container>
        <Row className='insert-date' >
          <Col className="text-title">折込希望日  :</Col>
          <Col ><DatePickers 
            value={Date.now()}
            onChange={(event) => handleDateChange(event)}
          /></Col>
        </Row>
        <Row className='insert-date'>
          <Col sm={5} className="text-title">朝日新聞  :</Col>
          <Col>
         {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="朝日新聞"
            name="Asahi News Paper"
            type={type}
            id={`inline-${type}-1`}
            className="text-checkbox"
          />
          <Form.Check
            inline
            label="読売新聞"
            name="Yomiuri News Paper"
            type={type}
            id={`inline-${type}-2`}
            value=""
            className="text-checkbox"
          />
          <Form.Check
            inline
            label="産経新聞"
            name="Sankei News Paper"
            type={type}
            id={`inline-${type}-3`}
            className="text-checkbox"
          />
            <Form.Check
            inline
            label="毎日新聞"
            name="Mainichi News Paper"
            type={type}
            id={`inline-${type}-4`}
            className="text-checkbox"
          />

              <Form.Check
            inline
            label="日経新聞"
            name="Nikkei News Papper"
            type={type}
            id={`inline-${type}-5`}
            className="text-checkbox"
          />
            <Form.Check
            inline
            label="東京新聞"
            name="Tokyo News Papper"
            type={type}
            id={`inline-${type}-6`}
            className="text-checkbox"
          />
        </div>
        
      ))}
      </Col>
        </Row>
        <Row className={"select-edit"} >
          <Col className="text-title" >用紙サイズ :</Col>
          <Col sm={7}>
          <Form.Select value={paperType} size="sm" aria-label="Default select example" onChange={(event)=>setPaperSize(event.target.value)}>
      <option className='text-default' value="A4">A4</option>
      <option value="B4">B4</option>
      <option value="A3">A3</option>
      <option value="B3">B3</option>
      
    </Form.Select>
          </Col>
        </Row>
        <Row className={"select-edit"}>
          <Col className="text-title" >カラー選択  :</Col>
          <Col sm={7}>
          <Form.Select size="sm" aria-label="Default select example" onChange={(event)=>setColorType(event.target.value)}>
      <option className='text-default' value="one_side_colored">one_side_colored</option>
      <option value="one_side_mono">one_side_mono</option>
      <option value="both_side_colored">both_side_colored</option>
      <option value="colored_and_mono">colored_and_mono</option>
    </Form.Select>
          </Col>
        </Row>
        <Row className={"select-edit"}>
          <Col className="text-title" >用紙の種類 :</Col>
          <Col sm={7}>
          <Form.Select size="sm" aria-label="Default select example"  onChange={(event)=>setThickness(event.target.value)}>
      <option  value="70kg">70kg</option>
      <option className='text-default' value="90kg">90kg</option>
      <option value="110kg">110kg</option>
    </Form.Select>
          </Col>
        </Row>
        <Row className={"select-edit"}>
          <Col className="text-title" >用紙の厚さ :</Col>
          <Col sm={7}>
          <Form.Select size="sm" aria-label="Default select example" onChange={(event)=>setPaperType(event.target.value)}>
      <option className='text-default' value="coat ">coat </option>
      <option value="mat">mat</option>
      <option value="paper_type_normal">paper_type_normal</option>
    </Form.Select>
          </Col>
        </Row>
      </Container>
      </Form>
      <div className='text-input'></div>
      <div className="input-text">
      </div>
      </div>  
      </div>
      <div className='wrapper right'>
    <GoogleMaps/>
    <Card className='price-all' style={{ width: '18rem' }}>
      <Card.Body>
        <Container>
          <Row>
            <Col sm={5} className="text-title-price">
            Insert Date
            </Col >
            <Col className='text-end' style={{ fontWeight:'bold', fontSize:"15px" }}> January 20, 2023</Col>
          </Row>
          <Row className={"select-edit"}>
            <Col sm={5} className="text-title-price" >
            Quantity
            </Col>
            <Col className='text-end' style={{ fontWeight:'bold', fontSize:"15px" }}>50,300 Copies</Col>
          </Row>
          <Row className={"select-edit"}>
            <Col sm={5} className="text-title-price">
            Unit Price
            </Col>
            <Col className='text-end' style={{ fontWeight:'bold' }}>1copy@5.92JPY</Col>
          </Row>
          <Row className={"select-edit"}>
            <Col sm={5} className="text-title-price">
            Total Price
            </Col>
            <Col className='text-end' style={{ fontWeight:'bold', fontSize:"25px" }}>297,776</Col>
          </Row>
          <Row className={"select-edit"}>
            <Col className='text-end' style={{ fontSize:"12px" }}>
            (Include tax 327,554)</Col>
          </Row>
          
        </Container>
        <div className='d-grid gap-2'>
        <Button variant="primary"  size="lg">Put to Cart</Button>
        </div>
      </Card.Body>
    </Card>
      </div>
      
    </div>
    </div>
    
  );
}

export default App;
