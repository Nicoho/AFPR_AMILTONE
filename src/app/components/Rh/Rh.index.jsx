import React, { useReducer } from 'react';
import "./styles//rh.styles.scss"
import { initialState, rh } from "../../../reducers/rh.reducer/reducer"
import AddNewUser from './components/NewUser/addNewUser';
import ListUser from './components/ListUser/listUser';
import HistoriqueUser from './components/historiqueUser/historiqueUser';
import Modal from './components/modal/modal';
import listLogo from '../../../img/list.svg'
import listAdd from '../../../img/add.svg'
import logo from '../../../img/Logo.svg'

const Rh = ({ logOut }) => {
    const [state, dispatch] = useReducer(rh, initialState)
    // set l'id user pour recuper les donne
    const GET_ID_USER = (userId) => {
        dispatch({ type: "SET_ID_USER", payload: userId })
    }
    // func pour ouvrire la modal & set les data user
    const SET_MODAL_VISIBLE = ({ test, user }) => {
        dispatch({ type: "DETAILS_IN_MODAL", payload: { test, user } })
        dispatch({ type: "SET_MODAL_VISIBLE", payload: true })
    }
    // func pour fermez modal
    const CLOSE_MODAL = () => {
        dispatch({ type: "SET_MODAL_VISIBLE", payload: false })
    }
    // change de vue OK !!!
    const CHANGE_DASH = (view) => {
        dispatch({ type: "CHANGE_DASH", payload: view })
    }
    // ajoute nouveau useer OK!!!
    const ADD_NEW_USER = (data) => {
        dispatch({ type: "ADD_NEW_USER", payload: data })
    }
    return (
        <div className="container-fluid Rh">
            <div className="row">
                <div className="navigation">
                    <img src={logo} alt="" />
                    <div className="btn" onClick={() => CHANGE_DASH("list")} >
                        <span><img width="40px" alt="list" src={listLogo} /></span>
                        <span>Liste des candidats</span>
                    </div>
                    <div className="btn" onClick={() => CHANGE_DASH("add")} >
                        <span><img alt="add" src={listAdd} /></span>
                        <span>Ajouter un candidat</span>
                    </div>
                    <div className="btn logout" onClick={() => logOut("logout")} >
                        <span>Déconnexion</span>
                    </div>
                </div>
                {
                    state.dashbord === "list" &&
                    // vue liste tout les utilisateur OK!!!
                    <ListUser
                        CHANGE_DASH={(view) => CHANGE_DASH(view)}
                        GET_ID_USER={(userId) => GET_ID_USER(userId)}
                    />
                }
                {
                    state.dashbord === "add" &&
                    // vue ajoute nouveau utilisateur OK!!!
                    <AddNewUser
                        ADD_NEW_USER={(data) => ADD_NEW_USER(data)}
                    />
                }
                {
                    state.dashbord === "histo" &&
                    <HistoriqueUser
                        state={state}
                        CHANGE_DASH={(view) => CHANGE_DASH(view)}
                        SET_MODAL_VISIBLE={({ test, user }) => SET_MODAL_VISIBLE({ test, user })}
                    />
                }
                <Modal state={state} CLOSE_MODAL={() => CLOSE_MODAL()} />
            </div >
        </div>
    )
}
export default Rh;