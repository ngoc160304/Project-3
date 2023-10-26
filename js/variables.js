export const CATEGORYURL = "https://json-project-one.vercel.app/category";
export const PRODUCTURL = "https://json-project-one.vercel.app/products";
export const categorys = document.querySelector("#categorys");
export const inputSearch = document.querySelector("#content-search");
export const buttonSearch = document.querySelector("#search");
export const product = document.querySelector("#products")
export const optionSort = document.querySelectorAll(".type-sort");
export const prev = document.querySelector("#prev");
export const numberPage = document.querySelector("#number-page");
export const next = document.querySelector("#next");
export const requier = {
    page : 1,
    limit : 6,
    q : "",
    s : "",
    order : "",
    category : ""
}