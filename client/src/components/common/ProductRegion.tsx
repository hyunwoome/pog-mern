import styled from 'styled-components';

interface Props {
	region: string[];
}

export default function ProductRegion({ region }: Props) {
	return (
		<Container>
			<Header>
				<HeaderTitle>지역별로 찾기</HeaderTitle>
			</Header>
			<List>
				{region.map((item: string) => (
					<ListItem key={item}>{item}</ListItem>
				))}
			</List>
		</Container>
	);
}

const Container = styled.nav`
	width: 100%;
	height: 50vh;
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

const ListItem = styled.li`
	width: 49%;
	border-bottom: 1px solid var(--color-border);
	line-height: 2rem;
	font-size: var(--font-sm);
	font-weight: 300;
	&:nth-child(2n) {
		margin-left: auto;
	}
`;
