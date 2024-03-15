function findChairs(meetingRooms, needed) {
    let chairsTaken = 0;
    let chairsToTake = needed;
    const chairsTakenFromRooms = [];

    for (const room of meetingRooms) {
        const occupants = room[0].split('X').length - 1;
        const chairsInRoom = room[1];

        if (chairsTaken + occupants <= chairsToTake) {
            chairsTaken += occupants;
            chairsTakenFromRooms.push(occupants);
        } else {
            const chairsNeeded = chairsToTake - chairsTaken;
            chairsTakenFromRooms.push(chairsNeeded);
            chairsTaken += chairsNeeded;
        }

        if (chairsTaken >= chairsToTake) {
            break;
        }
    }

    return chairsTakenFromRooms;
}

const meetingRooms = [
    ['XXXXX', 5],
    ['XXXX', 4],
    ['XXX', 3],
    ['XXXXXX', 6] 
];

// Let's say we need 7 chairs
const neededChairs = 7;

const chairsTaken = findChairs(meetingRooms, neededChairs);
console.log(chairsTaken); 
