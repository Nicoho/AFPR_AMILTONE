import React, { useState } from 'react';



const ChoixUnique = ({ question, ValidateResponse }) => {

  const [optionSelected, setOptionSelected] = useState('')
  // const [ChoixUnique, setChoixUnique] = useState('');
  const { propositions } = question

  const handleOptionChange = e => {
    setOptionSelected(e.target.value)
  }
  console.log('os', optionSelected)

  return (
    <div className="ChoixUnique">
      <form>
        <div className='propositions'>
          {
            propositions.map((propo) => {
              return (
                <label key={propo.id_propositions} className='proposition_label'>
                  <input
                    type='radio'
                    name='proposition'
                    value={propo.id_propositions}
                    checked={Number(optionSelected) === propo.id_propositions}
                    onChange={(e) => handleOptionChange(e)}
                    className='proposition_input'
                  />
                  <span className={Number(optionSelected) === propo.id_propositions ? "propoChecked-text" : "proposition_text"} > {propo.wording}</span>

                </label>
              )
            })
          }
        </div>
        <div className="btn" onClick={() => ValidateResponse(optionSelected, false)}>
          <div className="isBtn">
            <span>
              valider la réponse
          </span>
          </div>
        </div>
      </form>
    </div>

  )
}

export default ChoixUnique;