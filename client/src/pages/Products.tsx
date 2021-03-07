import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import BackButton from '../components/common/BackButton';
import NotFound from './NotFound';
import ProductRegion from '../components/common/ProductRegion';

interface Country {
	country: string;
}

export default function Products() {
	const { country }: Country = useParams();
	let productCountry;
	let region;

	// ! Data

	switch (country) {
		case 'sale':
			productCountry = '초특가';
			region = [
				'전체보기',
				'태국',
				'중국',
				'일본',
				'베트남',
				'필리핀',
				'괌&사이판',
				'기타아시아',
			];
			break;
		// case 'taiwan':
		// 	productCountry = '태국';
		// 	break;
		// case 'china':
		// 	productCountry = '중국';
		// 	break;
		// case 'japan':
		// 	productCountry = '일본';
		// 	break;
		// case 'vietnam':
		// 	productCountry = '베트남';
		// 	break;
		// case 'philippines':
		// 	productCountry = '필리핀';
		// 	break;
		// case 'guam':
		// 	productCountry = '괌&사이판';
		// 	break;
		// case 'asia':
		// 	productCountry = '기타아시아';
		// 	break;
		// case 'korea':
		// 	productCountry = '국내';
		// 	break;
		// case 'local':
		// 	productCountry = '지방에서 출발하는';
		// 	break;
		default:
			return <NotFound />;
	}

	return (
		<>
			<BackButton title={`${productCountry} 골프상품`} />
			<Container>
				<ProductRegion region={region} />
			</Container>
		</>
	);
}

const Container = styled.div`
	max-width: 1024px;
	margin: auto;
	padding-top: 3rem;
	background-color: var(--color-background);
`;
