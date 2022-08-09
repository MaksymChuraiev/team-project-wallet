import {
	BankCashContainer,
	TableHead,
	TableBody,
	TableRow,
	TableData,
	TableDataHead,
	LoaderWrap
} from './Currency.styled';
import { useState, useEffect } from 'react';
import fetchCurrency from 'services/fetchCurrency';
import spaceCreator from '../../services/spaceCreator.js';
import { useNavigate } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';

export const Currency = () => {

  const navigate = useNavigate();

  const [cur, setCur] = useState([]);


  useEffect(() => {
    fetchCurrency().then(c => setCur(c));

 
   // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  const windowListener = () => {
  
    if (window.screen.availWidth > 767) {
      navigate('/home-tab', { replace: true });
    }
  };
  useEffect(() => {
    window.addEventListener('resize', windowListener);

    return () => {
      window.removeEventListener('resize', windowListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.screen.availWidth]);



	return (
		<BankCashContainer>
			<TableHead>
				<TableRow>
					<TableDataHead>Currency</TableDataHead>
					<TableDataHead>Purchase</TableDataHead>
					<TableDataHead>Sale</TableDataHead>
				</TableRow>
			</TableHead>
			{cur?.length === 0 ? <LoaderWrap><BallTriangle color="#ffffff" width='80%' /> </LoaderWrap> : 
			<TableBody>
				
				{cur.map(({ ccy, buy, sale }) => (
					<TableRow key={ccy}>
						<TableData>{ccy}</TableData>
						<TableData>{spaceCreator(buy)}</TableData>
						<TableData>{spaceCreator(sale)}</TableData>
					</TableRow>
				))}
				</TableBody>
			}
		</BankCashContainer>
	);
};
