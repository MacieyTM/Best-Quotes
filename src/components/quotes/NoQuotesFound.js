import { Link } from 'react-router-dom';

import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>Nie znaleziono żadnych cytatów!</p>
      <Link className='btn' to='/new-quote'>
        Dodaj cytat
      </Link>
    </div>
  );
};

export default NoQuotesFound;
