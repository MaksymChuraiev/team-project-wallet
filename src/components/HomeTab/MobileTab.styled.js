import styled from '@emotion/styled';

export const MobileTransactions = styled.ul`
	margin-top: 32px;
`

export const MobileTableBox = styled.li`
	position: relative;
	border-radius: 10px;
	overflow: hidden;
	border-left: 5px solid ${props =>
		props.type === 'income'
			? "#24CCA7"
			: "#FF6596"};
	&:not(:first-of-type) {
    margin-top: 8px;
	}
`

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;

	font-family: 'Circe';
	font-style: normal;

	//border-left: 5px solid #FF6596; 
	padding: 12px 20px 8px 20px;

	background-color: #fff;
	color: #000;

	&:not(:first-of-type) {
    border-top: 1px solid #DCDCDF;
	}
`

export const RowName = styled.span`
	font-family: 'Circe';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 27px;
`

export const RowValue = styled.span`
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
`

export const SumRow = styled.span`
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	
	color: ${props =>
		props.type === 'income'
			? "#24CCA7"
			: "#FF6596"
	}
`

export const MobileButtonDelete = styled.button`
	position: absolute;
	background: red;
  object-fit: fill;
  border: none;
  width: 30px;
  height: 30px;
  
  top: -10px;
  right: -10px;
  border-color: transparent;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all 250ms linear;
  color: #fff;
	
  &:hover {
    transform: scale(1.02) translate(-5px, 3px);
  }
  &:active {
    transform: scale(0.9);
  }
`

export const Trash = styled.img`
	margin-top: 6px;
	margin-left: 5px;
	width: 10px;
	height: 10px;
	transition: all 250ms linear;
	&:hover {
		transform: scale(1.5)
	}
`