import DatePicker from '../src/index.js';
import '../src/styles/index.css';
// import '../src/styles/dark.css';

const id = 'picker';
const selector = `#${id}`;
document.body.innerHTML = `<div id="${id}"></div>`;

const picker = new DatePicker(selector, {});

picker.show();
