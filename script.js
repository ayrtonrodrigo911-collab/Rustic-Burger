





// Banco de dados do seu cardápio
const menuData = {
    "burgers": [
        { name: "Rustic Classic", price: "R$28,00", desc: "Pão brioche artesanal, blend 180g, queijo cheddar...", img: "img/Buger-coca.jpeg" },
        { name: "Rustic Calabresa", price: "R$34,00", desc: "Para amantes de calabresa: pão brioche, 180g de blend...", img: "img/R_calabresa.jpeg" },
        { name: "Rustic Queijo", price: "R$32,00", desc: "O poder do fogo: 2x queijo smash 90g...", img: "img/R_queijo.jpeg" }
    ],
    "hot-dogs": [
        { name: "Hot Dog Maçaricado", price: "R$19,99", desc: "Salsicha premium, queijo coalho maçaricado na hora...", img: "img/MASARICADO.jpeg" },
        { name: "Hot Dog Tradicional", price: "R$16,00", desc: "Salsicha premium, mostarda, ketchup, batata palha...", img: "img/hot 15.jpeg" },
    ],
    "combos": [
        { name: "Combo Barca M", price: "R$57,00", desc: "2 Cheese Burgers + Batata com Cheddar e Bacon + Bebida...", img: "img/barca-m.jpg" },
        { name: "Combo Batata Frita", price: "R$57,00", desc: "2 Cheese Burgers + Batata com Cheddar e Bacon + Bebida...", img: "img/batata combo.jpeg"},
    ],
    "pratos": [
        { name: "Prato da Casa", price: "R$25,00", desc: "Opção executiva completa com o sabor rustic...", img: "img/picanha.jpg" },
        {name: "Prato da Casa", price: "R$25,00", desc: "Opção executiva completa com o sabor rustic...", img: "img/frango-grelhado.jpg" },
    ],
    
};

const container = document.getElementById('menu-products');
const buttons = document.querySelectorAll('.category-btn');

function showMenu(category) {
    container.innerHTML = ""; // Limpa a lista atual
    
    menuData[category].forEach(item => {
        const card = `
            <div class="product-card">
                <div class="product-img" style="background-image: url('${item.img}')">
                    <span class="price-tag">${item.price}</span>
                </div>
                <div class="product-info">
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
};

// Evento de clique
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-category');
        showMenu(category);
    });
});

// Começa com burgers ativo
showMenu('burgers')

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.card, .product-card, .testimonial-card').forEach((el)=>{

    gsap.from(el,{
        opacity:0,
        y:50,
        duration:1,
        ease:"power3.out",

        scrollTrigger:{
            trigger:el,
            start:"top 85%"
        }
    });

});

window.addEventListener("load", () => {

    gsap.from("#logoCenter",{
        opacity:0,
        scale:0.5,
        duration:1,
        ease:"power3.out"
    });

    gsap.from(".badge",{
        opacity:0,
        y:-30,
        duration:1,
        delay:0.3,
        ease:"power3.out"
    });

    gsap.from("#titulo",{
        opacity:0,
        y:80,
        duration:1.2,
        delay:0.5,
        ease:"power4.out"
    });

    gsap.from(".description",{
        opacity:0,
        y:50,
        duration:1,
        delay:0.8,
        ease:"power3.out"
    });

    // BOTÃO
    gsap.from(".btn-main",{
        y:50,
        duration:1,
        delay:0.8,
        ease:"power1.out"
    });

});
const btnCardapio =
document.getElementById("btn-cardapio");

btnCardapio.addEventListener("click", () => {

    const section =
    document.getElementById("cardapio");

    window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
    });

});