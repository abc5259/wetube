import axios from "axios";
const commentBtnForm = document.getElementsByClassName("commentBtnForm");
const commentBtn = document.getElementsByClassName("commentBtn");
const commentNumber2 = document.getElementById("jsCommentNumber");

const decreaseComment = () => {
  commentNumber2.innerHTML = parseInt(commentNumber2.innerHTML, 10) - 1;
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

const init = () => {
  for (let i = 0; i < commentBtnForm.length; i++) {
    commentBtnForm[i].addEventListener("submit", handleDelete);
  }
};

if (commentBtnForm) {
  init();
}
