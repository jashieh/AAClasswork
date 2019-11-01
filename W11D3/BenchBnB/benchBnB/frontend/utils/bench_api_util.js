export const fetchBenches = () => {
    return $.ajax({
        url: '/api/benches',
        method: 'GET',
        error: (err) => console.log(err)
    });
};