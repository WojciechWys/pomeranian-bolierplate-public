import { Button } from './Button/Button';
import { Menu } from './Menu/Menu';
import './styles.css';
import { useState, useEffect } from 'react';
import { Playground } from './Playground/Playground';
// import { MenuView } from './MenuView/MenuView';
import { GameView } from './GameView/GameView';
import { MenuView } from './MenuView/MenuView';
//

export function HitTheMole() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="hit-the-mole">
      <h4>&lt; Hit the Mole Jack</h4>
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>

      {isGameStarted ? (
        <GameView
          setGameStarted={setGameStarted}
          score={score}
          setScore={setScore}
        />
      ) : (
        <MenuView score={score} setGameStarted={setGameStarted} />
      )}

      {/* <ResultView result={result} /> */}

      {isGameStarted && <Playground score={score} setScore={setScore} />}
    </div>
  );
}
