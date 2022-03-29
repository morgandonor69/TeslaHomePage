import React from 'react'
import styled from "styled-components"
import"./Section.css"

function Section() {
    return (
        <div className='Wrap'>
            <div className='item__text'>
                <h1>
                    Model S 
                </h1>
                <p>
                    Order online for touchless delivery
                </p>
            </div>
            <div className='buttons'>
                <div className='button__group'>
                    <button className='left__button'>
                        Custom Order
                    </button>
                    <button className='right__button'>
                        Existing Inventory
                    </button>
                </div>
                <img className='down__arrow' 
                src = '/images/down-arrow.svg'/>
            </div>
        </div>
    )
}

export default Section
