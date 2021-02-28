import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8ziIN18mTbi5Y3MzTHNk95s05ISkxaIvmQ&usqp=CAU"
        alt="Ermelinda"
      />
      <div>
        <strong>Ermelinda Abreu</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
