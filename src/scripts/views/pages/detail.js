import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="detail" class="detail"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoran = await TheRestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#detail');
    restoContainer.innerHTML = createRestoDetailTemplate(restoran.restaurant);

    /**  const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
* */
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: restoran,
    });
  },
};

export default Detail;
