import { profile } from 'console'
import styles from '../styles/components/Profile.module.css'

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/8229999?v=4" alt="Alex Sousa"/>
      <div>
        <strong>Alex Sousa</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
        </p>
      </div>
    </div>

  )
}