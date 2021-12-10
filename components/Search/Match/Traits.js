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
        ? { linearMiddle: '#D28C47', linearSides: '#8f541b', styleId: 'S0' }
        : trait.style === 1
        ? { linearMiddle: '#D3D3D3', linearSides: '#A9A9A9', styleId: 'S1' }
        : trait.style === 2
        ? { linearMiddle: '#FFD700', linearSides: '#E5C100', styleId: 'S2' }
        : { linearMiddle: '#FFC0CB', linearSides: '#7DF9FF', styleId: 'S3' };

    console.log(fillColor);
    return (
      <div className={classes.trait} key={index}>
        <div>
          <TraitSvg gradient={fillColor} className={classes.test} />
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
