import oatmeal from './img/oatmeal.jpg';
import waffle from './img/waffle-syrup.jpg';
import bagel from './img/bagel.jpg';



function initHome() {
    
    let home = document.createElement('div');

    home.classList.add('container');
    home.setAttribute('id', 'homePage');

    let section1Text = S1P1Text();
    home.appendChild(createSection1(section1Text, buildCarousel()));
    home.appendChild(createSection2());
    home.appendChild(createSection3());
    
    return home;
}

function buildHome() {
    let pageContent = document.getElementById('page-content');
    let home = document.createElement('div');

    pageContent.textContent = "";

    home.classList.add('container');
    home.setAttribute('id', 'homePage');

    let section1Text = S1P1Text();
    home.appendChild(createSection1(section1Text, buildCarousel()));
    home.appendChild(createSection2());
    home.appendChild(createSection3());

    pageContent.appendChild(home);
    
    return home;
}



function createSection1(text, carouselContent) {
    let section1 = document.createElement('div');
    
    let section1TextSection = document.createElement('div');
    let section1Carousel = document.createElement('div');
    let section1H1 = document.createElement("h1");
    let section1P = document.createElement("p");
    let section1PText = document.createTextNode(text);
    let section1H1Text = document.createTextNode("Breakfast, Brunch, & Lunch");

    section1.classList.add('row');
    
    section1TextSection.classList.add("col-6");
    section1Carousel.classList.add("col-5");
    section1Carousel.setAttribute("id", "carousel-col");


    section1H1.classList.add('display-4');
    section1H1.appendChild(section1H1Text);
    section1P.appendChild(section1PText);

    section1Carousel.appendChild(carouselContent);
    section1TextSection.append(section1H1, section1P);

    section1.append(section1TextSection, section1Carousel);
    
    return section1;
}

function createSection2() {
    let section2 = document.createElement('div');
    let p = document.createElement('p');

    section2.classList.add("row");
    p.textContent = `As you enter Sunrise Delights, the inviting aroma of freshly brewed coffee fills the air, 
    welcoming you to a cozy and vibrant atmosphere. Our friendly staff greets you with genuine smiles, eager to make your breakfast experience unforgettable. 
    With our commitment to using only the highest quality ingredients, you can indulge in guilt-free delights that nourish both your body and soul.
    From organic fruits bursting with natural sweetness to farm-fresh eggs and locally sourced vegetables, 
    each ingredient is carefully selected to ensure a burst of flavors that leave you craving for more. 
    At Sunrise Delights, we believe that breakfast is not just a meal; it's an opportunity to indulge in culinary artistry, 
    to connect with loved ones, or to savor a quiet moment of solitude. 
    Join us and embark on a culinary journey that will make your mornings brighter, tastier, and truly delightful.`

    section2.appendChild(p);
    
    return section2;
}

function createSection3() {
    let section3 = document.createElement('div');
    let display4 = document.createElement('div');
    let p = document.createElement('p');

    section3.classList.add("row");
    display4.classList.add('display-4');

    display4.textContent = `A fully stocked breakfast bar - All for you`
    p.textContent = `At Sunrise Delights, we believe that a well-crafted breakfast experience is incomplete without a wide selection of beverages to accompany your meal. 
    Our breakfast bar boasts an impressive array of refreshing and invigorating options, catering to every taste and preference. 
    For those seeking a revitalizing boost, our freshly squeezed juices burst with vibrant flavors, sourced from the juiciest fruits nature has to offer. 
    If you prefer a classic morning indulgence, our baristas skillfully prepare an assortment of artisanal coffees, from velvety cappuccinos to rich and bold espressos. 
    For a touch of elegance, our collection of loose-leaf teas offers a journey through fragrant blends and soothing aromas. 
    And for those looking to elevate their breakfast experience, our carefully curated selection of brunch cocktails will delight your senses, with mimosas, bellinis, 
    and Bloody Marys crafted with the finest spirits and fresh garnishes. At Sunrise Delights, we understand that beverages are the perfect complement to a delectable meal, 
    and our extensive drink options ensure that your morning is infused with a perfect balance of flavors and enjoyment.`;

    section3.append(display4, p);


    return section3;
}

function S1P1Text() {
    let textcontent = `Welcome to Sunrise Delights, where every morning begins with a burst of flavor and a sip of perfection. 
    Nestled in the heart of the city, our breakfast and brunch restaurant embraces the art of combining fresh, 
    locally-sourced ingredients to create dishes that awaken your taste buds. Whether you crave a hearty omelette, 
    fluffy pancakes, or a satisfying avocado toast, our skilled chefs craft each plate with passion and precision. 
    And to complement your meal, we take pride in serving the finest aromatic coffees from around the world, brewed to perfection.`

    return textcontent;
}

function buildCarousel() {

    let carouselContainer = document.createElement('div');
    let breakfastPictures = document.createElement('div');
    let carouselInner = document.createElement('div');
    let carouselItem1 = document.createElement('div');
    let carouselItem2 = document.createElement('div');
    let carouselItem3 = document.createElement('div');
    let carouselItem1Img = document.createElement('img');
    let carouselItem2Img = document.createElement('img');
    let carouselItem3Img = document.createElement('img');

    carouselContainer.setAttribute('id', 'carousel-container');

    breakfastPictures.classList.add('carousel', 'slide');
    breakfastPictures.setAttribute('data-bs-ride', 'carousel');

    carouselInner.classList.add('carousel-inner');

    carouselItem1.classList.add('carousel-item', 'active');
    carouselItem2.classList.add('carousel-item');
    carouselItem3.classList.add('carousel-item');

    carouselItem1Img.classList.add('d-block', 'w-100');
    carouselItem2Img.classList.add('d-block', 'w-100');
    carouselItem3Img.classList.add('d-block', 'w-100');

    carouselItem1Img.setAttribute('src', waffle);
    carouselItem2Img.setAttribute('src', oatmeal);
    carouselItem3Img.setAttribute('src', bagel);

    carouselItem1.appendChild(carouselItem1Img);
    carouselItem2.appendChild(carouselItem2Img);
    carouselItem3.appendChild(carouselItem3Img);

    carouselInner.append(carouselItem1, carouselItem2, carouselItem3);
    breakfastPictures.appendChild(carouselInner);
    carouselContainer.appendChild(breakfastPictures);
    
    

    return carouselContainer;
}

export {initHome, buildHome};