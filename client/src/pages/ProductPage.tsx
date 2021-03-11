import styled from 'styled-components';
import NotFoundPage from './NotFoundPage';
import ButtonBack from '../components/common/ButtonBack';
import ProductRegion from '../components/product/ProductRegion';
import ProductGrid from '../components/product/ProductGrid';
import { useParams } from 'react-router-dom';
import DataProduct from '../data/DataProduct';

interface Country {
	country: string;
}

export default function ProductPage() {
	const { country }: Country = useParams();
	let productCountry;
	let productRegion;

	switch (country) {
		case 'sale':
			productCountry = DataProduct[0].title;
			productRegion = DataProduct[0].region!;
			break;
		/// ...
		default:
			return <NotFoundPage />;
	}

	return (
		<>
			<ButtonBack title={`${productCountry} 골프상품`} />
			<StyledContainer>
				<ProductRegion region={productRegion} />
				<ProductGrid />
			</StyledContainer>
		</>
	);
}

const StyledContainer = styled.div`
	padding-top: 41.6px;
`;
