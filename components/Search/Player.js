import Image from 'next/image';
import classes from './Player.module.css';

const Player = ({ profileIconId, profileLevel, name }) => {
  return (
    <div className={classes.playerWrapper}>
      <Image
        className={classes.border}
        width={100}
        height={100}
        alt='Profile Icon '
        src={`https://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${profileIconId}.png`}
      />
      <div className={classes.playerInfo}>
        <h1>{name}</h1>
        <h2>
          {profileLevel} <span>lvl</span>
        </h2>
      </div>
    </div>
  );
};

export default Player;
