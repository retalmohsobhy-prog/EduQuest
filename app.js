const TODAY = new Date(); 
const MS_IN_A_DAY = 24 * 60 * 60 * 1000; 

// Parallel Arrays
const courseNames = [
    "HTML Course",
    "JavaScript",
    "Bootstrap",
    "Python"
];

const courseStatuses = [
    "Open Now",
    "Coming Soon",
    "Open Soon",
    "Closed"
];

const courseLaunchDates = [
    "2026-07-01", 
    "2026-08-15", 
    "2026-07-25", 
    "2026-06-10"  
];

// daysLeft() Function
function daysLeft(dateString) {
    const launchDate = new Date(dateString);
    const differenceInMs = launchDate - TODAY;
    const remainingDays = Math.ceil(differenceInMs / MS_IN_A_DAY);
    return remainingDays;
}

// daysLabel() Function
function daysLabel(days) {
    if (days > 0) {
        return `${days} days left`;
    } else if (days === 0) {
        return "Launching today";
    } else {
        return `Already launched ${Math.abs(days)} days ago`;
    }
}

// filterByStatus() Function
function filterByStatus(statusString) {
    let matchingCourses = [];

    for (let i = 0; i < courseStatuses.length; i++) {
        if (courseStatuses[i] === statusString) {
            matchingCourses.push(courseNames[i]);
        }
    }

    return matchingCourses;
}

// Console Output 
console.log("=========================================");
console.log("      EDUQUEST FEATURED COURSES REPORT   ");
console.log("=========================================");

for (let i = 0; i < courseNames.length; i++) {
    const name = courseNames[i];
    const status = courseStatuses[i];
    const dateStr = courseLaunchDates[i];
    
    const daysRemaining = daysLeft(dateStr);
    const label = daysLabel(daysRemaining);
    
    console.log(`Course ${i + 1}: ${name}`);
    console.log(`- Status: ${status}`);
    console.log(`- Timeline: ${label}`);
    console.log("=========================================");
}

    