const commentsList = document.querySelector('.social__comments');
const bigPictureCommentsShow = document.querySelector('.social__comment-shown-count');
const bigPictureCommentsCounter = document.querySelector('.social__comment-total-count');
const bigPictureCommentsLoader = document.querySelector('.comments-loader');


const createCommentsList = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');
  commentElement.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';

  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

const SHOW_COMMENTS = 5;
let totalComments = 0;
let comments = [];

const renderMoreComments = () => {
  totalComments += SHOW_COMMENTS;

  if (totalComments >= comments.length) {
    bigPictureCommentsLoader.classList.add('hidden');
    totalComments = comments.length;
  } else {
    bigPictureCommentsLoader.classList.remove('hidden');
    bigPictureCommentsLoader.addEventListener('click', onCommentsLoaderClick);
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < totalComments; i++) {
    const comment = createCommentsList(comments[i]);
    fragment.append(comment);
  }

  commentsList.innerHTML = '';
  commentsList.append(fragment);
  bigPictureCommentsShow.textContent = totalComments;
  bigPictureCommentsCounter.textContent = comments.length;
};

const resetCommentsCounter = () => {
  totalComments = 0;
};

const renderComments = (commentsArr) => {
  comments = commentsArr;
  renderMoreComments();
};

function onCommentsLoaderClick () {
  renderComments(comments);
}

export {renderComments, resetCommentsCounter };
