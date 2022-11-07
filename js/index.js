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

// home container =================================
const loadHome = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch(url);
    const data = await (res.json());
    displayHome(data.data);
}

const displayHome = (users) => {
    // console.log(users);
    const homeContainer = document.getElementById('home-container');
    homeContainer.textContent = '';
    for (const user of users) {
        // console.log(user);
        const homeDiv = document.createElement('div');
        homeDiv.innerHTML = `
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
                        <button onclick="loadDetails('${user._id}')" id="news-id" for="my-modal-5" class="btn btn-primary">Read more...</button>
                        
                    </div>
                </div>
            </div>
        </div>
        `;
        homeContainer.appendChild(homeDiv);
    }
}

loadHome();


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
                        <button onclick="loadDetails('${user._id}')" id="news-id" for="my-modal-5" class="btn btn-primary">Read more...</button>
                        
                    </div>
                </div>
            </div>
        </div>
        `;
        categoryContainer.appendChild(newsDiv);
    })
}


const loadDetails = async (details) => {
    console.log(details);
    const url = `https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`;
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.data[0]);
}

const displayDetails = (users) => {
    console.log(users);
    const newsId = document.getElementById('news-id');

    const containerDiv = document.createElement('containerDiv');
    containerDiv.innerHTML = `
        <input type="checkbox" id="my-modal-5" class="modal-toggle" />
        <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
            <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div class="modal-action">
            <label for="my-modal-5" class="btn">Yay!</label>
            </div>
        </div>
        </div>
        `;
    newsId.appendChild(containerDiv);

}

loadCategory();