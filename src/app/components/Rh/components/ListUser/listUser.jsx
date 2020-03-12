import React, { useState, useEffect } from 'react';
import "./list.styles.scss"
import loupeLogo from "../../../../../img/loupe.svg"
import { back, down, up } from "../../../../../img/icon/logo"
import Axios from 'axios'
const ListUser = ({ CHANGE_DASH, GET_ID_USER, logOut }) => {
    let [localState, setLocalState] = useState([])
    let [icon, setIcon] = useState("")

    const rotateIcon = (value) => {
        icon === "" ?
            setIcon(value)
            :
            setIcon("")
    }


    useEffect(() => {
        Axios.get("http://192.168.1.52:5000/users").then(res => {
            setLocalState(res.data);
        });
    }, [])

    // change la vue en historique et passe l'id user pour recupere tout les result
    const getUserDetails = (userId) => {
        CHANGE_DASH("histo")
        GET_ID_USER(userId)
    }

    return (
        <div className="register-list">
            <div className="header">
                <h3 className="register-heading-list">Liste des candidats</h3>


                <div className="search-list input-group col-md-4">
                    <img width="20px" src={loupeLogo} alt="Loupe" />
                    <input type="text" placeholder="Recherche" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="roleView">
                    <div >
                        <div data-toggle="dropdown" onClick={() => rotateIcon("role")}>
                            <span >RH</span>
                            <img src={icon !== "role" ? down : up} alt="down" width="16px" />
                        </div>
                        <div class="dropdown-menu item" >
                            <a href class="dropdown-item" onClick={() => logOut()}>Déconnexion</a>
                        </div>
                    </div>
                </div>

            </div>
            <table className="table table-fixed table-striped table-borderless">
                <thead>
                    <tr>
                        <th >Nom</th>
                        <th >Prénom</th>
                        <th >E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {localState.map((user, i) => {
                        return (
                            <tr onClick={() => getUserDetails(user.id_users)} key={i}>
                                <td ><p>{user.lastname}</p></td>
                                <td ><p>{user.firstname}</p></td>
                                <td ><p>{user.email}</p></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ListUser;