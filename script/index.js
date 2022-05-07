const applyBtn = document.querySelector(".apply-button");
const dialogForm = document.querySelector(".dialog-form");
const cancelButton = document.querySelector(".cancel-button");
const submitButton = document.querySelector(".submit-application");

applyBtn.onclick = () => {
  dialogForm.open ? dialogForm.close() : dialogForm.show();
};

cancelButton.onclick = () => {
  dialogForm.close();
};

submitButton.onclick = () => {
  dialogForm.close();
};
