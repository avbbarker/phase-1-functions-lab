function distanceFromHqInBlocks(customerStreet) {
    if (customerStreet > 42) 
        return customerStreet - 42
    else
        return 42 - customerStreet
}

function distanceFromHqInFeet(customerStreet) {
    return distanceFromHqInBlocks(customerStreet) * 264;
}
function distanceTravelledInFeet(start, end) {
    if (start > end)
        return (start - end) * 264
    else
        return (end - start) * 264
}
function calculatesFarePrice (start, end) {
    const distance = distanceTravelledInFeet(start, end);
    
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400);
    } else if (distance > 2000 && distance <=2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}
