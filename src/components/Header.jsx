import genericGetFromStorage from '../services/getFromLocalStorage';

function Header() {
  const username = genericGetFromStorage('username');

  return (
    <header>
      { `É bom ter-te por aqui, ${username}.` }
    </header>
  );
}

export default Header;
