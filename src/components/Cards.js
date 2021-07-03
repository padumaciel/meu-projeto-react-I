import React from 'react';
import api from '../api.js'

const Cards = () => {
    
    return (
        <>
        {api.map((user) => (
                <div className="personagem" key={user.id}>
                    <div className="image">
                        <img src={user.image} alt="Personagem de Crepúsculo" />
                    </div>
                    <div className="description">
                        <p>{`Nome: ${user.name}`} </p>
                        <p>{`Descrição: ${user.description}`} </p>
                    </div>
                </div>
            )
        )
        }
    </>
    )
}

export default Cards