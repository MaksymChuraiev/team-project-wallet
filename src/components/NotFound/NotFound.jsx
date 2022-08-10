import { NotFoundText, NotFoundImg, StyledLink } from './NotFound.styled';
import notFoundImg from '../../images/notFoundPage.png';
function NotFound() {
  return (
    <>
      <NotFoundText>
        Page not found, back to the
        <StyledLink to="home-tab"> home page</StyledLink>
      </NotFoundText>
      <NotFoundImg src={notFoundImg} alt="not found" />
    </>
  );
}
export default NotFound;
