import drawProduct from "./drawProduct.js";
import { inputSearch, buttonSearch, requier } from "./variables.js";
import { optionSort, prev, numberPage, next } from "./variables.js";
import resetUrl from "./resetUrl.js";
import { resetButton } from "./category.js";
import fetchApi from "./getApi.js";
import url from "./api.js";
export const resetPagingButton = () => {
    next.style.background = "#ffd400";
    prev.style.background = "#ffd400";
}
drawProduct();
// Chức năng tìm kiếm
const search = () => {
    buttonSearch.addEventListener("click", () => {
        requier.q = inputSearch.value;
        drawProduct();
        resetUrl();
        requier.category = "";
        resetButton();
        resetPagingButton()
    })
    inputSearch.addEventListener("keydown", (e) => {
        resetButton()
        requier.category = "";
        requier.category = "";
        if (e.key === "Enter") {
            resetUrl();
            requier.q = inputSearch.value;
            drawProduct();
            resetPagingButton();
        }
    })
}
search();

// Chức năng sắp xếp sản phẩm
const sort = () => {
    let sort = optionSort;
    console.log(sort);
    sort.forEach((item) => {
        item.addEventListener("click", (e) => {
            const text = e.target.value;
            if (text === "mac-dinh") {
                requier.s = "";
                requier.order = "";
                drawProduct();
            }
            else if (text === "gia-thap-den-cao") {
                requier.s = "price";
                requier.order = "asc";

                drawProduct();
            }
            else if (text === "gia-cao-den-thap") {
                requier.s = "price";
                requier.order = "desc";
                drawProduct();
            }
            else {
                requier.s = "discountPercentage";
                requier.order = "desc";
                drawProduct();
            }
        })
    })

};
sort();

// Phân trang sản phẩm

const paging = () => {
    prev.addEventListener("click", () => {
        if (numberPage.innerText > 1) {
            prev.style.background = "#57C5B6";
            next.style.background = "#ffd400";
            requier.page = requier.page - 1;
            numberPage.innerText = requier.page;
            drawProduct();
        }
    });
    next.addEventListener("click", () => {
        requier.page = requier.page + 1;
        prev.style.background = "#ffd400";
        fetchApi(url())
            .then((data) => {
                if (data.length != 0) {
                    numberPage.innerHTML = requier.page;
                    next.style.background = "#57C5B6";
                }
                if(data.length === 0) {
                    requier.page = requier.page - 1;
                }
            })
        drawProduct();
    })
}
paging()