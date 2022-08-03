import styled from '@emotion/styled';

export const MobileTransactions = styled.ul`
	margin-top: 32px;
	@media (min-width: 768px) {
		display: none;
  }
`

export const MobileTableBox = styled.li`
	border-radius: 10px;
	overflow: hidden;
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

	/* border-left: ${props =>
		props.type === 'income'
			? "5px solid #24CCA7"
			: "5px solid #FF6596"}; */
	border-left: 5px solid #FF6596; 
	padding: 12px 20px 8px 20px;

	background-color: #fff;
	color: #000;

	&:not(:first-of-type) {
    margin-top: 1px;
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
			: "#FF6596"}
`
