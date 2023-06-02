function createHeader(current) {
    const header = document.createElement('header');
    const ul = document.createElement('ul');

    const liHome = document.createElement('li');
    if (current === 'home') liHome.id = 'current';
    liHome.textContent = 'Home';
    liHome.addEventListener('click', displayHomePage);
    ul.appendChild(liHome);

    const liMenu = document.createElement('li');
    if (current === 'menu') liMenu.id = 'current';
    liMenu.textContent = 'Menu';
    liMenu.addEventListener('click', displayMenuPage);
    ul.appendChild(liMenu);

    const liContact = document.createElement('li');
    if (current === 'contact') liContact.id = 'current';
    liContact.textContent = 'Contact';
    liContact.addEventListener('click', displayContactPage);
    ul.appendChild(liContact);

    header.appendChild(ul);

    return header;
}

function displayHomePage() {
    const body = document.createElement('body');
    body.appendChild(createHeader('home'));

    const mainPage = document.createElement('div');
    mainPage.id = 'main-page';

    const h1 = document.createElement('h1');
    h1.textContent = 'Restaurant';
    mainPage.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = 'The best restaurant in the world';
    mainPage.appendChild(p);

    const button = document.createElement('button');
    button.textContent = 'Menu';
    button.addEventListener('click', displayMenuPage);
    mainPage.appendChild(button);

    body.appendChild(mainPage);

    document.body = body;
}

function displayMenuPage() {
    const body = document.createElement('body');
    body.appendChild(createHeader('menu'));

    const cards = document.createElement('div');
    cards.id = 'cards';

    const card1 = createMenuCard(
        'Tasty Delight',
        'Prepare your taste buds for a mind-boggling experience with this dish that will make your mouth do the happy dance!',
        '$10 (a steal for such deliciousness!)'
    );
    cards.appendChild(card1);

    const card2 = createMenuCard(
        'Mouthwatering Masterpiece',
        'Brace yourself for a culinary adventure like no other. This dish will teleport you to a realm of flavors that\'ll make your tongue shout, "Hallelujah!"',
        '$12 (worth every penny!)'
    );
    cards.appendChild(card2);

    const card3 = createMenuCard(
        'Foodgasmic Surprise',
        "Get ready to have your taste buds doing cartwheels of joy with this dish that's so amazing, it'll leave you wondering if it's secretly made by wizards!",
        '$15 (an investment in happiness!)'
    );
    cards.appendChild(card3);

    const card4 = createMenuCard(
        'Flavor Fiesta',
        'This dish is a party in your mouth! With flavors that will make you want to dance and shout "Yum!", it\'s a guaranteed recipe for a smiling tummy.',
        '$9 (a taste of pure bliss!)'
    );
    cards.appendChild(card4);

    body.appendChild(cards);

    document.body = body;
}

function createMenuCard(title, description, price) {
    const card = document.createElement('div');
    card.className = 'card';

    const h1 = document.createElement('h1');
    h1.textContent = title;
    card.appendChild(h1);

    const p1 = document.createElement('p');
    p1.textContent = description;
    card.appendChild(p1);

    const p2 = document.createElement('p');
    p2.className = 'price';
    p2.textContent = price;
    card.appendChild(p2);

    return card;
}

function displayContactPage() {
    const body = document.createElement('body');
    body.appendChild(createHeader('contact'));

    const cards = document.createElement('div');
    cards.id = 'cards';

    const card1 = creatContactCard('Contact Information', [
        'The Best Restaurant',
        '123 Main Street, Cityville',
        '+1 (555) 123-4567',
        'info@gourmetbistro.com',
    ]);
    cards.appendChild(card1);

    const card2 = creatContactCard('Opening Hours', [
        'Mon-Fri: 11:00 AM - 10:00 PM',
        'Sat-Sun: 10:00 AM - 11:00 PM',
        'Note: Special hours for holidays may apply',
    ]);
    cards.appendChild(card2);

    body.appendChild(cards);

    document.body = body;
}

function creatContactCard(title, items) {
    const card = document.createElement('div');
    card.className = 'card';

    const h1 = document.createElement('h1');
    h1.textContent = title;
    card.appendChild(h1);

    const ul = document.createElement('ul');
    for (let item of items) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    }
    card.appendChild(ul);

    return card;
}

displayHomePage();
