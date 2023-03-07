const data = JSON.parse(dataInfo);

const content = document.querySelector('.content');

data.forEach(element => {
    const facts = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('h2');
    const fact = document.createElement('p');


    img.src = element.image;
    title.textContent = element.title;
    fact.textContent = element.fact;

    content.appendChild(facts);
    facts.appendChild(title);
    facts.appendChild(fact);
    facts.appendChild(img);

    content.style.marginLeft = '20px';
    content.style.marginRight = '20px';

    img.style.width = '300px';
    img.style.alignContent = 'center';
    img.style.paddingTop = '20px';

    title.style.textAlign = 'center';
    title.style.paddingTop = '10px';
    title.style.fontFamily = 'Raleway', 'sans-serif';
    title.style.color = '#2F4F4F';

    fact.style.textAlign = 'center';
    fact.style.paddingLeft = '20px';
    fact.style.paddingRight = '20px';
    fact.style.fontFamily = 'Raleway', 'sans-serif';

    facts.style.display = 'flex';
    facts.style.flexDirection = 'column';
    facts.style.alignItems = 'center';
    facts.style.paddingBottom = '40px';
    facts.style.border = '4px solid #008080'
    facts.style.backgroundColor = '#F5FFFA';



});