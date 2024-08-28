import React, {useState, useEffect}  from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link} from 'react-router-dom';
import CardPage from '../card-page/CardPage';
import { setLimitAction, setProductCardAction, setCardWishedAction, getWishedItemsAction, getAllItemsAction, removeItemAction } from '../../store/cardReducer.js';
import './mainpage.css';

const MainPage = () => {

	const dispatch = useDispatch();

	const { filteredCards, limit} = useSelector(state => state.cardReducer);
	const [liked, setLiked] = useState(false);

	const [limitUnit, setLimitUnit] = useState( limit || 12);
	
	function toggleLikedItems(){
		if(!liked){
			setLiked(true);
			dispatch(getWishedItemsAction());
		}else {
			setLiked(false);
			dispatch(getAllItemsAction());
		}
	};

	function removeItems(card){
		dispatch(removeItemAction(card))
	}

	
	return (
		<div className='main'> 
		 	<h1 className='main__title'>PICKWICK</h1>
			<button className='main__button' 
				style={ liked ? {backgroundColor: '#D05278', color: '#fff'} : {backgroundColor: 'transparent', color: '#666666'}}
				onClick={toggleLikedItems}>
				Выбранные товары 
				{liked === true && (
					<img src="../../assets/icons/ok.svg" alt="" className='main__button-img'/>
				)}
			</button>
			{filteredCards.length ? (
			<div className='main__block'>
				{filteredCards?.map(( card, index) => (
					<div className='main__block-item' key={index}>
						<div className='main__item-like--block' onClick={() => { dispatch(setCardWishedAction(card))}}>
							{card?.wished == true ? (
								<img src="../../assets/icons/like-liked.svg" alt="" className='main__like-img' />
							) : (
								<img src="../../assets/icons/like.svg" alt="" className='main__like-img' />
							)}
						</div>
						<button className='main__item-btn--remove' onClick={() => {removeItems(card)}}>
							<img src="../../assets/icons/remove.svg" alt="" className='main__btn-remove--img'/>
						</button>
						<Link to="/card" className='main__item-image--block'  onClick={(e) => {dispatch(setProductCardAction(card))}}>
							<img src={card?.image} alt="" className='main__item-img'/>
						</Link>
						<Link to="/card" className='main__item-info--block' onClick={() => dispatch(setProductCardAction(card))}>
							<h3 className='main__info-title'>{card?.title?.toLowerCase()}</h3>
							<p className='main__info-price'>${card?.price}</p>
						</Link>
					</div>
				))}
			</div>
			) : (
				<div className='main__block'>Нет соответствующих товаров</div>
			)}
			<div className='main__pagination'>
				<div className='main__pagination-limit--block'>
					<span className='main__limit-span'>Элементов на странице: </span>
					<input type="number" min="1" max="20" step="1" value={limitUnit} 
						onChange={(e) => { setLimitUnit(e.target.value);}} 
						className="main__limit-input"
					/>
					<button className='main__limit-btn' onClick={() => {dispatch(setLimitAction(limitUnit));}}>Установить</button>
				</div>
			</div>
		</div>
	  );
};

export default MainPage;