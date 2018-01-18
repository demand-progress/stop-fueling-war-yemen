import React, { Component } from 'react';
import Footer from './Footer.jsx';
import Main from './Main.jsx'

class App extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
      return (
        <div>
          <Main />
          <Footer />
        </div>
      )
  }
}

export default App;