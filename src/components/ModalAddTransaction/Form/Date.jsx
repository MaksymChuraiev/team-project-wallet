import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as DateRange } from '../../../icons/date-range.svg';

const DateInput = styled.div`
  position: relative;
  width: 100%;
  height: 34px;
  padding-left: 20px;
  padding-bottom: 8px;
  margin-top: 40px;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--modal-toggle-text-gray);
  outline-offset: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: var(--color-black);
  font-family: Circe, sans-serif;
  @media screen and (min-width: 768px) {
    text-align: center;
  }
  .date-icon {
    position: absolute;
    right: 20px;
    bottom: 10px;
  }
  .modal-input {
    margin: 0;
    width: 100%;
    outline: none;
    border-radius: 0;
    border: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }
`;

export function Date({ transaction, updateTransaction }) {
  return (
    <DateInput>
      <DatePicker
        className="modal-input"
        selected={transaction.date}
        onChange={date => {
          updateTransaction('date', date);
        }}
        dateFormat="dd.MM.yyyy"
      />
      <DateRange className="date-icon" />
    </DateInput>
  );
}
