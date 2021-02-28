import styled from 'styled-components';
import { useState } from 'react';

export default function TopTabs() {
	const product = [
		'초특가',
		'태국',
		'중국',
		'일본',
		'베트남',
		'필리핀',
		'괌&사이판',
		'기타아시아',
		'국내투어',
		'지방출발',
	];
	const [active, setActive] = useState(product[0]);

	return (
		<Container>
			<UnList>
				{product.map((title) => (
					<List key={title}>
						<ActiveButton
							onClick={() => setActive(title)}
							active={active === title}
						>
							{title}
						</ActiveButton>
						<TabIndicator active={active === title} />
					</List>
				))}
			</UnList>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	position: sticky;
	top: 0;
	background-color: var(--color-background);
	overflow: scroll;
`;

const UnList = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	padding-top: 4px;
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
	background-color: var(--color-background);
	letter-spacing: 1px;
	font-size: var(--font-button);
	padding: 0 var(--padding-mobile);
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
`;

const ActiveButton = styled(Button)`
	color: var(--color-button-default);
	${({ active }) => active && `color: var(--color-button-secondary);`};
`;

const TabIndicator = styled.span`
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
