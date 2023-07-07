import { CalendarIcon } from '../Icons/CalendarIcon';
import './styles.css';

export const CookieBanner = () => {
  return (
    <div className="cookie_wrapper">
      <div className="cookie_content">
        {/* ikona i oplywajacy tekst */}
        <CalendarIcon className="content_icon" />
        <h4>Pozwól na pliki cookies</h4>
        <p>
          Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
          działanie strony i pomagają nam świadczyć usługi na najwyższym
          poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich tych
          plików i przejść do strony lub dostosować użycie do swoich
          preferencji. W tym celu kliknij przycisk po prawej stronie “dopasuj
          zgody”, aby następnie wybrać te które odpowiadają Twoim indywidualnym
          preferencjom.
        </p>
      </div>
      <div className="cookie_permissions">
        <button className="permissions_accept">W PORZĄDKU</button>
        <button className="permissions_reject">DOPASUJ ZGODY</button>
      </div>
    </div>
  );
};
