import React from 'react'
import styled from "styled-components"
import Section from "./Section"
import './Home.css'

function Home() {
    return (
        <Container>
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="test"
                rightBtnText="test"
            />
            <Section/>
            <Section/>
        </Container>
    )
}

export default Home


const Container = styled.div`
    height: 100vh;

`
