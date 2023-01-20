// import { createDemoApp } from 'polotno/polotno-app';

// const { store } = createDemoApp({
//     container: document.getElementById('root'),
//     key: '1YowbX1r9_-EABkMH0Jx', // you can create it here: https://polotno.com/cabinet/
//     // you can hide back-link on a paid license
//     // but it will be good if you can keep it for Polotno project support
//     showCredit: true,
// });

import { createStore } from 'polotno/model/store';

const store = createStore();
const page = store.addPage();

page.addElement({
  x: 50,
  y: 50,
  type: 'text',
  fill: 'black',
  text: 'hello',
});

export default store;