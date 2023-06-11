export const Polecenia = () => {
  return (
    <div>
      <h4>&lt; Local Storage - ćwiczenie</h4>
      <p>
        <h4>Część A: makieta</h4>
        <ul>
          <li>
            dodajmy wszystkie elementy wizualne bez funkcjonalności dodawania
          </li>
          <li>na podstawie makiety makieta_1 tworzymy komponent</li>
          <li>
            tablica która będzie przechowywać nicki ma mieć strukturę
            nawiasKw_wąs nick: 'xxx', id: 1 wąs, ...nawias_kw{' '}
          </li>
          <li>
            dodajemy 1-3 fakeowe rekordy i w ten sposób sprawdźmy czy poprawnie
            wyświetla się tablica
          </li>
        </ul>
        <h4>Część B: dodawanie nicku i wyświetlanie listy</h4>
        <ul>
          <li>oprogramujmy dodawanie nicku do listy obiektów</li>
          <li>
            dodajmy nową zmienną idCounter przez useState która będzie się
            zwiększać za każdym razem gdy dodamy nowy nick do listy
          </li>
          <li>używamy wartości idCounter w dodawaniu nicku do listy </li>
        </ul>
        <h4>Część C: zapisywanie listy w localStorage</h4>
        <ul>
          <li>
            w momencie dodawania do nowego nicku do listy:
            <li>
              ta powinna zapisać się w localStorage pod kluczem list-nicki jako
              tablica obiektów
            </li>
            <li>
              idCounter powinien się zapisać pod kluczem list-nicki-index jako
              int
            </li>
          </li>
          <li>
            w momencie odświeżenia strony zarówno tablica jak i idCounter
            powinny się załadować z localStorage
          </li>
          <li>przy zapisie i odczycie pamiętać o parsowaniu tablicy </li>
        </ul>
        <h4>Część D: usuwanie nicków, opcjonalnie</h4>
        <ul>
          <li>po kliknięciu na x nick powinien zostać usunięty z listy</li>
          <li>po usunięciu idCounter się nie zmienia</li>
        </ul>
      </p>
    </div>
  );
};
