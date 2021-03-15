import * as PostActions from '../post.actions';
import { Users }         from '../models/users';

export type Action  =  PostActions.All;

//Default App State
const defaultState: Users = {
    id: null,
    user: '',
    email: '',
    name: '',
    password: '',
    typeUser: null
}

/// Helper function  to create  new  state object
const  newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

// Reducer function 
export function postReducer(state: Users = defaultState, action: Action){

    console.log(action.type, state);

    switch (action.type) {
        case PostActions.EDIT_USER:
            return newState(state, { user: action.user })
    
        case PostActions.EDIT_NAME:
            return newState(state, { name: action.name })
        
        case PostActions.EDIT_EMAIL:
            return newState(state, { email: action.email })

        case PostActions.EDIT_PASSWORD:
            return newState(state, { password: action.password })

        case PostActions.EDIT_TYPEUSER:
            return newState(state, { typeUser: action.typeUser })

        case PostActions.EDIT_ACTUALLYUSER:
            console.log(action.user);
            return newState(state, { 
                id: action.id,
                user: action.user,
                email: action.email, 
                name: action.name,
                password: action.password,
                typeUser: action.typeUser
             })

        default:
            return state;
    }


}