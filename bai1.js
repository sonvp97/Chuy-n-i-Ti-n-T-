function ChangeMoney() {
    let Amount = document.getElementById("Amount").value;
    let FormC = document.getElementById("Form").value;
    let To = document.getElementById("To").value;
    let Result;

    if (FormC === "USD" && To === "VND") {
        Result = "Result: " + (Amount * 23000) + "Đ";
    }
    else if (FormC === "VND" && To === "USD") {
        Result = "Result: " + (Amount/23000) + "$"}
    else if (FormC === "VND"){
        Result = "Result: " +(Amount) + "Đ"
    }else {
        Result = "Result: " + (Amount) + "$"
    }
    document.getElementById("Result").innerHTML = Result;
}
