import styled from 'styled-components';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { useHistory } from 'react-router-dom';

interface Props {
	title?: string;
	Icon?: string;
	buttonHandle?: string;
}

export default function BackButton({ title, Icon, buttonHandle }: Props) {
	const history = useHistory();

	const backButton = () => {
		history.goBack();
	};

	const homeButton = () => {
		history.push('/');
	};

	return (
		<Container>
			<Wrapper>
				<GoBackButton onClick={backButton}>
					<ArrowBackIosRoundedIcon fontSize="small" />
				</GoBackButton>
				<Title>{title}</Title>
				<GoButton>
					{buttonHandle ? (
						{ Icon }
					) : (
						<HomeRoundedIcon fontSize="small" onClick={homeButton} />
					)}
				</GoButton>
			</Wrapper>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 42px;
	position: fixed;
	z-index: 1000;
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
	border-bottom: 1px solid var(--color-border);
`;

const GoBackButton = styled.button`
	border: 0;
	outline: 0;
	height: 100%;
	flex: 1;
	background-color: var(--color-background);
	padding: 0;
	text-align: left;
	cursor: pointer;
`;

const Title = styled.h1`
	flex: 2;
	height: 100%;
	text-align: center;
	line-height: 2.5rem;
	font-weight: 500;
`;

const GoButton = styled(GoBackButton)`
	text-align: right;
	color: var(--color-button-primary);
`;
