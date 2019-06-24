const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const showSuccess = document.getElementsByClassName("show-success");
const modalClose1 = modalMain.getElementsByClassName("modal__close");
const modalClose2 = modalSuccess.getElementsByClassName("modal__close");

modalMain.className = "modal modal_active";

showSuccess[0].onclick = function() {
    modalMain.className = "modal";    
    modalSuccess.className = "modal modal_active";
};

modalClose1[0].onclick = function() {
    modalMain.className = "modal";     
};

modalClose2[0].onclick = function() {
    modalSuccess.className = "modal";
};