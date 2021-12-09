import Match from './Match';

const MatchList = ({ matches }) => {
  const gameTypes = {
    turbo: 'Hyper Roll',
    pairs: 'Double Up',
    standard: 'Ranked',
    normal: 'Normal',
  };

  const allMatches = matches.map((match, i) => (
    <Match
      player={match.player}
      gametype={gameTypes[match.gametype]}
      set={match.set}
      key={i}
    />
  ));
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {allMatches}
    </div>
  );
};
export default MatchList;
