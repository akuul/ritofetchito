import { useRef } from 'react';
import classes from './Search.module.css';
import SearchBtn from '../Utilities/SearchBtn';

const Search = (props) => {
  const playerUsernameInput = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();
    const playerUsername = playerUsernameInput.current.value;
    props.onSearchUsername(playerUsername);
    playerUsernameInput.current.value = '';
  };

  return (
    <form className={classes.search_wrapper} onSubmit={submitFormHandler}>
      <div>
        <input
          type='search'
          placeholder='vardukas...'
          ref={playerUsernameInput}
        />
        <button className={classes.search_btn} type='submit'>
          <SearchBtn />
        </button>
      </div>
    </form>
  );
};

export default Search;
