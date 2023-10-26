import fetchApi  from "./getApi.js";
import { CATEGORYURL } from "./variables.js";
function drawCategory () {
    fetchApi(CATEGORYURL) 
        .then((data) => {
            let htmls = data.map((item) => {
                return `
                    <div class="category-button" id=${item}>${item}</div>
                `
            }).join("");
            document.querySelector("#categorys").innerHTML = htmls;
        });
}
export default drawCategory;    