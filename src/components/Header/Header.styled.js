import styled from '@emotion/styled';

export const HeaderCastom = styled.header`
	display:flex;
	justify-content: space-between;
	padding: 15px 20px;
	background-color: #fff;

	@media screen and (min-width: 768px) {
		padding: 20px 32px;
		}

		@media screen and (min-width: 1280px) {
		padding: 20px 16px;
		}
`

export const LogoWrapper = styled.div`
	display:flex;
	align-items: center;
`
export const Logo = styled.img`
	width: 30px;
	height: 30px;

	@media screen and (min-width: 768px) {
		width: 40px;
		height: 40px;
		}
`

export const LogoText = styled.span`
	margin-left: 15px;

	font-family: 'Poppins';
	font-style: normal;
	font-weight: 700;
	font-size: 25px;

	color: #000000;

	@media screen and (min-width: 768px) {
		margin-left: 20px;
		font-size: 30px;
	}
`

export const HeaderRight = styled.div`
	display: flex;
	align-items: center;

	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 27px;

	color: #BDBDBD;
`

export const UserName = styled.span`
`
export const ExitWrapper = styled.div`
	display: flex;
	align-items: center;

	@media screen and (min-width: 768px) {
		border-left: 1px solid #BDBDBD;
		margin-left: 12px;
		}
	`

export const ExitLogo = styled.img`
	width:18px;
	height:18px;
	margin-left: 8px;
	@media screen and (min-width: 768px) {
		margin-left: 12px;
		}
`

export const ExitText = styled.span`
	display: none;

	@media screen and (min-width: 768px) {
		display: inline;
		margin-left: 8px;
		}
`