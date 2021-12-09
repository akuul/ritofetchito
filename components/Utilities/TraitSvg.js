const TraitSvg = (props) => {
  return (
    <svg
      className={props.className}
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      width='36px'
      height='36px'
      viewBox='0 0 36 36'
      fill={props.fill || 'green'}
    >
      <path d='m18 1.16 15 9v15.7l-15 9-15-9V10.14l15-9M18 0l-.52.31-15 9-.48.28v16.82l.48.29 15 9 .52.3.52-.31 15-9 .48-.29V9.59l-.48-.29-15-9L18 0Z' />
      <path d='M18 1.16 3 10.14v15.72l15 8.98 15-8.98V10.14L18 1.16z' />
      <path d='M18 2.89 31.5 11v14L18 33.11 4.5 25V11L18 2.89m0-1.73-15 9v15.7l15 9 15-9V10.14l-15-9Z' />
    </svg>
  );
};
export default TraitSvg;
