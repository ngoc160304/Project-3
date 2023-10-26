import { requier } from "./variables.js";
import { PRODUCTURL } from "./variables.js";
const url = () => {
    let category = "";
    if(requier.category !== "") {
        category = `&category=${requier.category}`;
    }
    let url = `${PRODUCTURL}?q=${requier.q}&_sort=${requier.s}&_order=${requier.order}&_page=${requier.page}&_limit=6${category}`;
    return url;
}
export default url;