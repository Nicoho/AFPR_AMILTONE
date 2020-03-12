import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import "./historique.styles.scss"
import { getUser, getUserResult } from '../../../../../reducers/rh.reducer/reducer';
import { back, down } from "../../../../../img/icon/logo"

const HistoriqueUser = ({ state, CHANGE_DASH, SET_MODAL_VISIBLE }) => {
    let [localState, setLocalState] = useState({
        result: [],
        user: []
    })


    useEffect(() => {
        Axios.all([getUser(state.userID), getUserResult(state.userID)])
            .then(Axios.spread((user, res) => {
                setLocalState({ user: user.data[0], result: res.data })
            }));
    }, [state.userID])

    const user = localState.user
    const userTest = localState.result
    return (
        <div className="details">
            <div className="dashbord">
                <div className="userInfo">
                    <div onClick={() => CHANGE_DASH("list")}>
                        <img src={back} alt="back" width="18px" />
                        <span> Retour </span>
                    </div>
                    <span className="Nom">Nom : {user.lastname}</span>
                    <span className="Prenom">Prénom : {user.firstname}</span>
                    <span className="Email">E-mail : {user.email}</span>
                </div>
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
                                <tr key={i} onClick={() => SET_MODAL_VISIBLE({ test, user })}>
                                    <td>{test.language}</td>
                                    <td>{test.level}</td>
                                    <td >{test.score}</td>
                                    <td >{test.response_date === null ? "pas encore passé" : test.response_date}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HistoriqueUser;