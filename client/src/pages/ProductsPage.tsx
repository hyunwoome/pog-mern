import styled from 'styled-components';
import NotFoundPage from './NotFoundPage';
import BaseTemplate from '../components/base/BaseTemplate';
import BackButton from '../components/common/BackButton';
import ProductRegion from '../components/common/ProductRegion';
import ProductGrid from '../components/sections/ProductGrid';
import { useParams } from 'react-router-dom';

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
			<BaseTemplate>
				<StyledContainer>
					<ProductRegion region={region} />
					<ProductGrid />
				</StyledContainer>
			</BaseTemplate>
		</>
	);
}

const StyledContainer = styled.div`
	padding-top: 3rem;
	background-color: var(--color-background);
`;
