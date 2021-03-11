import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
	title: string;
	href: string;
}

export default function GridTitle({ title, href }: Props) {
	return (
		<Container>
			<Title>{title}</Title>
			<CustomLink to={href}>해당상품 더보기</CustomLink>
		</Container>
	);
}

const Container = styled.header`
	background-color: var(--color-background);
	max-width: 728px;
	height: 50px;
	padding: 14px 4px 8px 4px;
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
