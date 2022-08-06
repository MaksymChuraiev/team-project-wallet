import Media from 'react-media';
import { PageCurrensy } from './HomeTabPage.styled';
const { Currency } = require('components/Currency/Currency');

const BankTablePage = () => {
  return (
    <Media query="(max-width: 767px)">
      <PageCurrensy>
        <Currency />
      </PageCurrensy>
    </Media>
  );
};

export default BankTablePage;
