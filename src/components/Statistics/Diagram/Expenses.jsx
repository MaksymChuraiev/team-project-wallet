import spaceCreator from 'services/spaceCreator';

export const Expenses = ({ getByDate }) => {
  return (
    <p
      style={{
        position: 'absolute',
        top: '50%',
        left: '37%',
        fontWeight: 700,
        fontSize: 18,
      }}
    >
      <span>&#8372;</span>
      <span style={{ marginLeft: 5, fontFamily: 'Ruda' }}>
        {typeof getByDate.totalExpenses === 'string' && spaceCreator(getByDate.totalExpenses)}
      </span>
    </p>
  );
  //   return <span>{getByDate.totalExpenses}</span>;
};
