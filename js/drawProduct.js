import fetchApi from "./getApi.js";
import url from "./api.js";
import { product } from "./variables.js";
function drawProduct () {
    const api = url();
    fetchApi(api)
        .then((data) => {
            if(data.length > 0) {
                const htmls = data.map((item) => {
                    return `
                    <div class="product-item">
                        <div class="product-img">
                            <img src=${item.thumbnail} alt=${item.title}/>
                        </div>
                        <div class="content">
                            <div class="title" >${item.title}</div>
                            <div class="detail">
                                <div class="price">${item.price}</div>
                                <div class="quantity">Còn lại : ${item.stock} sp</div>
                            </div>
                        </div>
                    </div>
                    `
                }).join("");
                product.innerHTML = htmls;
            }
            
        }) 
}
export default drawProduct;