function distanceFromHqInBlocks(destination) {
    return Math.abs(destination - 42);
}

function distanceFromHqInFeet (destination) {
    return distanceFromHqInBlocks(destination) * 264;
}

function distanceTravelledInFeet (start, destination) {
    return (Math.abs(start - destination) * 264);
}

function calculatesFarePrice (start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    }
    else if (distanceTravelledInFeet(start, destination) < 2000) {
        return 0.02 * (distanceTravelledInFeet(start, destination) - 400);
    }
    else if (distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    }
    else return 'cannot travel that far';
}