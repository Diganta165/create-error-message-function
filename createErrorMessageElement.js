function errorMessageFunction(parentElementId, errorId, errorMessage) {
    let errorTxtDiv = elementMaker("div", ["s040F_error_txt_wrapper"], `${errorId}`);
    let errorTxtP = elementMaker("p", ["s040F_error_txt"]);
    errorTxtP.innerText = `${errorMessage}`;
    errorTxtDiv.appendChild(errorTxtP);
    document.getElementById(`${parentElementId}`).appendChild(errorTxtDiv);
};

// .s040F_error_txt_wrapper {
//     margin-top: 5px;
//     margin-bottom: 5px
// }

// .s040F_error_txt {
//     font-size: 12px;
//     font-weight: 400;
//     color: #ff0000
// }