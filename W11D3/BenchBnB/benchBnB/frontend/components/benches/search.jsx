import React from 'react';
import BenchMap from '../map/bench_map';
import BenchIndex from './bench_index';

const Search = ({ benches, fetchBenches, updateFilter}) => { 
    return(
        <div>
            <BenchMap benches={benches} updateFilter={updateFilter} />
            <BenchIndex benches={benches} 
                fetchBenches={fetchBenches} 
            />
        </div>
    );
};

export default Search;