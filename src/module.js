function pageLoad() {
    const img = document.createElement('img');
    img.src = 'image.jpg';
    img.alt = 'Restaurant';
    img.style.height = '200px';

    const h1 = document.createElement('h1');
    h1.textContent = 'Our Restaurant';

    const p = document.createElement('p');
    p.textContent = 'This restaurant is really amazing';

    const contentDiv = document.getElementById('content');

    contentDiv.appendChild(img);
    contentDiv.appendChild(h1);
    contentDiv.appendChild(p);
    console.log('Page load function');
}

export { pageLoad };
