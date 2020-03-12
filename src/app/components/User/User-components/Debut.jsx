import React from 'react';


function Debut({ handlePageChange, test, putTestIsStarted }) {

  const { language, level, duration } = test
  return (
    <div className='Debut'>
      <div className='intro-text'>
        <p>  Bonjour ,</p>
        <p> vous allez passer le test {language} niveau {level}.</p>
        <p>
          Ce test dure au maximum {Math.floor(duration / 60000)} min
          {duration % 60000 / 1000 !== 0 ? ' ' + duration % 60000 / 1000 + ' sec' : ""}.
        </p>
        <p>
          Assurez vous d'avoir le temps nécessaire devant vous pour le réaliser dans de bonnes conditions.
        </p>
        <p>
          Chaque question  devra être repondue dans un temps imparti.</p>
        <p> Pensez à valider vos réponses, les reponses non validées ne seront pas prises en compte.</p>
        <p className='important-intro'> Attention, le test commence dès la page suivante. Ne le lancez que lorsque vous êtes prêt.
        </p>
        <div className="start-btn" onClick={() => {
          putTestIsStarted()
          handlePageChange()
        }}>
          <span>
            Commencer le test
          </span>
        </div>
      </div>
    </div>
  )
}

export default Debut