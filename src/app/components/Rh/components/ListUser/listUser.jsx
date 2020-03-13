import React, { useState, useEffect } from 'react';
import "./list.styles.scss"
import loupeLogo from "../../../../../img/loupe.svg"
import { down, up } from "../../../../../img/icon/logo"
import Axios from 'axios'

import TestSend from './test.send';
import { getTest } from '../../../../utils/utils.user';
const ListUser = ({ CHANGE_DASH, GET_ID_USER, logOut }) => {
    let [localState, setLocalState] = useState([])
    let [icon, setIcon] = useState("")
    let [modal, setModal] = useState({
        isVisible: false,
        id_user: "",
        edit: "",
        update: []
    })
    const rotateIcon = (value) => {
        icon === "" ?
            setIcon(value)
            :
            setIcon("")
    }

    useEffect(() => {
        Axios.get(`${getTest}users`).then(res => {
            setLocalState(res.data);
        });

    }, [modal.edit])

    // change la vue en historique et passe l'id user pour recupere tout les result
    const getUserDetails = (userId) => {
        CHANGE_DASH("histo")
        GET_ID_USER(userId)
    }

    const OPEN_MODAL = (id_user) => {
        setModal({ id_user: id_user, isVisible: true })
    }
    const CLOSE_MODAL = () => {
        setModal({ id_user: "", isVisible: false })
    }



    const edit = (i, user) => {
        if (modal.edit !== "") {

            Axios.put(`${getTest}users`, modal.update);
            setModal({ ...modal, edit: "" })
        } else {

            setModal({ ...modal, edit: i, update: user })
        }
    }
    const handleChange = (value, type) => {
        if (type === "firstname") {
            setModal({ ...modal, update: { ...modal.update, firstname: value } })
        } else if (type === "lastname") {
            setModal({ ...modal, update: { ...modal.update, lastname: value } })
        } else if (type === "email") {
            setModal({ ...modal, update: { ...modal.update, email: value } })
        }
    }


    return (
        <div className="register-list">
            <div className="header">
                <h3 className="title">Liste des candidats</h3>


                <div className="search-list input-group col-md-4">
                    <img width="20px" src={loupeLogo} alt="Loupe" />
                    <input type="text" placeholder="Recherche" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="roleView" data-toggle="dropdown" >
                    <div onClick={() => rotateIcon("role")}>
                        <span >RH</span>
                        <img src={icon !== "role" ? down : up} alt="down" width="16px" />
                    </div>
                </div>
                <div class="dropdown-menu item" >
                    <a href class="dropdown-item" onClick={() => logOut()}>Déconnexion</a>
                </div>
            </div>

            <table className="table table-fixed table-striped table-borderless">
                <thead>
                    <tr>
                        <th onClick={() => rotateIcon("Nom")} >Nom <img src={icon !== "Nom" ? down : up} alt="down" width="16px" /></th>
                        <th onClick={() => rotateIcon("Prénom")}>Prénom <img src={icon !== "Prénom" ? down : up} alt="down" width="16px" /></th>
                        <th onClick={() => rotateIcon("E-mail")}>E-mail <img src={icon !== "E-mail" ? down : up} alt="down" width="16px" /></th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {localState.map((user, i) => {
                        return (
                            <tr key={i} id={i}>
                                <td>
                                    {modal.edit === i ? <input type="text" placeholder={modal.update.lastname} onChange={(e, type) => handleChange(e.target.value, "lastname")} /> : <span onClick={() => getUserDetails(user.id_users)}>{user.lastname}</span>}
                                </td>
                                <td>
                                    {modal.edit === i ? <input type="text" placeholder={modal.update.firstname} onChange={(e, type) => handleChange(e.target.value, "firstname")} /> : <span onClick={() => getUserDetails(user.id_users)}>{user.firstname}</span>}

                                </td>
                                <td >
                                    {modal.edit === i ? <input type="text" placeholder={modal.update.email} onChange={(e, type) => handleChange(e.target.value, "email")} /> : <span onClick={() => getUserDetails(user.id_users)}>{user.email}</span>}
                                </td>
                                <td>
                                    <span className="btn" onClick={() => OPEN_MODAL(user.id_users)}>
                                        envoyé un test
                                    </span>
                                    <span className="btn">
                                        sup
                                    </span>
                                    <span className="btn" onClick={() => edit(i, user)}>
                                        {modal.edit === i ? <span>validé</span> : <span>edit</span>}
                                    </span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <TestSend isVisible={modal.isVisible} CLOSE_MODAL={() => CLOSE_MODAL()} id_user={modal.id_user} />
        </div >
    )
}

export default ListUser;