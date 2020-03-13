import React, { useEffect, useState } from "react";
import Axios from "axios";
import Modal from "react-modal";
import './modal.styles.scss'
import { getTest } from "../../../../utils/utils.user";

const TestSend = ({ isVisible, id_user, CLOSE_MODAL }) => {
  const [TestSend, setTestSend] = useState({
    allTest: [],
    testSelect: "",
    err: false
  });

  useEffect(() => {
    Axios.get(`${getTest}tests`).then(res =>
      setTestSend({ ...TestSend, allTest: res.data })
    );
  }, []);

  const handleSubmit = () => {
    if (TestSend.testSelect !== "") {
      Axios.post(`${getTest}send/test/${TestSend.testSelect}/user/${id_user}`)
      setTestSend({ ...TestSend, err: false })
      CLOSE_MODAL()
    } else {
      setTestSend({ ...TestSend, err: true })
    }

  }

  return (
    <Modal className="sendModal" isOpen={isVisible} onRequestClose={() => CLOSE_MODAL()}>
      <h1 className="titel">Selectionner le test à envoyer</h1>
      <div className="test">
        <ul class="list-group">
          {TestSend.allTest.map((test, i) => {
            return (
              <li key={i} className="list-group-item">
                <input type="radio" onClick={() => setTestSend({ ...TestSend, testSelect: test.id_quiz })} />
                <span> {test.language},  {test.level}</span>
              </li>
            );
          })}
        </ul>
      </div>
      {TestSend.err && <li className="list-group-item list-group-item-danger infoErr">Veuillez selectionne un test </li>}
      <div className='btn' onClick={() => handleSubmit()}>
        <span>Envoyer le test</span>
      </div>
    </Modal>
  );
};

export default TestSend;
