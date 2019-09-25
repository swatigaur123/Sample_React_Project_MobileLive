import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import AddToDo from './containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainer';
//import Loadable from 'react-loadable';


function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    // this.setState({
    //   isLoading: false
    // })
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  
  render() {
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return (<div class="LoaderClass"><img src="https://media.giphy.com/media/C0UWSDeGnyuGY/giphy.gif"></img></div>); // render null when app is not ready
     //return(<div><iframe src="https://giphy.com/embed/C0UWSDeGnyuGY" width="480" height="328" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/screen-samsung-connect-C0UWSDeGnyuGY">via GIPHY</a></p></div>);
    }
    return (

     
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>Actions To Be Performed</h1>
            <Navigation />
            <Route exact path="/" component={ToDoListContainer} />
            
            <Route id="loader" exact path="/new-item" component={AddToDo} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;