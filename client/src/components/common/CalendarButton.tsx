import styled from 'styled-components';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { useHistory } from 'react-router-dom';

export default function CalendarButton() {
	const history = useHistory();
	const pushButton = () => {
		history.push('/calendar');
	};

	return (
		<Container>
			<CalButton onClick={pushButton}>
				내가찾는 해외골프
				<SearchRoundedIcon style={{ color: 'black' }} />
			</CalButton>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
`;

const CalButton = styled.button`
	width: 100%;
	padding: 8px 16px 6px 16px;
	border-radius: 5px;
	text-align: left;
	color: #ababab;
	border: 1px solid #e6e6e6;
	outline: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: var(--font-button);
	box-shadow: none;
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
`;
