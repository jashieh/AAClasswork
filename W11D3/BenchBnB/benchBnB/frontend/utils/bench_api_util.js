// export const fetchBenches = () => {
//     return $.ajax({
//         url: '/api/benches',
//         method: 'GET',
//         error: (err) => console.log(err)
//     });
// };

export const fetchBenches = (filter) => {
    return $.ajax({
        url: '/api/benches',
        method: 'GET',
        data: filter,
    });
};

export const createBench = (bench) => {
    return $.ajax({
        url: '/api/benches',
        method: 'POST',
        data: {bench}
    });
};

