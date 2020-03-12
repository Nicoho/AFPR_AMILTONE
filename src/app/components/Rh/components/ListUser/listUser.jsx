import React, { useState, useEffect } from 'react';
import "./list.styles.scss"
import loupeLogo from "../../../../../img/loupe.svg"
import Axios from 'axios'
const ListUser = ({ CHANGE_DASH, GET_ID_USER }) => {
    let [localState, setLocalState] = useState([])

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
            <h3 className="register-heading-list">Liste des candidats</h3>
            <div>
                <div className="search-list input-group col-md-4">
                    <img width="20px" src={loupeLogo} alt="Loupe" />
                    <input type="text" placeholder="Recherche" aria-label="Username" aria-describedby="basic-addon1" />
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
        </div>
    )
}

export default ListUser;