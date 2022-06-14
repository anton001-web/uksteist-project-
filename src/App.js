import React from 'react'
import Header from "./components/Header";

const containerStyles = {
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '0px 40px 0px 40px',
    overflow: 'hidden'
}

const App = () => {
    return (
        <div style={containerStyles}>
            <Header />
        </div>
    )
}

export default App