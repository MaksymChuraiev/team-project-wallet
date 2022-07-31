import { useState, useEffect } from 'react';
import { MyVersion } from './MyVersion';
import { MyVersionYears } from './MyVersionYears';
import {
  SelectContainer,
  Select,
  SelectInput,
  SelectName,
  SelectDropList,
  SelectDropItem,
  ListTypeContainer,
} from './SelectCategories.styled';

export const SelectCategories = () => {
  const inputMonths = document.querySelector('div[data-input="months"]');
  const inputYears = document.querySelector('div[data-input="years"]');
  // console.log('inputMonths,', inputMonths);
  // console.log('inputYears,', inputYears);
  // =-----==------- TABLE ==----------

  const [inputIsOpen, setInputIsOpen] = useState(false);
  const [dropIsOpen, setDropIsOpen] = useState(false);
  const [inputIsOpenYears, setInputIsOpenYears] = useState(false);
  const [dropIsOpenYears, setDropIsOpenYears] = useState(false);

  // =-----==------- TABLE ==----------
  const handleInputOpenMonths = e => {
    setInputIsOpen(!inputIsOpen);
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
        setDropIsOpenYears(false);
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
          <SelectInput className="select__input" type="hidden" name="" />
          <SelectName
            className={inputIsOpen ? 'open select__head ' : 'select__head '}
            onClick={handleInputOpenMonths}
            data-input="months"
          >
            Months
          </SelectName>
          {dropIsOpen && (
            <MyVersion
              name={'months'}
              inputMonths={inputMonths}
              inputIsOpen={inputIsOpen}
              setDropIsOpen={setDropIsOpen}
              setInputIsOpen={setInputIsOpen}
            />
          )}
          {dropIsOpen && (
            <SelectDropList class="select__list">
              <SelectDropItem class="select__item">{'months'}</SelectDropItem>
              <SelectDropItem class="select__item">{'months'}</SelectDropItem>
              <SelectDropItem class="select__item">{'months'}</SelectDropItem>
              <SelectDropItem class="select__item">{'months'}</SelectDropItem>
              <SelectDropItem class="select__item">{'months'}</SelectDropItem>
              <SelectDropItem class="select__item">{'months'}</SelectDropItem>
              <SelectDropItem class="select__item">{'months'}</SelectDropItem>
              <SelectDropItem class="select__item">{'months'}</SelectDropItem>
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
            Years
          </SelectName>
          {dropIsOpenYears && (
            <MyVersionYears
              name={'years'}
              inputYears={inputYears}
              inputIsOpen={inputIsOpenYears}
              setDropIsOpen={setDropIsOpenYears}
              setInputIsOpen={setInputIsOpenYears}
            />
          )}
          {dropIsOpenYears && (
            <SelectDropList class="select__list">
              <SelectDropItem class="select__item">{'years'}</SelectDropItem>
              <SelectDropItem class="select__item">{'years'}</SelectDropItem>
              <SelectDropItem class="select__item">{'years'}</SelectDropItem>
              <SelectDropItem class="select__item">{'years'}</SelectDropItem>
              <SelectDropItem class="select__item">{'years'}</SelectDropItem>
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
