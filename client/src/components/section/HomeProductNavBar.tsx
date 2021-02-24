import { List } from '@material-ui/core';
import styled from 'styled-components';

export default function HomeProductNavBar() {
	const buttonTitle: string[] = [
		'초특가',
		'태국',
		'중국',
		'일본',
		'베트남',
		'필리핀',
		'괌 & 사이판',
		'기타아시아',
		'국내투어',
		'지방출발',
	];

	return (
		<HomeProductNavBarContainer>
			{buttonTitle.map((title) => (
				<HomeProductNavBarButton key={title}>{title}</HomeProductNavBarButton>
			))}
		</HomeProductNavBarContainer>
	);
}

const HomeProductNavBarContainer = styled.div`
	height: 45px;
	background-color: ${(props) => props.theme.backgroundColor};
	position: sticky;
	top: 0;
	display: flex;
	overflow-y: scroll;
	padding: 0 12px;
	@media screen and (max-width: 600px) {
		padding: 0 6px;
	}
	justify-content: space-between;
`;

const HomeProductNavBarButton = styled.button`
	flex-shrink: 0;
	border: 0;
	background-color: ${(props) => props.theme.backgroundColor};
	padding: 0 12px;
	font-size: 1rem;
`;
