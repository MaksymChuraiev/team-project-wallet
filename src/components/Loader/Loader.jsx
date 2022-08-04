import { BallTriangle } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

function Loader() {
  return (
    <LoaderWrapper>
      <BallTriangle color="#4a56e2" height="70" width="70" />
    </LoaderWrapper>
  );
}
export default Loader;
