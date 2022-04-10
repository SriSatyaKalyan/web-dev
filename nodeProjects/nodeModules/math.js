//DEFINING THE FUNCTIONS AND THEN EXPORTING THEM IS ONE WAY
const add = (x, y) => x+y;
const PI = 3.14159;
const square = x => x * x;

//FAIRLY NEWER VERSION OF EXPORTING
// const math = {
//     add: add,
//     PI: PI,
//     square: square
// }

// module.exports = math;

//OLDER VERSION OF EXPORTING but clunky
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

//ANOTHER SHORTER SYNTAX TO EXPORT
exports.add = add;
exports.PI = PI;
exports.square = square;

//--------------------------------------------------

//ANOTHER VERSION OF DEFINING AND EXPORTING FUNCTIONS
// module.exports.add = (x, y) => x+y;
// module.exports.PI = 3.14159;
// module.exports.square = x => x * x;