import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import BackButton from '../components/common/BackButton';
import NotFoundPage from './NotFoundPage';
import ProductRegion from '../components/common/ProductRegion';
import ProductGrid from '../components/sections/ProductGrid';

interface Country {
	country: string;
}

export default function ProductsPage() {
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
			return <NotFoundPage />;
	}

	return (
		<>
			<BackButton title={`${productCountry} 골프상품`} />
			<Container>
				<ProductRegion region={region} />
				<ProductGrid />
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
