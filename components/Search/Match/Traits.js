import Image from 'next/image';
import classes from './Traits.module.css';
import TraitSvg from '../../Utilities/TraitSvg';

const Traits = ({ traits }) => {
  for (const trait of traits) {
    const updatedTraitName = trait.name.split('_').pop();
    trait.name = updatedTraitName;
  }

  const allTraits = traits.map((trait, index) => {
    const fillColor =
      trait.style === 0
        ? '#CD7F32'
        : trait.style === 1
        ? '#A9A9A9'
        : trait.style === 2
        ? '#FFD700'
        : '';
    return (
      <div className={classes.trait} key={index}>
        <div>
          <TraitSvg fill={fillColor} className={classes.test} />
          <Image
            className={classes.test}
            width={36}
            height={36}
            src={`/traits/${trait.name}.png`}
            alt={trait.name}
          />
        </div>
      </div>
    );
  });

  return <div className={classes.traitsWrapper}>{allTraits}</div>;
};

export default Traits;
