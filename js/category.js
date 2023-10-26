import drawCategory from "./drawCategory.js";
import drawProduct from "./drawProduct.js";
import fetchApi from "./getApi.js";
import resetUrl from "./resetUrl.js";
import { CATEGORYURL, categorys, requier, inputSearch } from "./variables.js";
import { resetPagingButton } from "./product.js";
drawCategory();
export const resetButton = () => {
    document.querySelectorAll(".category-button").forEach((item)=> {
        item.style.background = "#ffd400";
    });
}
fetchApi(CATEGORYURL)
    .then((data) => {
        categorys.querySelectorAll(".category-button").forEach((item) => {
            item.addEventListener("click", () => {
                resetButton();
                item.style.background = "#57C5B6";
                requier.category = item.innerText;
                resetUrl();
                resetPagingButton();
                // requier.s = "";
                // requier.page = 1;
                // requier.order = "";
                // optionSort.value = "mac-dinh";
                // numberPage.innerText = 1;
                requier.q = "";
                inputSearch.value = "";
                    drawProduct();
            });
        });

    })