import * as APIUtil from '../utils/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = 'RECEIVE_BENCH';


const receiveBenches = (benches) => ({
    type: RECEIVE_BENCHES,
    benches
});

export const receiveBench = ( {bench} ) => ({
    type: RECEIVE_BENCH,
    bench,
});

export const fetchBenches = (filter) => (dispatch) => (APIUtil.fetchBenches(filter)
.then(benches => (dispatch(receiveBenches(benches)))));

export const createBench = bench => dispatch => (
    APIUtil.createBench(bench).then(bench => (
        dispatch(receiveBench(bench))
        ))
        );
        
        
        