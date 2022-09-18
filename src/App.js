import { Col, Container, Row } from "react-bootstrap";
import {Hasil, ListCategories, NavbarComponent} from "./components";
import Jumbotron from "./components/Jumbotron";
import ProdukMakanan from "./components/ProdukMakanan";
import Video from "./components/Video";


function App() {
  return (
    <div className="App">
     <NavbarComponent/>
     {/* <div className="mt-2">
       <Container fluid>
       <Row>
       <ListCategories/>
       <Col>
         <h4>DAFTAR</h4>
         <hr/>
       </Col>
       <Hasil/>
     </Row>
       </Container>
     </div> */}
     <div>
       <Jumbotron/>
     </div>

     {/* <div className="mt-2">
       <Container fluid>
       <Row>
       <ListCategories/>
       <Col>
         <h4>DAFTAR</h4>
         <hr/>
       </Col>
       <Hasil/>
     </Row>
       </Container>
     </div> */}

     <div>
       <ProdukMakanan/>
     </div>
    </div>
  );
}

export default App;
