function calculateAge() {
    var day = parseInt(document.getElementById('dobDay').value);
    var month = parseInt(document.getElementById('dobMonth').value);
    var year = parseInt(document.getElementById('dobYear').value);

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();

    var age = currentYear - year;
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }

    document.getElementById('ageOutput').innerHTML = "Your age is: " + age;
}
