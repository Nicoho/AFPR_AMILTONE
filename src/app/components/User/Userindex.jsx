import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import LogoAmiltone from "../../../img/LogoAmiltone.svg"
import LogoAmiltoneSeul from '../../../img/LogoASeul.png'

import { IsStartedCheck } from '../../../reducers/user.reducer/reducer'
import QuestionnaireInit from './User-components/QuestionnaireInit';
import TestErreur from './User-components/TestErreur';

const UserIndex = () => {
  const [isStarted, setIsStarted] = useState(1);
  //remplacer inititalisation à 1
  const { id_result } = useParams()


  useEffect(() => {
    IsStartedCheck(id_result, callback => { setIsStarted(callback) })
  }, [id_result])

  console.log('isStated', isStarted);


  return (
    <div className="UserIndex">
      <div className='logoAmiltone'>
        <img src={LogoAmiltone} alt='logoAmiltone' />
      </div>
      <div className='User'>
        <div className='logoAmiltoneSeul'>
          <img src={LogoAmiltoneSeul} alt='logoAmiltoneSeul' />
        </div>
        {
          !isStarted ?
            <QuestionnaireInit />
            : <TestErreur />
        }
      </div>
    </div>

  )
}

export default UserIndex;