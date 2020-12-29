import React, { useState } from 'react';
import Link from 'next/link';

import { GITHUB_URL } from '~/services/Constants';
import LandingSchmoes from './LandingSchmoes/LandingSchmoes';

import styles from './LandingHero.module.scss';

export default function LandingHero() {
  const [showInProgress, setShowInProgress] = useState(false);

  const startLearningOrTeaching = () => {
    setShowInProgress(true);
  };

  return (
    <section className={`${styles['landing-hero']} d-flex justify-content-between`}>
      <div className={styles['call-to-action']}>
        <h1> FrontEnd.ro </h1>
        <h2>
          Învață FrontEnd de la zero,
          {' '}
          <span>
            cu ajutorul comunității open source.
          </span>
        </h2>
        <div>
          {!showInProgress && (
          <>
            <button onClick={startLearningOrTeaching} type="button" className={`${styles['action-button']} text-center btn btn--default`}>
              Vreau să învăț
            </button>
            <Link href="/teach">
              <a className={`${styles['action-button']} text-center btn btn--light`}>
                Vreau să predau
              </a>
            </Link>
          </>
          )}

          {showInProgress && (
          <p style={{ width: '750px', maxWidth: '100%' }}>
            {' '}
            Ai venit în locul potrivit dar puțin cam devreme
            căci mai avem câteva mici ajustări de făcut până lansăm o primă variantă
            a platformei. Revino în câteva zile sau
            {' '}
            <a href={GITHUB_URL} rel="noreferrer" target="_blank">
              hai pe GitHub
            </a>
            {' '}
            dacă vrei să ne ajuți.
          </p>
          )}
        </div>
      </div>

      <LandingSchmoes />
    </section>
  );
}
