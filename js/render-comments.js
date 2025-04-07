const commentsList = document.querySelector('.social__comments');

const createCommentsList = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');
  commentElement.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';

  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

const renderComments = (comments) => {
  commentsList.innerHTML = '';
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < comments.length; i++) {
    const comment = createCommentsList(comments[i]);
    fragment.append(comment);
  }
  commentsList.append(fragment);
};

export {renderComments};
