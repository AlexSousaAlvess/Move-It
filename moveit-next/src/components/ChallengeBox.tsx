import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
  const {activechallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext)
  const {resetCountdown} = useContext(CountdownContext)

  function handleChallengeSucceeded(){
    completeChallenge();
    resetCountdown();
  }

  function handleChanllengeFailed(){
    resetCountdown();
    resetChallenge();
  }

  return(
    <div className={styles.challengeBoxContainer}>

      {activechallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activechallenge.amount} xp</header>

          <main>
            <img src={`icons/${activechallenge.type}.svg`}/>
            <strong>Novo desafio</strong>
            <p>{activechallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChanllengeFailed}
            >Falhei</button>
            <button 
              type="button"
              className={styles.challengeSucceedeButton}
              onClick={handleChallengeSucceeded}
            >Completei</button>
          </footer>

        </div>
      ) : (
        <div className={styles.challengeNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level up"/>
          Avance de level completando desafios.
        </p>
        </div>
      )}

      
    </div>
  )
}