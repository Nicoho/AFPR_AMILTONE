import React from 'react';
import "./historique.styles.scss"
const HistoriqueUser = ({ state, CHANGE_DASH, SET_MODAL_VISIBLE }) => {
    const user = state.userDetails
    const userTest = state.userDetailsTest
    return (
        <div className="details">
            <div className="dashbord">
                {/* info user */}
                <div className="userInfo">
                    <div className="btn" onClick={() => CHANGE_DASH("list")}>
                        <span> Retour </span>
                    </div>
                    <span className="Nom">Nom : {user.lastname}</span>
                    <span className="Prenom">Prénom : {user.firstname}</span>
                    <span className="Email">E-mail : {user.email}</span>
                </div>
                {/* ********** */}
                {/* Dernier test passe par l'user */}
                <div className="infoTest" onClick={() => SET_MODAL_VISIBLE()}>
                    <span>Dernier test: </span>
                    <span>langage</span>
                    <span>niveau</span>
                    <span>score</span>
                    <span>date</span>
                </div>
                {/* ********** */}
                {/* Touts les tests */}
                <table className="table">
                    <thead>
                        <tr>
                            <th >Langage</th>
                            <th >Niveau</th>
                            <th >Score</th>
                            <th >Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userTest.map((test, i) => {
                            return (
                                <tr onClick={() => SET_MODAL_VISIBLE(test.id_test)}>
                                    <td>{test.langage}</td>
                                    <td>{test.niveau}</td>
                                    <td> 50%</td>
                                    <td >{test.date}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {/* ********** */}
            </div>
        </div>
    )
}

export default HistoriqueUser;