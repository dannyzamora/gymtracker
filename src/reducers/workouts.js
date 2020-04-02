const workoutsReducer = (state,action) => {
    switch(action.type){
        case 'ADD_WORKOUT':
            return [
                ...state,
                {
                    name:action.name,
                    muscle:action.muscle,
                    description:action.description
                }
            ]
        case 'REMOVE_WORKOUT': 
        return state.filter(workout=> workout.name !== action.name)
        case 'POPULATE_WORKOUTS':
            return action.workouts;
        default:
            return state;

    }
}

export {workoutsReducer as default};