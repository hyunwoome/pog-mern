import styled from 'styled-components';

interface Props {
	children: string | JSX.Element | JSX.Element[];
}

export default function BaseContainer({ children }: Props) {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	max-width: 1024px;
	margin: auto;
	height: 150vh; /* 임시 */
`;
