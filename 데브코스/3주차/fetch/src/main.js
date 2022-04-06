import { request } from "./api.js";
import ProductOptions from "./ProductOptions.js";

const dummyData = [
  {
    optionId: 1,
    optionName: "더미 데이터1",
    optionPrice: 10000,
    stock: 10
  },
  {
    optionId: 2,
    optionName: "더미 데이터2",
    optionPrice: 15000,
    stock: 10
  },
  {
    optionId: 3,
    optionName: "더미 데이터3",
    optionPrice: 10000,
    stock: 0
  }
];

const $target = document.querySelector('#app');

const DEFAULT_PRODUCT_ID = 1;

const fetchOptionData = productId => {
  return request(`/products/${productId}`)
    .then(product => {
      return request(`/product-options?product.id=${product.id}`)
    })
    .then(productOptions => {
      return Promise.all([
        Promise.resolve(productOptions),
        Promise.all(
        productOptions
          .map(productOption => productOption.id)
          .map(id => {
            return request(`/product-option-stocks?productOption.id=${id}`)
          })
        )
      ])
    })
    .then(data => {
      const [productOptions, stocks] = data;
      const optionData = productOptions.map((productOption, i) => {
        const stock = stocks[i][0].stock;
        return {
          optionId: productOption.id,
          optionName: productOption.name,
          optionPrice: productOption.price,
          stock
        }
      })
      console.log(optionData);
    })
}

fetchOptionData(DEFAULT_PRODUCT_ID);
new ProductOptions({
  $target,
  initialState: dummyData,
  onSelect: option => {
    alert(option.optionName);
  }
});
