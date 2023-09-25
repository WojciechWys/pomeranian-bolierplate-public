import { useEffect } from 'react';
import { useState } from 'react';
import './styles.css';
// dodajmy diva na napis napisać useEffect'a oraz stworzyć Promise'a, który zostanie spełniony i wyświetli nam "I'm resolved :)" użyjmy useState do zapisania odpowiedzi z promisa.
export function JsPromisesWithUseEffectExercise() {
  const [getState, setState] = useState(0);
  const [getStatus, setStatus] = useState('');

  useEffect(() => {
    const myPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("I'm resolved :)");
      }, 5000);
    });

    myPromise
      .then((succeed) => {
        console.log(succeed);
        setStatus(succeed);
      })
      .catch((error) => {
        console.log(error);
        setStatus(error);
      });
  }, [getState]);

  const handleIncrementing = () => setState(getState + 1);

  return (
    <div className="js-promises-with-use-effect">
      <button onClick={handleIncrementing}>Wciśnij mie!</button>
      <p>{getStatus}</p>
      <p>{getStatus}</p>
      <p>{getStatus}</p>
    </div>
  );
}
