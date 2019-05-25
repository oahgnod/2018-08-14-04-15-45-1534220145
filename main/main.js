// Write your cade below:
module.exports = function main(i, j) {
    if ( typeof i === 'number' && typeof j === 'number' && j !== 0){
        return i % j;
    } else {
        return 'Unsupported Operation'
    }
};