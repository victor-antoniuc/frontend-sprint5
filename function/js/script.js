function determineDayOfTheWeek() {
    const dayNumber = document.getElementById('input-field').value;

    const result = document.getElementById('result');

    switch (dayNumber) {
        case '1':
            result.innerHTML = "Monday";
            break
    
        case '2':
            result.innerHTML = "Tuestay";
            break
    
        case '3':
            result.innerHTML = "Wednestay";
            break
    
        case '4':
            result.innerHTML = "Thursday";
            break
    
        case '5':
            result.innerHTML = "Friday";
            break
    
        case '6':
            result.innerHTML = "Saturday";
            break
    
        case '7':
            result.innerHTML = "Sunday";
            break
    
        case '':
            result.innerHTML = "Day is not changed!!!";
            break
            
        case null:
            result.innerHTML = "Day is not changed!!!";
            break  
    
        default:
            result.innerHTML = "This is not day of week!!!";
            break;
    }
}
