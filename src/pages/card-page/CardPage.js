import React from 'react';
import {useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './cardpage.css';


const CardPage = () => {
	const {card} = useSelector(state => state.cardReducer);
	const navigate = useNavigate();

	return (
		<div className='card'>
			<h1 className='card__title'>PRODUCT CARD (#ID/{card?.id})</h1>
			<div className='card__block'>
				<div className='card__image-block'>
					<img src={card?.image} alt="" className='card__image-block--img'/>
				</div>
				<div className='card__info-block'>
					<p className='card__info-title'>{card?.title}</p>
					<p className='card__info-info'>Category: {card?.category}</p>
					<p className='card__info-info'>Description: {card?.description}</p>
					<p className='card__info-info'>Rating: {card?.rating?.rate} ({card?.rating?.count})</p>
					<p className='card__info-price'>Price: ${card?.price}</p>
				</div>
			</div>
			<button className='card__navigate-btn' onClick={() => {navigate('/')}}>← На Главную</button>
		</div>
	  );
};

export default CardPage;