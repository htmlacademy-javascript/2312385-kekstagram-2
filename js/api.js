const getData = () => fetch(
  'https://31.javascript.htmlacademy.pro/kekstagram/data'
).then((response) => response.json());

const sendData = (onSuccess, onFail, data) => fetch(
  'https://31.javascript.htmlacademy.pro/kekstagram',
  {
    method: 'POST',
    body: data,
  }).then((response) => {
  if (!response.ok) {
    throw new Error();
  }
  onSuccess();
}).catch(() => {
  onFail();
});

export { getData, sendData };
