import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import "./historique.styles.scss"
import { getUser, getUserResult } from '../../../../../reducers/rh.reducer/reducer';
import { back, down, up } from "../../../../../img/icon/logo"

const HistoriqueUser = ({ state, CHANGE_DASH, SET_MODAL_VISIBLE, logOut }) => {
    let [localState, setLocalState] = useState({
        result: [],
        user: [],
        icon: ""
    })

    const rotateIcon = (value) => {
        localState.icon === "" ?
            setLocalState({ ...localState, icon: value })
            :
            setLocalState({ ...localState, icon: "" })
    }


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
                    <div className="back" onClick={() => CHANGE_DASH("list")}>
                        <img src={back} alt="back" width="18px" />
                        <span> Retour </span>
                    </div>
                    <div className="header">
                        <h1>Historique du candidat</h1>
                        <span >{user.firstname} {user.lastname}</span>
                    </div>
                    <div className="roleView">
                        <div >
                            <div data-toggle="dropdown" onClick={() => rotateIcon("role")}>
                                <span >RH</span>
                                <img src={localState.icon !== "role" ? down : up} alt="down" width="16px" />
                            </div>
                            <div class="dropdown-menu item" >
                                <a href class="dropdown-item" onClick={() => logOut()}>Déconnexion</a>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th onClick={() => rotateIcon("language")}>Langage <img src={localState.icon !== "language" ? down : up} alt="down" width="16px" /></th>
                            <th onClick={() => rotateIcon("niveau")}>Niveau  <img src={localState.icon !== "niveau" ? down : up} alt="down" width="16px" /></th>
                            <th onClick={() => rotateIcon("score")}>Score <img src={localState.icon !== "score" ? down : up} alt="down" width="16px" /></th>
                            <th onClick={() => rotateIcon("date")}>Date <img src={localState.icon !== "date" ? down : up} alt="down" width="16px" /></th>
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