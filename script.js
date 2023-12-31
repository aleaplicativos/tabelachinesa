function calculateGender() {
  const birthDate = new Date(document.getElementById('birthDate').value);
  const conceptionDate = new Date(document.getElementById('conceptionDate').value);

  const lunarAge = calculateLunarAge(birthDate);

  if (lunarAge < 18) {
      alert("Sua idade lunar precisa ser igual ou maior que 18 para usar a tabela chinesa.");
      return;
  }

  const gender = determineGender(lunarAge, conceptionDate);

  displayResult(gender);
}

function calculateLunarAge(birthDate) {
  const currentDate = new Date();
  const birthMonth = birthDate.getMonth() + 1;

  let lunarAge = currentDate.getFullYear() - birthDate.getFullYear();

  if (!(birthMonth === 1 || birthMonth === 2)) {
      lunarAge += 1;
  }

  return lunarAge;
}

function determineGender(lunarAge, conceptionDate) {
  const conceptionMonth = conceptionDate.getMonth() + 1;

  const genderTable = {
      18: {
          1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'M', 11: 'M', 12: 'M',
      },
      19: {
          1: 'M', 2: 'F', 3: 'M', 4: 'F', 5: 'F', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'M', 11: 'F', 12: 'F',
      },
      20: {
          1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
    },


    21: {
      1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
22: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
23: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
24: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
25: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
26: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
27: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
28: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
29: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
30: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
31: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
32: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
33: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
34: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
35: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
36: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
37: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
38: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
39: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
40: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
41: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
42: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
43: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
44: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},
45: {
  1: 'F', 2: 'M', 3: 'F', 4: 'M', 5: 'M', 6: 'M', 7: 'M', 8: 'M', 9: 'M', 10: 'F', 11: 'M', 12: 'M',
},


      // Adicione outras idades conforme necessário
  };

  return genderTable[lunarAge][conceptionMonth];
}

function displayResult(gender) {
  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = '';

  const message = document.createElement('p');
  message.textContent = `Parabéns! Provavelmente você terá um${gender === 'M' ? ' lindo Menino' : 'a linda Menina'}.`;

  const emoji = document.createElement('span');
  emoji.textContent = gender === 'M' ? ' 👶' : ' 👧';

  resultContainer.appendChild(message);
  resultContainer.appendChild(emoji);
}
