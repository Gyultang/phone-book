import logo from './logo.svg';
import './App.css';
import {Container,Col,Row,Form,Button} from "react-bootstrap";
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';



// 1. 왼쪽에는 연락처 등록하는 폼이 있다.
// 2. 오른쪽에는 연락처 리스트와 검색창이 있다. 
// 3. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
// 4. 리스트에 아이템이 몇개있는지 보인다. 
// 5. 사용자가 유저를 이름검색으로 찾을수 있다.

function App() {
  return (
    <div className='main-page'>
      <h1 className='title'>Phone Book</h1>
      <Container>
       <Row>
       <Col>
          <ContactForm></ContactForm>
        </Col>
        <Col>
          <ContactList></ContactList>
        </Col>
       </Row>
      </Container>
    </div>
  );
}

export default App;
