function bajarnav(){
	let navegacion = document.querySelector(".navegacion");
	let li = document.querySelectorAll(".contenedor-opt li");
	let a = document.querySelectorAll(".contenedor-opt li a");
	navegacion.classList.toggle("abajo", scrollY>0);
	console.log(scrollY);
	for (var i=0; i < li.length; i++) {
		a[i].classList.toggle("letracolor",scrollY>0);
		li[i].classList.toggle("fondocolor",scrollY>0);
	}
};
window.addEventListener('scroll', bajarnav);
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");
const opt5 = document.getElementById("opt5");
const a1 = document.getElementById("opt1-letra");
const a2 = document.getElementById("opt2-letra");
const a3 = document.getElementById("opt3-letra");
const a4 = document.getElementById("opt4-letra");
const a5 = document.getElementById("opt5-letra");
opt1.addEventListener("mouseenter", function() {
	opt1.classList.toggle("fondoon", scrollY>0);
	opt1.classList.toggle("fondooff", scrollY<=0);
	a1.classList.toggle("letraon", scrollY>0);
	a1.classList.toggle("letraoff", scrollY<=0);
}, true);
opt1.addEventListener("mouseout", function() {
	opt1.classList.remove("fondoon");
	opt1.classList.remove("fondooff");
	a1.classList.remove("letraon");
	a1.classList.remove("letraoff");
}, true);
opt2.addEventListener("mouseenter", function() {
	opt2.classList.toggle("fondoon", scrollY>0);
	opt2.classList.toggle("fondooff", scrollY<=0);
	a2.classList.toggle("letraon", scrollY>0);
	a2.classList.toggle("letraoff", scrollY<=0);
}, true);
opt2.addEventListener("mouseout", function() {
	opt2.classList.remove("fondoon");
	opt2.classList.remove("fondooff");
	a2.classList.remove("letraon");
	a2.classList.remove("letraoff");
}, true);
opt3.addEventListener("mouseenter", function() {
	opt3.classList.toggle("fondoon", scrollY>0);
	opt3.classList.toggle("fondooff", scrollY<=0);
	a3.classList.toggle("letraon", scrollY>0);
	a3.classList.toggle("letraoff", scrollY<=0);
}, true);
opt3.addEventListener("mouseout", function() {
	opt3.classList.remove("fondoon");
	opt3.classList.remove("fondooff");
	a3.classList.remove("letraon");
	a3.classList.remove("letraoff");
}, true);
opt4.addEventListener("mouseenter", function() {
	opt4.classList.toggle("fondoon", scrollY>0);
	opt4.classList.toggle("fondooff", scrollY<=0);
	a4.classList.toggle("letraon", scrollY>0);
	a4.classList.toggle("letraoff", scrollY<=0);
}, true);
opt4.addEventListener("mouseout", function() {
	opt4.classList.remove("fondoon");
	opt4.classList.remove("fondooff");
	a4.classList.remove("letraon");
	a4.classList.remove("letraoff");
}, true);
opt5.addEventListener("mouseenter", function() {
	opt5.classList.toggle("fondoon", scrollY>0);
	opt5.classList.toggle("fondooff", scrollY<=0);
	a5.classList.toggle("letraon", scrollY>0);
	a5.classList.toggle("letraoff", scrollY<=0);
}, true);
opt5.addEventListener("mouseout", function() {
	opt5.classList.remove("fondoon");
	opt5.classList.remove("fondooff");
	a5.classList.remove("letraon");
	a5.classList.remove("letraoff");
}, true);
function aparecer(){
	let pBajar = document.querySelectorAll(".bajar");
	let scrollTop = document.documentElement.scrollTop;
	for( var i = 0; i < pBajar.length; i++){
		let altura = pBajar[i].offsetTop;
		if (altura + 150 < scrollTop) {
			pBajar[i].style.opacity = 1;
			pBajar[i].classList.add("animar");
			console.log(altura);
			console.log(scrollTop);
		}
	}
};
window.addEventListener('scroll', aparecer);
function aparecerpde(){
	let pdescroll = document.querySelectorAll(".bajarpde");
	let stpde = document.documentElement.scrollTop;
	for( var i = 0; i < pdescroll.length; i++){
		let distancia = pdescroll[i].offsetTop;
		if (distancia -500 < stpde) {
			pdescroll[i].style.opacity = 1;
			pdescroll[i].classList.add("animar");
		}
	}
}
document.querySelectorAll('.submenu .lista-submenu li').forEach((elemento)=>{
	elemento.addEventListener('mouseenter', (e) =>{
		document.querySelectorAll('.submenu .contenedor-categorias .imagen').forEach((categoria)=>{
			categoria.classList.remove('activo');
			if(categoria.dataset.categoria == e.target.dataset.categoria){
				categoria.classList.add('activo');
			}
		});
	});
});
const navToggle = document.querySelector(".nav-toggle");
const contenedorOpt = document.querySelector(".contenedor-opt");
navToggle.addEventListener("click", () => {
	contenedorOpt.classList.toggle("visible");
});