import Units from './Match/Units';
import Traits from './Match/Traits';
import classes from './Match.module.css';

const Match = ({ gametype, player }) => {
  const place = player.placement;

  const placeBorder =
    place === 1
      ? classes.firstPlace
      : place === 2
      ? classes.secondPlace
      : place === 3
      ? classes.thirdPlace
      : '';

  const matchInfoClasses = `${classes.matchWrapper} ${placeBorder}`;

  return (
    <div className={matchInfoClasses}>
      <div className={classes.matchInfo}>
        <span>{gametype}</span>
        <span>{player.placement}</span>
      </div>
      <div className={classes.matchUnits}>
        <Traits traits={player.traits} />
        <div className={classes.unitsGap}>
          <Units units={player.units} />
          <span className={classes.playerLevel}>
            {player.level}
            <span>lvl</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Match;
