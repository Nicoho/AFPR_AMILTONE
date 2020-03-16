import React, { useState } from 'react';
import "./add.styles.scss"
import addLogo from "../../../../../img/add.svg"
import Axios from 'axios';
import { getTest } from '../../../../utils/utils.user'
const AddNewUser = () => {
    const [state, setState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        err: false
    })

    const handleChange = (type, value) => {
        switch (type) {
            case "firstname":
                setState({ ...state, firstname: value })
                break
            case "lastname":
                setState({ ...state, lastname: value })
                break
            case "email":
                setState({ ...state, email: value })
                break
            default:
                break;
        }
    }

    const handleSubmit = () => {
        if (state.firstname !== "" && state.lastname !== "" && state.email !== "") {
            Axios.post(`${getTest}users`, state).then(
                res => res.data === "user déja inscrit" ?
                    setState({ ...state, err: true }) :
                    setState({
                        firstname: "",
                        lastname: "",
                        email: "",
                        err: false
                    })
            )

        }
    }

    return (
        <div className="register-add">
            <h3 className="register-heading-add">Ajouter un nouveau candidat</h3>
            <div className="register-form-add">
                <div className="col-md-15">
                    <div className="form-group">
                        <input type="text" placeholder="Nom *" value={state.lastname} onChange={(e) => handleChange("lastname", e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Prenom *" value={state.firstname} onChange={(e) => handleChange("firstname", e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email *" value={state.email} onChange={(e) => handleChange("email", e.target.value)} />
                    </div>
                    {state.err && <li className="list-group-item list-group-item-danger infoErr">Cette adresse email est déja enregistrer </li>}
                    <div className="btn" onClick={() => handleSubmit()} >
                        <span><img alt="add" src={addLogo} /></span>
                        <span>Ajouter le candidat</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewUser;