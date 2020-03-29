import React from 'react'

// Components
import Menu from './components/Menu'
import Grid from './components/Grid'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Styles
import './global.css'

function App() {
  return (
    <div>
      <Menu title="Huriel Lopes" />
      <Grid />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App
