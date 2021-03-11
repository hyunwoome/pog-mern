import styled from 'styled-components';
import ButtonBack from '../components/common/ButtonBack';
import ProductListCountry from '../components/productlist/ProductListCountry';

export default function ProductListPage() {
	return (
		<>
			<ButtonBack title="전체 골프 상품" />
			<StyledContainer>
				<ProductListCountry />
			</StyledContainer>
		</>
	);
}

const StyledContainer = styled.div`
	padding-top: 41.6px;
`;
