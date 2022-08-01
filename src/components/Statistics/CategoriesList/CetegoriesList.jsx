import { UserData } from '../testData';

import {
  CategoriesListStyled,
  CategoriesItemStyled,
  Expenses,
  Income,
} from './CategoriesList.styled';

export const CategoriesList = () => {
  return (
    <>
      <CategoriesListStyled
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {UserData.map(data => (
          <CategoriesItemStyled
            key={data.title}
            // style={{
            //   display: 'flex',
            //   alignItems: 'center',
            // }}
          >
            <span
              style={{
                display: 'inline-block',
                width: 24,
                height: 24,
                backgroundColor: data.color,
                borderRadius: 2,
              }}
            ></span>
            <span style={{ marginLeft: 16 }}>{data.type}</span>
            <span style={{ marginLeft: 'auto' }}>{data.summ}</span>
          </CategoriesItemStyled>
        ))}
      </CategoriesListStyled>
      <Expenses>
        <span style={{ fontWeight: 700, fontSize: 16 }}>Expenses:</span>
        <span style={{ fontWeight: 700, fontSize: 16, color: ' #FF6596' }}>
          22 549.24
        </span>
      </Expenses>
      <Income>
        <span style={{ fontWeight: 700, fontSize: 16 }}>Income:</span>
        <span style={{ fontWeight: 700, fontSize: 16, color: '#24CCA7' }}>
          27 350.00
        </span>
      </Income>
    </>
  );
};
