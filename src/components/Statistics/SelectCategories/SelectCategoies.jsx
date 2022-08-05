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

export const SelectCategories = ({
  years,
  months,
  objectDate,
  handleClickMonth,
  handleClickYear,
}) => {
  const inputMonths = document.querySelector('div[data-input="months"]');
  const inputYears = document.querySelector('div[data-input="years"]');

  const nowDate = Date.now();
  const nowMonth = new Date(nowDate).getMonth();

  const initMonth = {
    id: nowMonth,
    name: months[nowMonth].name,
  };

  // =-----==------- TABLE ==----------

  const [inputIsOpen, setInputIsOpen] = useState(false);
  const [dropIsOpen, setDropIsOpen] = useState(false);
  const [inputIsOpenYears, setInputIsOpenYears] = useState(false);
  const [dropIsOpenYears, setDropIsOpenYears] = useState(false);
  const [month, setMonth] = useState(initMonth);

  // =-----==------- TABLE ==----------
  const handleInputOpenMonths = e => {
    setInputIsOpen(!inputIsOpen);
    setMonth({ id: e.currentTarget.id, name: e.currentTarget.textContent });
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

  return (
    <>
      <SelectContainer>
        <Select>
          <SelectInput type="hidden" name="" />
          <SelectName
            className={inputIsOpen ? 'open select__head ' : 'select__head '}
            onClick={handleInputOpenMonths}
            data-input="months"
          >
            {month.name ? month.name : 'Months'}
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
            <SelectDropList>
              {months &&
                months.map(elem => (
                  <SelectDropItem
                    key={elem.id}
                    id={elem.id}
                    value={elem.name}
                    onClick={e => {
                      handleClickMonth(e);
                      handleInputOpenMonths(e);
                    }}
                  >
                    {elem.name}
                  </SelectDropItem>
                ))}
            </SelectDropList>
          )}
        </Select>
        <Select>
          <SelectInput type="hidden" name="" />
          <SelectName
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
            <SelectDropList>
              {years &&
                years.map(elem => (
                  <SelectDropItem
                    id={elem}
                    key={elem}
                    onClick={e => {
                      handleClickYear(e);
                      handleInputOpenYears();
                    }}
                  >
                    {elem}
                  </SelectDropItem>
                ))}
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
