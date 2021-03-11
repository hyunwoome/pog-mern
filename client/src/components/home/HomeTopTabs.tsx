import styled from 'styled-components';
import { useState } from 'react';
import DataProduct from '../../data/DataProduct';

export default function TopTabs() {
	const [active, setActive] = useState(DataProduct[0].title);

	return (
		<>
			<StyledContainer>
				<StyledUnList>
					{DataProduct.map((item) => (
						<StyledList key={item.title}>
							<StyledActiveButton
								onClick={() => {
									setActive(item.title);
								}}
								active={active === item.title}
							>
								{item.title}
							</StyledActiveButton>
							<StyledTabIndicator active={active === item.title} />
						</StyledList>
					))}
				</StyledUnList>
			</StyledContainer>
		</>
	);
}

const StyledContainer = styled.div`
	background-color: var(--color-background);
	border-bottom: 1px solid var(--color-border);
	width: 100%;
	margin-bottom: 1rem;
	padding: 0 16px;
	top: 50px;
	overflow: scroll;
	position: fixed;
`;

const StyledUnList = styled.ul`
	max-width: 728px;
	height: 45px;
	padding-top: 4px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledList = styled.li`
	height: 100%;
	flex-shrink: 0;
	position: relative;
`;

const StyledButton = styled.button`
	background-color: var(--color-background);
	width: 100%;
	height: 100%;
	border: 0;
	outline: 0;
	padding: 0 12px;
	cursor: pointer;
	font-size: 13px;
	letter-spacing: 0.5px;
`;

const StyledActiveButton = styled(StyledButton)<{ active: boolean }>`
	color: var(--color-button-default);
	${({ active }) => active && `color: var(--color-button-secondary);`};
	${({ active }) => active && `font-weight: 600;`};
`;

const StyledTabIndicator = styled.span<{ active: boolean }>`
	width: 100%;
	height: 3px;
	position: absolute;
	z-index: 10;
	right: 0;
	bottom: 0;
	left: 0;
	${({ active }) =>
		active && `background-color: var(--color-button-secondary);`}
`;
