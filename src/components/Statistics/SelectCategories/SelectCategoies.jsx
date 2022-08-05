import { useState, useEffect } from 'react';
import { SelectMonths } from './SelectMonths';
import { SelectYears } from './SelectYears';
import {
  SelectContainer,
  Select,
  SelectInput,
  SelectName,
  SelectDropList,
  SelectDropItem,
  ListTypeContainer,
} from './SelectCategories.styled';
// import { useDispatch } from 'react-redux';

// import transactionsOperation from 'redux/transaction/transaction-operation';

export const SelectCategories = ({
  years,
  months,
  objectDate,
  handleClickMonth,
  handleClickYear,
}) => {
  console.log('months', months);
  console.log('objectDateqweqweqweqweqweqwe', objectDate);
  const inputMonths = document.querySelector('div[data-input="months"]');
  const inputYears = document.querySelector('div[data-input="years"]');

  // const dispatch = useDispatch();
  // console.log('inputMonths,', inputMonths);
  // console.log('inputYears,', inputYears);
  // =-----==------- TABLE ==----------

  const [inputIsOpen, setInputIsOpen] = useState(false);
  const [dropIsOpen, setDropIsOpen] = useState(false);
  const [inputIsOpenYears, setInputIsOpenYears] = useState(false);
  const [dropIsOpenYears, setDropIsOpenYears] = useState(false);
  const [month, setMonth] = useState('');

  // =-----==------- TABLE ==----------
  const handleInputOpenMonths = e => {
    setInputIsOpen(!inputIsOpen);
    setMonth(e.currentTarget.textContent);
  };
  const handleInputOpenYears = e => {
    setInputIsOpenYears(!inputIsOpenYears);
  };

  useEffect(() => {
    if (inputMonths) {
      if (inputIsOpen) {
        setDropIsOpen(true);
      }
      if (!inputIsOpen) {
        setDropIsOpen(false);
      }
    }
  }, [inputMonths, inputIsOpen]);

  useEffect(() => {
    if (inputYears) {
      if (inputIsOpenYears) {
        setDropIsOpenYears(true);
      }
      if (!inputIsOpenYears) {
        setDropIsOpenYears(false);
      }
    }
  }, [inputYears, inputIsOpenYears]);

  // const handleClickMonth = e => {
  //   // console.log(e.target);
  //   console.dir(e.currentTarget.id);
  //   setObjectDate({ ...objectDate, months: e.currentTarget.id });
  // };
  // const handleClickYear = e => {
  //   // console.log(e.target);
  //   console.dir(e.currentTarget.id);
  //   setObjectDate({ ...objectDate, year: e.currentTarget.id });
  // };
  // useEffect(() => {
  //   dispatch(transactionsOperation.getByDate(objectDate));
  // }, [dispatch, objectDate]);

  return (
    <>
      <SelectContainer>
        <Select>
          <SelectInput className="select__input" type="hidden" name="" />
          <SelectName
            className={inputIsOpen ? 'open select__head ' : 'select__head '}
            onClick={handleInputOpenMonths}
            data-input="months"
          >
            {/* {objectDate.monthName ? objectDate.monthName : 'Months'} */}
            {month ? month : 'Months'}
          </SelectName>
          {dropIsOpen && (
            <SelectMonths
              name={'months'}
              months={months}
              inputMonths={inputMonths}
              inputIsOpen={inputIsOpen}
              setDropIsOpen={setDropIsOpen}
              setInputIsOpen={setInputIsOpen}
            />
          )}
          {dropIsOpen && (
            <SelectDropList class="select__list">
              {months &&
                months.map(month => (
                  <SelectDropItem
                    className="select__item"
                    key={month.id}
                    id={month.id}
                    name={month.name}
                    onClick={e => {
                      handleClickMonth(e);
                      handleInputOpenMonths(e);
                    }}
                  >
                    {month.name}
                  </SelectDropItem>
                ))}

              {/* <SelectDropItem class="select__item">{'months'}</SelectDropItem>
              <SelectDropItem class="select__item">{'months'}</SelectDropItem>
              <SelectDropItem class="select__item">{'months'}</SelectDropItem>
              <SelectDropItem class="select__item">{'months'}</SelectDropItem>
              <SelectDropItem class="select__item">{'months'}</SelectDropItem>
              <SelectDropItem class="select__item">{'months'}</SelectDropItem>
              <SelectDropItem class="select__item">{'months'}</SelectDropItem> */}
            </SelectDropList>
          )}
        </Select>
        <Select>
          <SelectInput className={'select__input'} type="hidden" name="" />
          <SelectName
            // className="select__head "
            className={
              inputIsOpenYears ? 'open select__head ' : 'select__head '
            }
            onClick={handleInputOpenYears}
            data-input="years"
          >
            {objectDate.year ? objectDate.year : 'Year'}
          </SelectName>
          {dropIsOpenYears && (
            <SelectYears
              name={'years'}
              years={years}
              inputYears={inputYears}
              inputIsOpen={inputIsOpenYears}
              setDropIsOpen={setDropIsOpenYears}
              setInputIsOpen={setInputIsOpenYears}
            />
          )}
          {dropIsOpenYears && (
            <SelectDropList class="select__list">
              {years &&
                years.map(year => (
                  <SelectDropItem
                    className="select__item"
                    id={year}
                    key={year}
                    onClick={e => {
                      handleClickYear(e);
                      handleInputOpenYears();
                    }}
                  >
                    {year}
                  </SelectDropItem>
                ))}

              {/* <SelectDropItem class="select__item">{'years'}</SelectDropItem>
              <SelectDropItem class="select__item">{'years'}</SelectDropItem>
              <SelectDropItem class="select__item">{'years'}</SelectDropItem>
              <SelectDropItem class="select__item">{'years'}</SelectDropItem> */}
            </SelectDropList>
          )}
        </Select>
      </SelectContainer>
      <ListTypeContainer
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 15,
          border: 'none',
          borderRadius: 30,
          backgroundColor: '#ffffff',
        }}
      >
        <span>Category</span>
        <span>Summ</span>
      </ListTypeContainer>
    </>
  );
};
