import styled from 'styled-components';
import { Link, useLocation, useParams } from 'react-router-dom';

interface Params {
	country: string;
}

export default function ProductGridTitle() {
	const location = useLocation();
	const { country }: Params = useParams();
	return (
		<>
			{location.pathname !== `/product/${country}` ? (
				<StyledContainer>
					<StyledTitle>해외골프상품</StyledTitle>
					<StyledCustomLink to="/productpage">상품 전체보기</StyledCustomLink>
				</StyledContainer>
			) : null}
		</>
	);
}

const StyledContainer = styled.header`
	background-color: var(--color-background);
	max-width: 728px;
	height: 50px;
	padding: 20px 25px 8px 25px;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledTitle = styled.h2`
	font-size: var(--font-xl);
	font-weight: 700;
`;

const StyledCustomLink = styled(Link)`
	font-size: var(--font-md);
	font-weight: 700;
	color: #0152cc;
`;
