import styled from 'styled-components';

interface Props {
	active: string;
}

export default function ProductRegionTitle({ active }: Props) {
	return (
		<StyledContainer>
			<StyledTitle>{active}</StyledTitle>
		</StyledContainer>
	);
}

const StyledContainer = styled.section`
	background-color: var(--color-background);
	max-width: 728px;
	height: 50px;
	padding: 10px 20px 8px 20px;
	margin: 0 auto;
`;

const StyledTitle = styled.h2`
	font-size: var(--font-lg);
	font-weight: 700;
`;
