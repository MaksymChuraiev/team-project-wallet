import styled from '@emotion/styled';
import { ReactComponent as Plus } from '../../icons/plus.svg';

export const ButtonAdd = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: var(--color-btn-green);
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  cursor: pointer;
  border-radius: 50%;
  border: 0;
  padding: 0;
  outline: none;
  :hover,
  :focus {
    box-shadow: none;
  }

  > svg {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: var(--tablet)) {
    position: absolute;
    right: 40px;
    bottom: 40px;
  }
`;

export function ButtonAddTransactions() {
	const dispatch = useDispatch();
	return (
		<ButtonAdd type="button"
			onClick={() => dispatch(transactionsOperation.ModalAddTrans(true))}>
			<Plus />
		</ButtonAdd>
	);
}