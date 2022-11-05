const loadCategory = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await (res.json());
    displayCategory(data.data.news_category);
}

const displayCategory = users => {
    const newsCategory = document.getElementById('category');
    users.forEach(user => {
        console.log(user);
        const newsDiv = document.createElement('ul');
        newsDiv.classList.add('li');
        newsDiv.innerHTML = `
            <li>${user.category_name}</li>
        `;
        newsCategory.appendChild(newsDiv);
    })
}



loadCategory();