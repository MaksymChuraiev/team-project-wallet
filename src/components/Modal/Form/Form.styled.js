import styled from '@emotion/styled';

export const SelectContainer = styled.div`
  position: relative;
  margin-top: 40px;
  cursor: pointer;
  input {
    position: absolute;
    top: 50%;
    left: 30%;
    z-index: -1;
  }
`;
export const MoneyDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 40px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 40px;
  }
  input {
    margin: 0;
    height: 34px;
    width: 100%;
    padding-left: 20px;
    padding-bottom: 10px;
    outline: none;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid var(--color-gray-form);
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-black);
    font-family: Circe, sans-serif;
    @media screen and (min-width: $tablet) {
      padding-left: 0;
      text-align: center;
    }

    &::placeholder {
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
    }
  }
`;
export const DateContainer = styled.div`
  position: relative;
  input {
    margin: 0;
    height: 34px;
    width: 100%;
    padding-left: 20px;
    padding-bottom: 10px;
    outline: none;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid var(--color-gray-form);
    outline-offset: 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-black);
    font-family: Circe, sans-serif;
  }
  > svg {
    position: absolute;
    right: 20px;
    bottom: 10px;
    @media screen and (min-width: 768px) {
      margin-left: 20px;
    }
  }
`;

export const Comment = styled.textarea`
  margin: 0;
  height: 34px;
  width: 100%;
  margin-top: 40px;
  padding-left: 20px;
  padding-bottom: 10px;
  outline: none;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid var(--color-gray-form);
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: var(--color-black);
  font-family: Circe, sans-serif;
  resize: none;
  overflow: hidden;
  max-lines: 2;
  outline-offset: 0;

  &::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-gray-form);
    font-family: Circe, sans-serif;
  }

  @media screen and (max-width: 767px) {
    max-lines: 1;
    height: 74px;
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 13px 0px;
  margin-top: ${p => (p.children === 'Add' ? '40px' : '0px')};
  margin-bottom: ${p => (p.children === 'Add' ? '20px' : '0px')};
  border: 1px solid var(--color-btn-border);
  border-radius: 20px;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-btn-border);
  font-family: Circe, sans-serif;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  background-color: ${p => (p.children === 'Add' ? '#24cca7' : 'transparent')};
  color: ${p => (p.children === 'Add' ? '#fff' : '#4a56e2')};
  border-color: ${p => (p.children === 'Add' ? 'transparent' : '#4a56e2')};

  :hover {
    transform: scale(1.03);
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    margin-top: ${p => (p.children === 'Add' ? '40px' : '0px')};
    margin-bottom: ${p => (p.children === 'Add' ? '20px' : '0px')};
  } ;
`;
