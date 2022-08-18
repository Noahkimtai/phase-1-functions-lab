// Code your solution in this file!
let hqBlock = 42;
function distanceFromHqInBlocks(customerBlock){
    return Math.abs(customerBlock-hqBlock)
}
function distanceFromHqInFeet(customerBlock){
   
    return Math.abs(customerBlock-hqBlock)*264
}
function distanceTravelledInFeet(point1, point2){
    return Math.abs(point2-point1)*264
}

function calculatesFarePrice(point1, point2){
    let distance = distanceTravelledInFeet(point1,point2)
    if (distance<400){
        return 0
    }
    else if(distance >400 && distance <2000 ){
        return (distance-400)*2/100
    }
    else if(distance>2000 && distance<2500){
        return 25
    }
    else if(distance>2500){
        return 'cannot travel that far'
    }
}
