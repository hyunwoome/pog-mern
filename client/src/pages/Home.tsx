import styled from 'styled-components';

export default function Home() {
	return <HomeContainer></HomeContainer>;
}

const HomeContainer = styled.div`
	max-width: 768px;
	height: 100vh;
	background-color: ${(props) => props.theme.backgroundColor};
	margin: auto;
`;
