import dialogPolyfill from 'dialog-polyfill';

const dialog = document.querySelector('#dialog');
dialogPolyfill.registerDialog(dialog);

const commentsList = document.querySelector('#comment-list');

const displayComments = (e) => {
  const showId = e.target.parentNode.parentNode.id;
  const comment = document.createElement('li');
  comment.className = 'comment';
  comment.id = `comment-${commentId}`;

  commentsList;
  dialog.showModal();
};

const startComment = () => {
  const comments = document.querySelectorAll('.comments');
  const closeButton = document.querySelector('#close');

  Array.from(comments, (a) => a.addEventListener('click', (e) => displayComments(e)));

  closeButton.addEventListener('click', () => {
    dialog.close();
  });
};

export default startComment;
