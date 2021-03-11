import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductGridTitle from './ProductGridHeader';

interface Item {
	_id: string;
	image: string;
	country: string;
	region: string;
	title: string;
	price: number;
}

export default function ProductGrid() {
	const [product, setProduct] = useState<any>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				setError(null);
				setProduct(null);
				setLoading(true);
				const response = await axios.get('http://localhost:5000/api/products');
				setProduct(response.data);
			} catch (error) {
				setError(error);
			}
			setLoading(false);
		};
		fetchProduct();
	}, []);
	if (loading) return <div>상품이 준비중입니다.</div>;
	if (error) return <div>상품을 불러올 수 없습니다.</div>;
	if (!product) return null;
	return (
		<>
			<ProductGridTitle />
			<StyledContainer>
				{product.map((item: Item) => (
					<StyledCardContainer key={item._id}>
						<StyledImageContainer>
							<img
								src={`http://localhost:5000/${item.image}`}
								alt="상품이미지"
							/>
						</StyledImageContainer>
						<StyledContentContainer>
							<StyledContentHeader>
								<StyledContentCountry>{item.country}</StyledContentCountry>
								<StyledContentRegion>{item.region}</StyledContentRegion>
							</StyledContentHeader>
							<StyledContentTitle>{item.title}</StyledContentTitle>
							<StyledContentBottom>
								<StyledContentPrice>
									{item.price.toLocaleString('ko-KR')}
								</StyledContentPrice>
								<StyledContentWon>원</StyledContentWon>
							</StyledContentBottom>
						</StyledContentContainer>
					</StyledCardContainer>
				))}
			</StyledContainer>
		</>
	);
}

const StyledContainer = styled.section`
	background-color: var(--color-background);
	max-width: 728px;
	margin: 0 auto;
	padding: 0 20px 20px 20px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	@media screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
	gap: 1.3rem;
`;

const StyledCardContainer = styled.div`
	border: 0.1px solid var(--color-border);
	border-radius: 5px;
`;

const StyledImageContainer = styled.div`
	background-color: var(--color-background);
	max-height: 200px;
	overflow: hidden;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	& > img {
		max-width: 100%;
		height: auto;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
`;

const StyledContentContainer = styled.div`
	box-shadow: 0.5px 0.5px 10px var(--color-border);
	padding: 1rem;
	height: 8rem;
`;

const StyledContentHeader = styled.header`
	margin-bottom: 0.5rem;
	display: flex;
	align-items: center;
`;

const StyledContentCountry = styled.h2`
	font-size: var(--font-md);
	margin-right: 0.3rem;
`;

const StyledContentRegion = styled.h4`
	font-size: var(--font-md);
	font-weight: 300;
`;

const StyledContentTitle = styled.h1`
	font-size: var(--font-lg);
	font-weight: 700;
`;

const StyledContentBottom = styled.div`
	margin-top: 2rem;
	text-align: right;
`;

const StyledContentPrice = styled.p`
	font-size: var(--font-xl);
	font-weight: 700;
	display: inline;
	margin-right: 0.1rem;
`;

const StyledContentWon = styled.span`
	font-size: var(--font-sm);
`;
