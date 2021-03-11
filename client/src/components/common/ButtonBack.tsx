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
		<StyledContainer>
			<StyledWrapper>
				<StyledBackButton onClick={backButton}>
					<ArrowBackIosRoundedIcon fontSize="small" />
				</StyledBackButton>
				<StyledTitle>{title}</StyledTitle>
				<StyledGoButton>
					{buttonHandle ? (
						{ Icon }
					) : (
						<HomeRoundedIcon fontSize="small" onClick={homeButton} />
					)}
				</StyledGoButton>
			</StyledWrapper>
		</StyledContainer>
	);
}

const StyledContainer = styled.div`
	background-color: var(--color-background);
	border-bottom: 1px solid var(--color-border);
	width: 100%;
	height: 42px;
	position: fixed;
	z-index: 1000;
`;

const StyledWrapper = styled.div`
	max-width: 728px;
	height: 100%;
	margin: auto;
	padding: 0 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledBackButton = styled.button`
	background-color: var(--color-background);
	height: 100%;
	padding: 0;
	border: 0;
	outline: 0;
	flex: 1;
	text-align: left;
	cursor: pointer;
`;

const StyledTitle = styled.h1`
	flex: 2;
	height: 100%;
	text-align: center;
	line-height: 2.5rem;
	font-weight: 500;
`;

const StyledGoButton = styled(StyledBackButton)`
	color: var(--color-button-primary);
	text-align: right;
`;
