import styled from 'styled-components';
import { useState } from 'react';

interface Props {
	region: string[];
}

export default function ProductRegion({ region }: Props) {
	const [active, setActive] = useState(region[0]);

	return (
		<>
			<Container>
				<Header>
					<HeaderTitle>지역별 모아보기</HeaderTitle>
				</Header>
				<List>
					{region.map((item: string) => (
						<ListItem key={item}>
							<ActiveButton
								onClick={() => setActive(item)}
								active={active === item}
							>
								{item}
							</ActiveButton>
						</ListItem>
					))}
				</List>
			</Container>
			<RegionTitle>{active}</RegionTitle>
		</>
	);
}

const Container = styled.nav`
	width: 100%;
	padding: var(--padding-sm) var(--padding-laptop);
	@media screen and (max-width: 600px) {
		padding: var(--padding-sm) var(--padding-mobile);
	}
`;

const Header = styled.header`
	border-bottom: 1px solid black;
`;

const HeaderTitle = styled.h1`
	font-size: var(--font-title);
	font-weight: 500;
	padding-bottom: 0.7rem;
`;

const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	padding-top: 0.2rem;
`;

const ActiveButton = styled.button<{ active: boolean }>`
	border: 0;
	outline: 0;
	background-color: var(--color-background);
	font-size: var(--font-sm);
	padding: 0;
	width: 100%;
	height: 100%;
	text-align: left;
	cursor: pointer;
	border-bottom: 1px solid var(--color-border);
	color: var(--color-button-default);
	${({ active }) => active && `color: var(--color-button-secondary);`};
	line-height: 2rem;
`;

const ListItem = styled.li`
	width: 49%;
	&:nth-child(2n) {
		margin-left: auto;
	}
`;

const RegionTitle = styled.h1`
	position: sticky;
	top: 42px;
	background-color: var(--color-background);
	padding: var(--padding-sm) var(--padding-laptop);
	@media screen and (max-width: 600px) {
		padding: var(--padding-sm) var(--padding-mobile);
	}
`;
