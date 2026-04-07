import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
import Container from 'react-bootstrap/Container';
import { cuurentUser } from "./actions/UserActions";
import { asyncLoadProduct } from "./actions/ProductActions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cuurentUser());
    dispatch(asyncLoadProduct());
  }, []);
  
  return (
   <Container fluid>
    <Nav/>
      <Mainroutes />
   </Container>
  );
}

export default App;
