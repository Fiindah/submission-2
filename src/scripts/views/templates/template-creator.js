import CONFIG from '../../globals/config';
// import API_ENDPOINT from "../../globals/api-endpoint";

const createRestoDetailTemplate = (resto) => `
  <h1 class="detail__content">Detail Restaurant</h1>
  <h2 class="detail__title">${resto.name}</h2>
  <img class="detail__poster" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId}" alt="${resto.name}" />
  <div class="detail__info">
  <h3>Information</h3>
    <h4>Kota : ${resto.city}</h4>
    <h4>Alamat : ${resto.address}</h4>
    <h4>Rating : ${resto.rating}</h4>
  <h3>Menu</h3>
    <h4>Makanan : 
    <span><p>${resto.menus.foods
    .map((food) => food.name).join(', ')}</p>
      </span></h4>
    <h4>Minuman : 
    <span><p>${resto.menus.drinks
    .map((drink) => drink.name).join(', ')}</p>
      </span></h4>
  </div>
  <div class="detail__overview">
    <h3>Overview</h3>
    <p>${resto.description}</p>
  </div>
    <div class="reviews">
    <h3>Review</h3>
    <div class="review-list">${resto.customerReviews
    .map((reviews) => `
      <div class="review-item">
      <p class="review-date">${reviews.date}</p>
        <p class="review-user">${reviews.name}</p>
        <p class="review-text">${reviews.review}</p>
      </div>`).join('')}
    </div>
`;

const createRestoItemTemplate = (restos) => `
    <div class="post-list">
      <img class="post-item"
        src="${restos.pictureId ? CONFIG.BASE_IMAGE_URL_MEDIUM + restos.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
        alt="${restos.name}">
      <div class="post-content">
        <ul class="post-item-content">
          <li class="city">Kota <span>${restos.city}<span</li>
          <li class="rating">⭐️ <span>${restos.rating}<span</li>
        </ul>
        <h3 class="post-title">
          <a href="/#/detail/${restos.id}">${restos.name}</a></h3>
          <p class="post-description">${restos.description.substring(0, 100)}...</p>
      </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
