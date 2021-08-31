// Code your solution in this file!
function distanceFromHqInBlocks(block){
    let distance;
    if(block > 42){
        distance = block - 42;
    }
    else{
        distance = 42 - block;
    }
    return distance;
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(streetOne, streetTwo){
    let distance;
    if(streetOne > streetTwo){
        distance = streetOne - streetTwo;
        return distance * 264;
    } else{
        distance = streetTwo - streetOne;
        return distance * 264;
    }    
}

function calculatesFarePrice(start, destination){
    let fare;
    let distance = distanceTravelledInFeet(start, destination);
    if(distance <= 400){
        fare = 0;
        return fare;
    } else if(distance > 400 && distance <= 2000){
        fare = (distance - 400) * .02;
        return fare;
    }else if(distance > 2000 && distance < 2500) {
        fare = 25;
        return fare;
    }else {
        return ('cannot travel that far')
    }
}