import styled from 'styled-components';
import { useState } from 'react';

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

	return (
		<>
			<Container>
				<UnList>
					{productList.map((item) => (
						<List key={item.title}>
							<ActiveButton
								onClick={() => {
									setActive(item.title);
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
		</>
	);
}

const Container = styled.div`
	background-color: var(--color-background);
	border-bottom: 1px solid var(--color-border);
	width: 100%;
	margin-bottom: 1rem;
	padding: 0 16px;
	top: 50px;
	overflow: scroll;
	position: fixed;
`;

const UnList = styled.ul`
	max-width: 728px;
	height: 45px;
	padding-top: 4px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
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
	padding: 0 12px;
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
