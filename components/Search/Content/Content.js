import Player from '../Player';
import MatchList from '../MatchList';
import Spinner from '../../Utilities/Spinner';

import classes from './Content.module.css';

const Content = ({ loading, errorMsg, playerProfile, eachMatchData }) => {
  let infoContent = <p>Kuo gi tu vardu, a??</p>;

  if (playerProfile) {
    infoContent = (
      <>
        <Player {...playerProfile} />
        <MatchList matches={eachMatchData} />
      </>
    );
  }
  if (loading) {
    infoContent = <Spinner />;
  }
  if (errorMsg) {
    infoContent = <p>{errorMsg}</p>;
  }

  return <main className={classes.container}>{infoContent}</main>;
};

export default Content;
