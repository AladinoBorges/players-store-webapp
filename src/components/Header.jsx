import { useHistory } from 'react-router';

import '../styles/header.css';

function Header({ page }) {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  }
  return (
    <header>
      <div onClick={ handleClick }>
        { page }
      </div>
    </header>
  );
}

export default Header;
