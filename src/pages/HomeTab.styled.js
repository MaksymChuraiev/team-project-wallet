import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
	flex-direction: column;
	@media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const TabletTop = styled.div`
  display: flex;
	@media screen and (min-width: 1280px) {
    flex-direction: column;
  }
`;

export const TabletLeft = styled.div`
  
`;