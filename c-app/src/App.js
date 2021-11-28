import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuCompont";
import { DISHES } from "./shared/dishes";

import { useState } from "react";

import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Hello </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}></Menu>
      </div>
    );
  }
  // function App() {
  //   const [dishes, setdishes] = useState(DISHES);
  //   return (
  //     <div className="App">
  //       <Navbar dark color="primary">
  //         <div className="container">
  //           <NavbarBrand href="/"> Hello </NavbarBrand>
  //         </div>
  //       </Navbar>
  //       <Menu dishes={dishes} />
  //     </div>
  //   );
}

export default App;
