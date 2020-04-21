import moment from "moment";

export default (state, current) => {
    return state.filter(workout => current.isSame(moment(workout.dateCreated),'day')
    );
};