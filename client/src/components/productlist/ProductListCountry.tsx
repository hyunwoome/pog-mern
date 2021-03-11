import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DataProduct from '../../data/DataProduct';

export default function ProductListCountry() {
	return (
		<StyledContainer>
			<StyledHeader>
				<StyledHeaderTitle>국가선택</StyledHeaderTitle>
			</StyledHeader>
			<StyledList>
				{DataProduct.map((item) => (
					<StyledListItem key={item.title}>
						<StyledLink to={`/product${item.href}`}>{item.title}</StyledLink>
					</StyledListItem>
				))}
			</StyledList>
		</StyledContainer>
	);
}

const StyledContainer = styled.section`
	background-color: var(--color-background);
	max-width: 728px;
	margin: auto;
	padding: 20px;
`;

const StyledHeader = styled.header`
	border-bottom: 1px solid black;
`;

const StyledHeaderTitle = styled.h1`
	font-size: var(--font-lg);
	font-weight: 700;
	padding-bottom: 0.7rem;
`;

const StyledList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	padding-top: 0.2rem;
`;

const StyledListItem = styled.li`
	border-bottom: 1px solid var(--color-border);
	width: 49%;
	&:nth-child(1) {
		color: var(--color-button-secondary);
	}
	&:nth-child(2n) {
		margin-left: auto;
	}
`;

const StyledLink = styled(Link)`
	font-size: var(--font-sm);
	margin: 10px 0;
	width: 100%;
	display: block;
`;
