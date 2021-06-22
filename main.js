const menuItem = document.getElementById('menu')
const navigation = document.getElementById('nav')

let showNavigation = () => {
	navigation.classList.toggle('active')
}










menuItem.addEventListener('click', showNavigation)

