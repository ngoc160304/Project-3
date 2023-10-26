import { requier, numberPage, optionSort } from "./variables.js";
const resetUrl = () => {
    requier.page = 1;
    requier.s = "";
    requier.order = "";
    numberPage.innerText = 1;
    for(let i = 0; i < optionSort.length; i++) {
        if(i == 0) {
            optionSort[i].checked = true;
        }
        else {
            optionSort[i].checked = false;
        }
    }
}
export default resetUrl;