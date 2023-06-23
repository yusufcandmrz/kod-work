import { createStore } from "redux";

const initialState = {
    favoritedJobs: [],
}

const favoritedJobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_JOB':
            if (!state.favoritedJobs.includes(action.payload)) {
                return {
                    ...state,
                    favoritedJobs: [...state.favoritedJobs, action.payload],
                };
            }
            else {
                return state;
            }
        case 'REMOVE_JOB':
            return {
                ...state,
                favoritedJobs: state.favoritedJobs.filter(jobId => jobId !== action.payload),
            };
        default:
            return state;
    }
};

const store = createStore(favoritedJobsReducer);

export default store;

export const addFavoriteJob = (jobId) => {
    return {
        type: 'ADD_JOB',
        payload: jobId,
    };
};

export const removeFavoriteJob = (jobId) => {
    return {
        type: 'REMOVE_JOB',
        payload: jobId,
    };
};