import styled from '@emotion/styled';

export const BalanceWrapper = styled.div`
  background-color: gray;
  border-radius: 30px;
  padding: 8px 0px 11px 32px;
	margin-top: 15px;

  @media (min-width: 768px) {
    width: 336px;
    padding: 8px 0px 11px 40px;
		margin-top: 28px;
  }
  @media (min-width: 1280px) {
    width: 395px;
  }
`;
export const BalanceLabel = styled.span`
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;

	color: #A6A6A6;
`;

export const BalanceSumm = styled.p`
  font-family: 'Circe', sans-serif;
  font-weight: 700;
  font-size: 30px;
  margin-top: 8px;

	color: #000000;
`;

