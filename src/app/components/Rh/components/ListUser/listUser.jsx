import React from 'react';
import "./list.styles.scss"
import loupeLogo from "../../../../../img/loupe.svg"
import sendLogo from "../../../../../img/send.png"
import editLogo from "../../../../../img/edit.png"
import delLogo from "../../../../../img/delete.png"

const ListUser = ({ state, CHANGE_DASH, GET_ID_USER }) => {


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
                            <th >Langage</th>
                            <th >Niveau</th>
                            <th >Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.userList.map((user, i) => {
                            return (
                                <tr onClick={() => getUserDetails(user.id)} key={i}>
                                    <td ><p>{user.lastname}</p></td>
                                    <td ><p>{user.firstname}</p></td>
                                    <td ><p>{user.email}</p></td>
                                    <td ><p>{user.langage}</p></td>
                                    <td ><p>{user.niveau}</p></td>
                                    <td >
                                        <div className="contImg">
                                            <img alt="" src={sendLogo} width="45px" height="90px" />
                                        </div>
                                        <div className="contImg">
                                            <img alt="" src={editLogo} width="45px" height="90px" />
                                        </div>
                                        <div className="contImg">
                                            <img alt="" src={delLogo} width="45px" height="90px" />
                                        </div>
                                    </td>
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