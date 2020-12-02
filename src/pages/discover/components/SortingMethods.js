/*

Used Bubble Sort for sorting, I know there are faster methods that I could 
use but just to write a more simple code, I used this method.

*/
const sortAlphabetically = (data) => {
    let sortedArray = data;

    for(var i = 0 ; i < sortedArray.length ; i++) 
        for(var j = 0 ; j < sortedArray.length - 1 ; j++) {
            try {
                if(sortedArray[j].player.fullName.localeCompare(sortedArray[j + 1].player.fullName) > 0) {
                    const tempOB = sortedArray[j];
                    sortedArray[j] = sortedArray[j + 1];
                    sortedArray[j + 1] = tempOB;
                }
            } catch (e) {
                // Handle errors in case of missing data
            }
        }
    
    return sortedArray;
}

const sortMostRun = (data) => {
    let sortedArray = data;

    for(var i = 0 ; i < sortedArray.length ; i++) 
        for(var j = 0 ; j < sortedArray.length - 1 ; j++) {
            try {
                if(parseInt(sortedArray[j].stats[0].battingStats.r) < parseInt(sortedArray[j + 1].stats[0].battingStats.r)) {
                    const tempOB = sortedArray[j];
                    sortedArray[j] = sortedArray[j + 1];
                    sortedArray[j + 1] = tempOB;
                }
            } catch (e) {
                // Handle errors in case of missing data
            }
        }
    
    return sortedArray;
}

const sortMostMatches = (data) => {
    let sortedArray = data;

    for(var i = 0 ; i < sortedArray.length ; i++) 
        for(var j = 0 ; j < sortedArray.length - 1 ; j++) {
            try {
                if(parseInt(sortedArray[j].stats[0].battingStats.m) < parseInt(sortedArray[j + 1].stats[0].battingStats.m)) {
                    const tempOB = sortedArray[j];
                    sortedArray[j] = sortedArray[j + 1];
                    sortedArray[j + 1] = tempOB;
                }
            } catch (e) {
                // Handle errors in case of missing data
            }
        }
    
    return sortedArray;
}

const sortMostWickets = (data) => {
    let sortedArray = data;

    for(var i = 0 ; i < sortedArray.length ; i++) 
        for(var j = 0 ; j < sortedArray.length - 1 ; j++) {
            try {
                if(parseInt(sortedArray[j].stats[0].bowlingStats.w) < parseInt(sortedArray[j + 1].stats[0].bowlingStats.w)) {
                    const tempOB = sortedArray[j];
                    sortedArray[j] = sortedArray[j + 1];
                    sortedArray[j + 1] = tempOB;
                }
            } catch (e) {
                // Handle errors in case of missing data
            }
        }
    
    return sortedArray;
}

export {sortAlphabetically, sortMostRun, sortMostMatches, sortMostWickets};