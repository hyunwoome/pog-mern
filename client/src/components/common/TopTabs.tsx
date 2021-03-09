import styled from 'styled-components';
import { useState } from 'react';
import ProductGrid from '../sections/ProductGrid';
import GridTitle from '../common/GridTitle';

export default function TopTabs() {
	const productList = [
		{
			title: '초특가',
			href: '/sale',
		},
		{
			title: '태국',
			href: '/taiwan',
		},
		{
			title: '중국',
			href: '/china',
		},
		{
			title: '일본',
			href: '/japan',
		},
		{
			title: '베트남',
			href: '/vietnam',
		},
		{
			title: '필리핀',
			href: '/philippines',
		},
		{
			title: '괌&사이판',
			href: '/guam',
		},
		{
			title: '기타아시아',
			href: '/asia',
		},
		{
			title: '국내투어',
			href: '/korea',
		},
		{
			title: '지방출발',
			href: '/local',
		},
	];
	const [active, setActive] = useState(productList[0].title);
	const [link, setLink] = useState(productList[0].href);

	return (
		<>
			<Container>
				<UnList>
					{productList.map((item) => (
						<List key={item.title}>
							<ActiveButton
								onClick={() => {
									setActive(item.title);
									setLink(item.href);
								}}
								active={active === item.title}
							>
								{item.title}
							</ActiveButton>
							<TabIndicator active={active === item.title} />
						</List>
					))}
				</UnList>
			</Container>
			<GridTitle title={active} href={`/products${link}`} />
			<ProductGrid />
		</>
	);
}

const Container = styled.div`
	width: 100%;
	background-color: var(--color-background);
	overflow: scroll;
	margin-bottom: 1rem;
`;

const UnList = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 45px;
	padding: 4px 16px 0 16px;
`;

const List = styled.li`
	height: 100%;
	flex-shrink: 0;
	position: relative;
`;

const Button = styled.button`
	width: 100%;
	height: 100%;
	border: 0;
	outline: 0;
	background-color: var(--color-background);
	padding: 0 var(--padding-mobile);
	cursor: pointer;
	font-size: 13px;
	letter-spacing: 0.5px;
`;

const ActiveButton = styled(Button)<{ active: boolean }>`
	color: var(--color-button-default);
	${({ active }) => active && `color: var(--color-button-secondary);`};
	${({ active }) => active && `font-weight: 600;`};
`;

const TabIndicator = styled.span<{ active: boolean }>`
	width: 100%;
	height: 3px;
	position: absolute;
	z-index: 10;
	right: 0;
	bottom: 0;
	left: 0;
	${({ active }) =>
		active && `background-color: var(--color-button-secondary);`}
`;
