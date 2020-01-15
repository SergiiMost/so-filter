import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar/Navbar'
import PageWrapper from './components/PageWrapper/PageWrapper'
import Filter from './components/Filter/Filter'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <ThemeProvider>
      <PageWrapper>
        <Navbar />
        <Filter />
      </PageWrapper>
      <Footer />
    </ThemeProvider>
  )
}

export default App;
