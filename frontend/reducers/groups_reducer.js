import {RECEIVE_GROUPS, RECEIVE_GROUP, REMOVE_GROUP} from '../actions/group_actions'

const groupsReducer = (state={}, action) => {
    Object.freeze(state);
    // let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_GROUPS:
            return action.groups
        case RECEIVE_GROUP:
            return { [action.group.id]: action.group };
        // case REMOVE_GROUP:
        //     delete nextState[action.groupId] 
        //     return nextState;
        default:
            return state;
    }
}

export default groupsReducer;