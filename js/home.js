
// // =================== home =====================
// // ==============================================
// const loadHome = async () => {
//     const spinner = document.getElementById('spinner');
//     spinner.classList.remove('hidden');
//     const url = `https://openapi.programming-hero.com/api/news/category/01`
//     const res = await fetch(url);
//     const data = await (res.json());
//     displayHome(data.data);
// }

// const displayHome = (users) => {
//     const homeContainer = document.getElementById('home-container');
//     const categoryContainer = document.getElementById('category');
//     // homeContainer.textContent = '';

//     // spinner ==============================
//     pinner.classList.add('hidden');
//     if (homeContainer) {
//         homeContainer.classList.add(visibility)
//     }
//     else {
//         homeContainer.classList.remove(hidden)
//     }

//     for (const user of users) {
//         // console.log(user);
//         const homeDiv = document.createElement('div');
//         homeDiv.innerHTML = `
//              <div class="card card-side bg-base-100 p-4 m-5 shadow-xl">
//             <img class="h-auto w-1/3" src="${user.image_url}"/>
//             <div class="card-body">
//                 <h2 class="card-title">${user.title}</h2>
//                 <p>${user.details.slice(0, 330)}</p>
//                 <div class="flex justify-between">
//                     <div class="grid grid-cols-2 items-center justify-items-center">
//                         <div>
//                             <img class="w-10 rounded-full" src="${user.author.img}">
//                         </div>
//                         <div>
//                             <p><small>${user.author.name ? user.author.name : 'No Author'}</small></p>
//                             <p><small>${user.author.published_date ? user.author.published_date : 'No Date here'}</small></p>
//                         </div>
//                     </div>
//                     <div class="grid items-center justify-items-center">
//                         <p>View: ${user.total_view ? user.total_view : '00'}</p>
//                     </div>
//                     <div class="grid items-center justify-items-center">
//                         <p>Rating: ${user.rating.number ? user.rating.number : 'No rating'}</p>
//                     </div>
//                     <div class="flex flex-end">
//                         <button onclick="loadDetails('${user._id}')" id="news-id" for="my-modal-5" class="btn btn-primary">Read more...</button>
                        
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `;
//         homeContainer.appendChild(homeDiv);
//     }
// }

// loadHome();
