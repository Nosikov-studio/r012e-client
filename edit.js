  // const params = new URLSearchParams(window.location.search);

  // Для каждого поля устанавливаем placeholder из параметров, если они есть
  // const name= document.getElementById('name');

// Получаем параметры из URL
  const urlParams = new URLSearchParams(window.location.search);
  const nameParam = urlParams.get('name'); // получаем значение 
  const ageParam = urlParams.get('age'); // получаем значение 
  const idParam = urlParams.get('id'); // получаем значение 
 
 // Находим форму по имени
  const form = document.forms['fmed'];

// Находим input с name="name"
  const inputName = form.elements['name'];
      if (inputName) {
// Устанавливаем placeholder равным значению параметра из URL
        inputName.placeholder = nameParam;
      }

// Находим input с name="age"
  const inputAge = form.elements['age'];
      if (inputAge) {
// Устанавливаем placeholder равным значению параметра из URL
        inputAge.placeholder = ageParam;
      }
