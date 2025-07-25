const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response)
})

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();

const vhr = new XMLHttpRequest();

vhr.addEventListener('load', () => {
  console.log(vhr.response);
})
vhr.open('GET', 'https://supersimplebackend.dev/products/first')
vhr.send();