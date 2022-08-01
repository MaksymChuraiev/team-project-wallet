import React from 'react';
import styled from '@emotion/styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Button } from '../Form/Form.styled';
import { Date } from './Date';
import { ReactComponent as Icon } from '../../../icons/date-range.svg';

const initialValues = {
  category: '',
  amount: '',
  date: () => new Date(),
  comment: '',
};
const FormStyled = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const Input = styled(Field)`
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
`;
const SelectInput = styled(Input)`
  display: ${p => (p.type ? 'block' : 'none')};
  color: ${p => (p.children === 'Select a category' ? '#bdbdbd' : '#000')};
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;
const CommentInput = styled(Input)`
  height: auto;
  resize: none;
  overflow: hidden;
  outline-offset: 0;
  @media screen and (min-width: 768px) {
    text-align: left;
    max-lines: 1;
  }
`;
const Wrapper = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 32px;
  }
`;
const DateIcon = styled(Icon)`
  position: absolute;
  right: 0px;
  bottom: 10px;
`;
const categories = ['food', 'house', 'children', 'mistress'];

let schema = yup.object().shape({
  category: yup.string().required().oneOf(categories),
  amount: yup.number().typeError('enter a number').required().positive(),
  date: yup
    .string()
    .default(() => new Date())
    .typeError('choose a date'),
  comment: yup.string(),
});

export function ModalForm({ transaction, updateTransaction }) {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
  };
  //   const handleSubmit = async e => {
  //     e.preventDefault();
  //     try {
  //       await dispatch(
  //         addTransaction({
  //           ...transaction,
  //           type: transaction.type ? '-' : '+',
  //           date: format(transaction.date, 'yyyy-MM-dd'),
  //         })
  //       ).unwrap();
  //       closeModal();
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={schema}
    >
      <FormStyled>
        <SelectInput
          type={transaction.type}
          as="select"
          name="category"
          placeholder="Select a category"
        >
          <option defaultValue style={{ color: '#bdbdbd' }} value="">
            Select a category
          </option>
          {categories.map(category => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </SelectInput>
        <ErrorMessage name="category">{TextError}</ErrorMessage>

        <Wrapper>
          <div>
            <Input type="text" placeholder="0.00" name="amount" />
            <ErrorMessage name="amount">{TextError}</ErrorMessage>
          </div>
          <div style={{ position: 'relative' }}>
            <Input
              type="date"
              //   placeholder="0.00"
              name="date"
              //   transaction={transaction}
              //   updateTransaction={updateTransaction}
              //   as={Date}
            />

            {/* <DateIcon /> */}
            <ErrorMessage name="date">{TextError}</ErrorMessage>
          </div>
        </Wrapper>

        <CommentInput
          as="textarea"
          name="comment"
          placeholder="Comment"
          rows="2"
        />
        <ErrorMessage name="comment">{TextError}</ErrorMessage>

        <Button type="submit" disabled={!schema.isValid}>
          Add
        </Button>
      </FormStyled>
    </Formik>
  );
}

function TextError(msg) {
  return (
    <p style={{ color: 'red', marginTop: '5px', textAlign: 'center' }}>{msg}</p>
  );
}
