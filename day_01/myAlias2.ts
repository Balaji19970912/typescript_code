type Point = {
    x: number,
    y: number
}

function getCoordinates(pt:Point) {
    console.log('X Coordinate = ', pt.x);
    console.log('X Coordinate = ', pt.y);
}

getCoordinates({x:5,y:7})