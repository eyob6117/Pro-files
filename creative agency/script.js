const toggle = document.querySelector('.toogle');
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click',() => {
    toggle.classList.toggle('active');
    navigation.classList.toggle('active')
})