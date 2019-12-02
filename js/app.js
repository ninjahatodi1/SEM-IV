
const result = document.getElementById('calculate');


const credits = {
  osTheory: 3,
  osPractical: 1,
  tocTheory: 4,
  m4Theory: 4,
  seTheory: 3,
  sePractical: 1,
  dbmsTheory: 4,
  dbmsPractical: 1,
  cl3Practical: 1,
  seminarPractical: 1
}

const { osTheory, osPractical, tocTheory, m4Theory, seTheory, sePractical, dbmsTheory, dbmsPractical, cl3Practical, seminarPractical } = credits;


function grade(g) {
  if (g == 'A+')
    return 10;
  else if (g == 'A')
    return 9;
  else if (g == 'B+')
    return 8;
  else if (g == 'B')
    return 7;
  else if (g == 'C+')
    return 6;
  else if (g == 'C')
    return 5;
  else if (g == 'D')
    return 4;
  else
    return 0;
}



result.addEventListener('click', function()
{
  const m4th = document.getElementById('m4th').value,
  osth =  document.getElementById('osth').value,
  tocth =  document.getElementById('tocth').value,
  dbmsth =  document.getElementById('dbmsth').value,
  seth =  document.getElementById('seth').value,
  sempr =  document.getElementById('sempr').value,
  cl3pr =  document.getElementById('cl3pr').value,
  ospr =  document.getElementById('ospr').value,
  sepr =  document.getElementById('sepr').value,
  dbmspr =  document.getElementById('dbmspr').value;

   
const calculate = ((grade(osth) * osTheory) + (grade(ospr) * osPractical) + (grade(tocth) * tocTheory) + (grade(seth) * seTheory) + (grade(sepr) * sePractical) + (grade(dbmsth) * dbmsTheory) + (grade(dbmspr) * dbmsPractical) + (grade(m4th) * m4Theory) + (grade(sempr) * seminarPractical) + (grade(cl3pr) * cl3Practical));
console.log(calculate);

const sgpa = calculate / 23;
const calulatedsgpa= parseFloat(sgpa).toFixed(2);

alert('Your SGPA is : ' +calulatedsgpa);
 

})
