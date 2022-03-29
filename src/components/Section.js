import React from 'react'
import styled from "styled-components"
import './Section.css'


function Section ({title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage = {backgroundImg}>
            <div className='item__text'>
                <h1>
                    {title} 
                </h1>
                <p>
                    {description}
                </p>
            </div>
            <div className='buttons'>
                <div className='button__group'>
                    <button className='left__button'>
                        {leftBtnText}
                    </button>
                    <button className='right__button'>
                        {rightBtnText}
                    </button>
                </div>
                <img className='down__arrow' 
                src = '/images/down-arrow.svg'/>
            </div>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => 'url("/images/${props.bgImage}")'}
    
`