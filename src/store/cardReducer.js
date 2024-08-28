const GET_CARDS = "GET_CARDS";
const SET_LIMIT = "SET_LIMIT";
const SET_PRODUCT_CARD = "SET_PRODUCT_CARD";
const SET_WISHED="SET_WISHED";
const GET_WISHED_ITEMS = "GET_WISHED_ITEMS";
const GET_ALL_ITEMS = "GET_ALL_ITEMS";
const REMOVE_ITEM = "REMOVE_ITEM";

const defaultState ={    
   cards: [],
   filteredCards: [],
   limit: 12,
   card: {},      
}

export const cardReducer = (state = defaultState, action) => {
    switch(action.type){
        case GET_CARDS: return {...state, cards: action.payload.map((card) =>{ return {...card, wished: false}}), filteredCards: action.payload.slice(0, state.limit).map((card) => { return {...card, wished: false}})};  
        case SET_LIMIT: return {...state, limit: action.payload, filteredCards: state.cards.slice(0, action.payload)};    
        case SET_PRODUCT_CARD: return {...state, card: action.payload};   
		case SET_WISHED: return {...state, cards: state.cards.map((card) => {
			if(action.payload.id === card.id){
				if(card.wished === false){	return {...card, wished: true}}
				if(card.wished === true) { return {...card, wished: false}}
			}
			return card;
			}),
			filteredCards: state.cards.map((card) => {
				if(action.payload.id === card.id){
					if(card.wished === false ){ return {...card, wished: true }}
					if(card.wished === true ){ return {...card, wished: false }}
					
				}
				return card;
			}).slice(0, state.limit)
		}
		case GET_WISHED_ITEMS: return {...state, filteredCards: state.filteredCards.filter((card) => card.wished === true)}
		case GET_ALL_ITEMS: return {...state, filteredCards: state.cards.slice(0, state.limit)}
		case REMOVE_ITEM: return {...state, filteredCards: state.filteredCards.filter((card) => card.id !== action.payload.id), 
			cards: state.cards.filter((card) => card.id !== action.payload.id)}

        default: return state;
    }
}

export const getCardsAction = (payload) => {
    return { type: GET_CARDS, payload}
};

export const setLimitAction = (payload) => {
    return { type: SET_LIMIT, payload}
};

export const setProductCardAction = (payload) => {
    return { type: SET_PRODUCT_CARD, payload}
};
export const setCardWishedAction = (payload) => {
    return { type: SET_WISHED, payload}
};
export const getWishedItemsAction = () => {
    return { type: GET_WISHED_ITEMS}
};
export const getAllItemsAction = () => {
    return { type: GET_ALL_ITEMS}
};

export const removeItemAction = (payload) => {
    return { type: REMOVE_ITEM, payload}
};