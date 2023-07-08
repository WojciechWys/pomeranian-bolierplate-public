import { CookieIcon } from '../Icons/CookieIcon';
import './styles.css';

export const CookieBanner = () => {
  const handleCookiesPermission = () => {
    localStorage.setItem('cookiesPermission', true);
  };

  const cookiesInLocalStorage = () => {
    if (localStorage.getItem('cookiesPermission') === 'true') return true;
    if (!!localStorage.getItem('cookiesPermission')) return false;
  };

  return (
    <>
      {!cookiesInLocalStorage() && (
        <div className="cookie_wrapper">
          <div className="cookie_content">
            {/* ikona i oplywajacy tekst */}
            <CookieIcon className="content_icon" />
            <h4>Pozwól na pliki cookies</h4>
            <p>
              Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
              działanie strony i pomagają nam świadczyć usługi na najwyższym
              poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
              tych plików i przejść do strony lub dostosować użycie do swoich
              preferencji. W tym celu kliknij przycisk po prawej stronie
              “dopasuj zgody”, aby następnie wybierz te, które odpowiadają Twoim
              indywidualnym preferencjom.
            </p>
          </div>
          <div className="cookie_permissions">
            <button
              onClick={handleCookiesPermission}
              className="permissions_accept"
            >
              W PORZĄDKU
            </button>
            <button className="permissions_reject">DOPASUJ ZGODY</button>
          </div>
        </div>
      )}
    </>
  );
};
