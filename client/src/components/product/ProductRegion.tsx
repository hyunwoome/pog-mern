import styled from 'styled-components';
import { useState } from 'react';
import ProductRegionTitle from './ProductRegionTitle';

interface Props {
	region: string[];
}

export default function ProductRegion({ region }: Props) {
	const [active, setActive] = useState(region[0]);

	return (
		<>
			<StyledContainer>
				<StyledHeader>
					<StyledHeaderTitle>지역별 모아보기</StyledHeaderTitle>
				</StyledHeader>
				<StyledList>
					{region.map((item: string) => (
						<StyledListItem key={item}>
							<StyledActiveButton
								onClick={() => setActive(item)}
								active={active === item}
							>
								{item}
							</StyledActiveButton>
						</StyledListItem>
					))}
				</StyledList>
			</StyledContainer>
			<ProductRegionTitle active={active} />
		</>
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

const StyledActiveButton = styled.button<{ active: boolean }>`
	background-color: var(--color-background);
	border-bottom: 1px solid var(--color-border);
	font-size: var(--font-sm);
	border: 0;
	outline: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	text-align: left;
	cursor: pointer;
	color: var(--color-button-default);
	${({ active }) => active && `color: var(--color-button-secondary);`};
	line-height: 2rem;
`;

const StyledListItem = styled.li`
	width: 49%;
	&:nth-child(2n) {
		margin-left: auto;
	}
`;
