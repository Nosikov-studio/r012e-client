
const f5 = document.querySelector('.f5')
const r5 = document.querySelector('.result5')

function tb() {

fetch('http://truruki.ru/api')
    .then(response => response.json())
    .then(j => {
      const html = j.map(item => `<tr><td>${item.name}</td><td>${item.age}</td><tr>`).join('');
      r5.innerHTML =`<table> ${html} </table>`;
      
})
}

tb();

const form1 = document.getElementById('form1');
  form1.addEventListener('submit', function(event) {
    event.preventDefault();

  const formData = new FormData(form1); // Сбор данных формы
  const FormDataObject = Object.fromEntries(formData);

  fetch('http://truruki.ru/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      },
    body: JSON.stringify({
      ...FormDataObject,
      views: 0,
    })
  })
    .then(response => response.json())
    .then(j => {
      console.log(j);
      tb(); list(); list2();
      form1.reset(); // очищаем форму
    });
  });

  //************************************************************************** */

  const r6 = document.querySelector('.result6')

function list() {

fetch('http://truruki.ru/api')
    .then(response => response.json())
    .then(j => {
      const html = j.map(item => `<li>${item.name}------${item.age}</li>`).join('');
      r6.innerHTML =`<ul> ${html} </ul>`;
      
})
}

list();

//************************************************************************** */

 const r7 = document.querySelector('.result7')

function list2() {

fetch('http://truruki.ru/api')
    .then(response => response.json())
    .then(j => {
      const html = j.map(item => `<li><a href="/edit.html?id=${item.id}&name=${item.name}&age=${item.age}">${item.name}------${item.age}<a/></li>`).join('');
      r7.innerHTML =`<ul> ${html} </ul>`;
      
})
}

list2();

//************************************************************************** */

 const r8 = document.querySelector('.result8')

function list3() {

fetch('http://truruki.ru/api')
    .then(response => response.json())
    .then(j => {
      const html = j.map(item => `<li><a href="/edit.html?id=${item.id}&name=${item.name}&age=${item.age}">
        ${item.name}------${item.age} 
            <botton id=${item.id} name="delete">
                "Delete" 
            </botton>
        <a/></li>`).join('');
      r8.innerHTML =`<ul> ${html} </ul>`;
      
})
}

list3();