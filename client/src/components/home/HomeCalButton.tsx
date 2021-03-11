import styled from 'styled-components';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { useHistory } from 'react-router-dom';

export default function CalendarButton() {
	const history = useHistory();
	const pushButton = () => {
		history.push('/calendar');
	};

	return (
		<StyledContainer>
			<StyledCalButton onClick={pushButton}>
				내가찾는 해외골프
				<SearchRoundedIcon style={{ color: 'black' }} />
			</StyledCalButton>
		</StyledContainer>
	);
}

const StyledContainer = styled.div`
	width: 100%;
	height: 100%;
`;

const StyledCalButton = styled.button`
	font-size: var(--font-md);
	width: 100%;
	height: 100%;
	padding: 4px 14px 4px 14px;
	border-radius: 5px;
	text-align: left;
	color: #919191;
	border: 1px solid #e6e6e6;
	background-color: #f8f8f8;
	outline: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: none;
	cursor: pointer;
`;
