import axios from "axios";
const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const decreaseComment = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const immediatelyDelete = (target) => {
  const ul = target.previousSibling.parentNode.parentNode;
  const li = target.previousSibling.parentNode;
  ul.removeChild(li);
  decreaseComment();
};

const handleDelete = async (event) => {
  event.preventDefault();
  const videoId = window.location.href.split("/videos/")[1];
  const target = event.target;
  const respond = await axios({
    url: `/api/${videoId}/deleteComment`,
    method: "POST",
    data: {
      deleteComment: target.previousSibling.innerHTML,
    },
  });
  if (respond.status === 200) {
    immediatelyDelete(target);
  }
};

const addComment = (comment) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const form = document.createElement("form");
  const button = document.createElement("button");
  button.innerHTML = "X";
  form.appendChild(button);
  span.innerHTML = comment;
  form.className = "commentBtnForm";
  button.type = "submit";
  li.appendChild(span);
  li.appendChild(form);
  commentList.prepend(li);
  increaseNumber();
  form.addEventListener("submit", handleDelete);
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  if (response.status === 200) {
    addComment(comment);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commetInput = addCommentForm.querySelector("input");
  const comment = commetInput.value;
  sendComment(comment);
  commetInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
  init();
}
