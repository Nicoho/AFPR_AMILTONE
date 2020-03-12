import React from 'react';


const HeaderModal = ({ test, user }) => {
    return (
        <div className="header">
            <div className="title">
                <h1>Details du test</h1>
            </div>
            <div className="DetailsInfo">
                <span>Date : {test.response_date}</span>
                <span>Langage : {test.language}</span>
                <span>Niveau :{test.level}</span>
                <span>Score :{test.score}</span>
                <span>Nom : {user.lastname}</span>
                <span>Prenom : {user.firstname}</span>
            </div>
        </div>
    )
}

export default HeaderModal;