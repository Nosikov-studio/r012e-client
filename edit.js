  const params = new URLSearchParams(window.location.search);

  // Для каждого поля устанавливаем placeholder из параметров, если они есть
  const name= document.getElementById('name');
  if (params.has('name')) {
    name.placeholder = params.get('name');
  }

  const age= document.getElementById('age');
  if (params.has('age')) {
    age.placeholder = params.get('age');
  }

  // получаем id редактируемого юзера
  if (params.has('id')) {
    const id = params.get('id');
  }

  