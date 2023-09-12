const btnEl = document.getElementById("btn");
const dobEl = document.getElementById("dob");
const resultEl = document.getElementById("result");

function calculateAge() {
    const dobValue = dobEl.value;
    if (dobValue == " "){
        alert("Please enter your date of birth!");

    } else {
        const age = getAge(dobValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(dobValue){
    const currentDate = new Date();
    //dobValue collected is converted into the dd-mm-yyyy format
    const dobDate = new Date(dobValue);
    let age = currentDate.getFullYear() - dobDate.getFullYear();
    const month = currentDate.getMonth() - dobDate.getMonth();

    /* checks if the current month is less than the DOB month, or if the months are the
    same but the current day is earlier than the DOB day. If either of these conditions
    is true, it means the person hasn't had their birthday yet this year, so it subtracts 1 from the age. */
    if (
        month < 0 ||
        (month === 0 && currentDate.getDate() < dobDate.getDate())
    )
    {
        age--;
    }

    return age;
}

btnEl.addEventListener('click', calculateAge);