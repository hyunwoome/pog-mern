import styled from 'styled-components';
import Button from '../common/Button';
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

const CalButton = styled(Button)`
	width: 100%;
	text-align: left;
	color: #ababab;
	border: 1px solid #e6e6e6;
	outline: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: none;
`;
