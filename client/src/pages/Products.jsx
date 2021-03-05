import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export default function Products() {
	const { country } = useParams();
	return (
		<Container>
			<h1>{country}</h1>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 90vh;
	background-color: var(--color-background);
`;
