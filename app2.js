function checkAge(name, age) {
   let oldEnoughMsg = `Congrats ${name}! You can drive!`;
   let tooYoungMsg = `Sorry ${name}, you need to wait ${16 - age} year(s) until you can drive`;
    
   if (age < 16) {
       console.log(tooYoungMsg)
    } else {
        console.log(oldEnoughMsg)
    }

} 

checkAge("Matt", 49)

function checkQuad(x, y) {
    if (x > 0 && y > 0) {
        return 1;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;
    } else if (x> 0 && y < 0) {
        return 4;
    } else if (x == 0 && y != 0){
        return "X Axis";
    } else if (x != 0 && y == 0) {
        return "Y Axis";
    } else {
        return "Origin"
    }
}

console.log(checkQuad(11, 1));
console.log(checkQuad(-11, 1));
console.log(checkQuad(-1, -11));


function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a, b, c) {
   let isValid = isValidTriangle(a, b, c);
   if (isValid) {
    if (a == b && b == c) {
       return `Equilateral`;
   } else if (a == b ||  b == c || a==c) {
       return `Isosceles`;
   } else {
       return `Scalene`;
   } 
   }
}

console.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(1, 1, 2));

function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectdAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays = currentAvg;
    let statusMsg;

console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);
console.log(`Average projected use: ${projectedAvg} GB/day`);

    if (currentAvg > projectedAvg) {
        statusMsg = "EXCEEDING";
    }  else if (currentAvg < projectedAvg) {
        statusMsg = "UNDER";
    }  else {
        statusMsg = "AT"
}
console.log(`You are ${statusMsg} your average daily use ${currentAvg} continuing this usage, you'll end up using ${planLimit} - (usage + projectedUsage) GB from your data limit`);


}