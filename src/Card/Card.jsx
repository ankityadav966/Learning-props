import React from 'react'
const Card = ({ cardvalue }) => {

    return (
        <div>

            <div style={{ border: '2px solid' ,padding:'1rem',textAlign:'center'}}>
                <img style={{width:'100px'}} src={cardvalue.img} />
                <h1>{cardvalue.title}</h1>
                <h1>{cardvalue.dis}</h1>
            </div>

        </div>
    )
}

export default Card