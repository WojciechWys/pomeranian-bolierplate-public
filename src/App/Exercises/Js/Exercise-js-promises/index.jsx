import { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';

export function JsPromisesExercise({ parameterToEffect }) {
  const [getState, setState] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Wykonuje operację cykliczną...');
    }, 5000);

    // Cleanup function inside useEffect
    return () => {
      clearInterval(timer);
      console.log('Zatrzymaj operację cykliczną... Wykonuje cleanup');
    };
    // to possible options in useEffect array of dependencies to kick useEffect and cause rerender of the component
  }, [parameterToEffect, getState]);

  function logPromiseState(promise) {
    promise.then(() => { //success
      console.log('Stan: fulfilled');
      console.log('Promise zakończony sukcesem');
    });
    .catch(() => { //failed
      console.log('Stan: rejected');
      console.log('Promise zakończony błędem');
    });
    .finally(() => { //niezależnie od powyższych wykonam jeszcze to
      console.log('Stan: fulfilled/rejected');
      console.log('Promise zakończony.');
    });
  }

  const myPromise = new Promise((resolve, rejected) => {

  });

  return <div className="playing-with-js-promises"></div>;
}
