import styled from '@emotion/styled';

export const BalanceWrapper = styled.div`
	overflow: hidden;
  background-color: #fff;
  border-radius: 30px;
  padding: 11px 0px 11px 32px;
	margin-top: 15px;
  height: 80px;

  @media (min-width: 768px) {
    width: 336px;
    padding: 11px 0px 11px 40px;
		margin-top: 28px;
  }
  @media (min-width: 1280px) {
    width: 395px;
  }
`;
export const BalanceLabel = styled.span`
  font-family: var(--font-second);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;

	color: #A6A6A6;
`;

export const BalanceSumm = styled.div`

padding-right: 30px;
  font-family: var(--font-second);

  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  /* margin-top: 8px; */
	white-space: nowrap;

	color: #000000;
  height: 40px;

`;

