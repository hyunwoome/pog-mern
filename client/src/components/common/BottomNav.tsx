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
		<Container>
			<UnList>
				{tabTitle.map((item) => (
					<List
						key={item.title}
						onClick={() => setActive(item.title)}
						active={active === item.title}
					>
						<TabLink to={item.href}>
							<IconWrapper>{item.icons}</IconWrapper>
							<TitleWrapper>{item.title}</TitleWrapper>
						</TabLink>
					</List>
				))}
			</UnList>
		</Container>
	);
}

const Container = styled.aside`
	background-color: var(--color-background);
	border-top: 1px solid var(--color-border);
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
`;

const UnList = styled.ul`
	display: flex;
	max-width: 728px;
	margin: 0 auto;
	padding: 6px 0px;
`;

const List = styled.li<{ active: boolean }>`
	width: 100%;
	text-align: center;
	font-size: var(--font-sm);
	color: var(--color-button-disable);
	${({ active }) =>
		active &&
		`
    color: var(--color-button-primary);
  `}
`;

const TabLink = styled(Link)``;

const IconWrapper = styled.div``;

const TitleWrapper = styled.span`
	font-weight: 500;
	font-size: 11px;
`;
