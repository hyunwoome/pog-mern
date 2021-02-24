import styled from 'styled-components';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { Link } from 'react-router-dom';

export default function HomeHeader() {
	return (
		<HomeHeaderContainer>
			<HomeHeaderWrapper>
				<HomeHeaderFirstLine>
					<HomeHeaderLogo>PRIDE OF GOLF</HomeHeaderLogo>
					<HomeHeaderLoginLinkWrapper>
						<StyledLink to="/login">로그인</StyledLink>
					</HomeHeaderLoginLinkWrapper>
				</HomeHeaderFirstLine>
				<HomeHeaderButton>
					내가찾는 해외골프
					<SearchRoundedIcon />
				</HomeHeaderButton>
			</HomeHeaderWrapper>
		</HomeHeaderContainer>
	);
}

const HomeHeaderContainer = styled.div`
	height: 104px;
	left: 0;
	width: 100%;
	margin: auto;
	background-color: ${(props) => props.theme.backgroundColor};
`;

const HomeHeaderWrapper = styled.div`
	height: 100%;
	max-width: 100%;
	margin: auto;
	padding: 0 24px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	@media screen and (max-width: 600px) {
		padding: 0 12px;
	}
`;

const HomeHeaderFirstLine = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const HomeHeaderLogo = styled.h3`
	margin: 0;
	font-family: 'Racing Sans One', cursive;
	font-size: 1.5rem;
`;

const HomeHeaderLoginLinkWrapper = styled.div``;

const StyledLink = styled(Link)`
	text-decoration: none;
	background-color: ${(props) => props.theme.subColor};
	padding: 4px 12px;
	border-radius: 15px;
	color: white;
	font-weight: 300;
	cursor: pointer;
`;

const HomeHeaderButton = styled.button`
	border: 1px solid ${(props) => props.theme.borderColor};
	background-color: #f8f8f8;
	text-align: left;
	border-radius: 5px;
	height: 36px;
	color: #a6a6a6;
	padding: 0 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
