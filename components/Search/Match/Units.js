import Unit from './Unit';
import classes from './Units.module.css';

const Units = ({ units }) => {
  for (const unit of units) {
    const updatedCharacterId = unit.character_id.split('_').pop();
    updatedCharacterId === 'ChoGath'
      ? (unit.character_id = 'Chogath')
      : (unit.character_id = updatedCharacterId);
  }

  const allUnits = units.map((object, index) => (
    <Unit unit={object} key={index} />
  ));

  return <div className={classes.unitsWrapper}>{allUnits}</div>;
};

export default Units;
