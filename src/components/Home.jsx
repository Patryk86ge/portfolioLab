import React from 'react'
import Header from './Header'
import ThreeColumns from './ThreeColumns'
import Strip from './Strip'
import SimpleStep from './SimpleStep'
import StripBtn from './StripBtn'
import AboutAs from './AboutAs'

// import Footer from './Footer'

const Home = () => {
    return (
        <>
        <Header />
        <ThreeColumns />
        <Strip text='Wystarczą 4 proste kroki'/>
        <SimpleStep/>
        <StripBtn />
        <AboutAs />
        <Strip text='Komu pomagamy?'/>
        </>
    )
}

export default Home
