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

const Container = styled.div`
	background-color: var(--color-background-base);
	position: fixed;
	bottom: 0;
	width: 100%;
`;

const UnList = styled.ul`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background-color: var(--color-background);
	max-width: 1024px;
	margin: auto;
	border-top: 1px solid var(--color-border);
	padding: 6px 0px;
`;

const List = styled.li<{ active: boolean }>`
	width: 100%;
	text-align: center;
	font-size: var(--font-sm);
	&:hover {
		opacity: 0.7;
	}
	color: var(--color-button-disable);
	${({ active }) =>
		active &&
		`
    color: var(--color-button-primary);
  `}
`;

const TabLink = styled(Link)``;

const IconWrapper = styled.div`
	margin-bottom: 2px;
`;

const TitleWrapper = styled.span``;
