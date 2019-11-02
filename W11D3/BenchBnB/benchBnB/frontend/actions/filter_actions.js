import { fetchBenches } from "./bench_actions";

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
export const UPDATE_FILTER = 'UPDATE_FILTER';

export const updateBounds = bounds => ({
    type: updateBounds,
    bounds
});

export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
});

export const updateFilter = (filter, value) => {
    return (dispatch, getState) => {
        dispatch(changeFilter(filter, value));
        return fetchBenches(getState().ui.filter)(dispatch);
    };
};


  
