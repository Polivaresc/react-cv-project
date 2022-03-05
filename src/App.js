import React,{ Component } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import General from "./components/General";

class App extends Component {
  render() {
      return (
        <div className="App">
          <header>CV generator</header>
          <div className="container">
            <General/>
            <div className="specific-info">
              <Education/>
              <Experience/>
            </div>
          </div>
        </div>
      )
    }
}

export default App;
