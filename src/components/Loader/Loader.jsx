import { Oval } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

function Loader() {
  return (
    <LoaderWrapper>
      <Oval color="black" height="100" width="100" />
    </LoaderWrapper>
  );
}
export default Loader;
