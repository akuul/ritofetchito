import Image from 'next/image';
import classes from './Unit.module.css';

const Unit = ({ unit }) => {
  return (
    <div className={classes.unitWrapper}>
      <span className={classes.showCharacterId}>{unit.character_id}</span>
      <Image
        className={classes.unit}
        width={58}
        height={58}
        layout='fixed'
        src={`https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/${unit.character_id}.png`}
        alt={unit.character_id}
      />
    </div>
  );
};

export default Unit;
