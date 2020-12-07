const newsGrid = document.querySelector('.news-grid');
let quantityNews = 5;
let dataLength = '';

if (newsGrid) {
  const fetchNews = (quantity = 5) => {
  fetch('news.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    dataLength = data.length;
    newsGrid.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
      if (i < quantity) {

        newsGrid.innerHTML += `
          <ol class="header-news__list news-grid">
          <li class="news-grid__item">
            <h3 class="news__title">${data[i].title}</h3>
              <div class="news__author">
                ${data[i].author}
              </div>
              <div class="news__date-time">
                ${data[i].datetime}
                </div>
                <a href ""class="news__details">${data[i].details}
                </a>
              
              </li>
          </ol>
        `;
      }
    }
  });
  };

  fetchNews(quantityNews);
}
 
