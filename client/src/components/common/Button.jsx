import styled from 'styled-components';

export default function Button({ children }) {
	return (
		<Container>
			<ButtonComponent>{children}</ButtonComponent>
		</Container>
	);
}

const Container = styled.div``;

const ButtonComponent = styled.button`
	padding: 6px 16px;
	border: 0;
	border-radius: 5px;
	box-shadow: 0px 1px 3px -1px gray;
	font-size: var(--font-button);
`;
