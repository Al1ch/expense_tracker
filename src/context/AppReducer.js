export default (state, action) => {
    switch(action.type){ // Les différentes action qu'on peut mener
        case 'DELETE_TRANSACTION': //Pour le cas de DeleteTransaction
            return {
                ...state, //on garde les ancienne state
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload) //on va juste garder les transaction qui sont pas = à l'iD supprimer

            }
        default:
            return state;
    }
}
