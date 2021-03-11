import styled from 'styled-components';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import EventAvailableRoundedIcon from '@material-ui/icons/EventAvailableRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function BottomNav() {
	const tabTitle = [
		{
			title: '홈',
			icons: <HomeRoundedIcon />,
			href: '/',
		},
		{
			title: '전체메뉴',
			icons: <MenuRoundedIcon />,
			href: '/menu',
		},
		{
			title: '내가찾는',
			icons: <EventAvailableRoundedIcon />,
			href: '/calendar',
		},
		{
			title: '마이페이지',
			icons: <AccountCircleRoundedIcon />,
			href: '/account',
		},
	];

	const [active, setActive] = useState(tabTitle[0].title);

	return (
		<StyledContainer>
			<StyledUnList>
				{tabTitle.map((item) => (
					<StyledList
						key={item.title}
						onClick={() => setActive(item.title)}
						active={active === item.title}
					>
						<Link to={item.href}>
							<StyledIconWrapper active={active === item.title}>
								{item.icons}
							</StyledIconWrapper>
							<StyledTitleWrapper active={active === item.title}>
								{item.title}
							</StyledTitleWrapper>
						</Link>
					</StyledList>
				))}
			</StyledUnList>
		</StyledContainer>
	);
}

const StyledContainer = styled.aside`
	background-color: var(--color-background);
	border-top: 1px solid var(--color-border);
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
`;

const StyledUnList = styled.ul`
	max-width: 728px;
	margin: 0 auto;
	padding: 6px 0px;
	display: flex;
`;

const StyledList = styled.li<{ active: boolean }>`
	color: var(--color-button-disable);
	font-size: var(--font-sm);
	width: 100%;
	text-align: center;
`;

const StyledIconWrapper = styled.div<{ active: boolean }>`
	${({ active }) =>
		active &&
		`
color: var(--color-button-primary);
`}
`;

const StyledTitleWrapper = styled.span<{ active: boolean }>`
	font-weight: 500;
	font-size: 11px;
	${({ active }) =>
		active &&
		`
    color: var(--color-font-default);
  `}
`;
