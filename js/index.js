const loadCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await (res.json());
    displayCategory(data.data.news_category);
}

const displayCategory = users => {
    const newsCategory = document.getElementById('category');
    users.forEach(user => {
        // console.log(user);
        const newsDiv = document.createElement('ul');
        newsDiv.classList.add('li');
        newsDiv.innerHTML = `
            <li onclick="loadNewsDetails('${user.category_id}')">${user.category_name}</li>
        `;
        newsCategory.appendChild(newsDiv);
    })
}

// news category onclick 
const loadNewsDetails = async (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    // console.log(url);
    const res = await fetch(url);
    const data = await (res.json());
    displayNewsDetails(data.data)
}

const displayNewsDetails = (users) => {
    // console.log(users);
    const categoryContainer = document.getElementById('category-news');
    categoryContainer.innerHTML = '';
    users.forEach(user => {
        console.log(user);
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
        <div class="card card-side bg-base-100 p-4 m-5 shadow-xl">
            <img class="h-auto w-1/3" src="${user.image_url}"/>
            <div class="card-body">
                <h2 class="card-title">${user.title}</h2>
                <p>${user.details.slice(0, 330)}</p>
                <div class="flex justify-between">
                    <div class="grid grid-cols-2 items-center justify-items-center">
                        <div>
                            <img class="w-10 rounded-full" src="${user.author.img}">
                        </div>
                        <div>
                            <p><small>${user.author.name ? user.author.name : 'No Author'}</small></p>
                            <p><small>${user.author.published_date ? user.author.published_date : 'No Date here'}</small></p>
                        </div>
                    </div>
                    <div class="grid items-center justify-items-center">
                        <p>View: ${user.total_view ? user.total_view : '00'}</p>
                    </div>
                    <div class="grid items-center justify-items-center">
                        <p>Rating: ${user.rating.number ? user.rating.number : 'No rating'}</p>
                    </div>
                    <div class="flex flex-end">
                        <button class="btn btn-primary">Read more...</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        categoryContainer.appendChild(newsDiv);
    })
}


loadCategory();