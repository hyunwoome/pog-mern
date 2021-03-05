import styled from 'styled-components';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { useHistory } from 'react-router-dom';

export default function BackButton({ title, icon }) {
	const ICON = icon;
	const history = useHistory();
	const backButton = () => {
		history.goBack();
	};
	return (
		<Container>
			<Wrapper>
				<GoBackButton onClick={backButton}>
					<ArrowBackIosRoundedIcon />
				</GoBackButton>
				<Title>{title}</Title>
				<GoButton>
					<ICON />
				</GoButton>
			</Wrapper>
		</Container>
	);
}

BackButton.defaultProps = {
	icon: HomeRoundedIcon,
};

const Container = styled.div`
	width: 100%;
	height: 48px;
	position: fixed;
`;

const Wrapper = styled.div`
	max-width: 1024px;
	height: 100%;
	margin: auto;
	background-color: var(--color-background);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
`;

const GoBackButton = styled.button`
	border: 0;
	outline: 0;
	height: 100%;
	flex: 1;
	background-color: var(--color-background);
	padding: 0;
	text-align: left;
`;

const GoButton = styled(GoBackButton)`
	text-align: right;
`;

const Title = styled.h1`
	flex: 2;
	height: 100%;
	text-align: center;
	line-height: 3rem;
`;
