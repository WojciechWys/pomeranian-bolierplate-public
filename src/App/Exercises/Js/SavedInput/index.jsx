import { Button } from './Button/Button';
import { Menu } from './Menu/Menu';
import './styles.css';
import { useState, useEffect } from 'react';
import { Polecenia } from './Polecenia/Polecenia';

export function Exercise() {
  return (
    <div className="form">
      <Polecenia></Polecenia>
      <form>
        <label>NICK</label>
        <input placeholder="Enter your nick here"></input>
        <input type="submit"></input>
      </form>
      <Button>DODAJ</Button>
    </div>
  );
}
