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
				<Container>
					<Title>해외골프상품</Title>
					<CustomLink to="/productpage">상품 전체보기</CustomLink>
				</Container>
			) : null}
		</>
	);
}

const Container = styled.header`
	background-color: var(--color-background);
	max-width: 728px;
	height: 50px;
	padding: 14px 20px 8px 20px;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h2`
	font-size: var(--font-lg);
	font-weight: 700;
`;

const CustomLink = styled(Link)`
	font-size: var(--font-button);
	font-weight: 700;
	color: #0152cc;
`;
