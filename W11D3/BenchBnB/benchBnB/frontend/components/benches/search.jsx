import React from 'react';
import BenchMap from '../map/bench_map';
import BenchIndex from './bench_index';

const Search = ({ benches, fetchBenches }) => { 
    return(
        <div>
            <BenchIndex benches={benches} fetchBenches={fetchBenches} />
            <BenchMap benches={benches} />
        </div>
    );
};

export default Search;