import './style.css'

const r = /a(b+)a/g;
const s = '_abba_aba_';

console.log(s.match(r));

while (true) {
  const arr = r.exec(s);
  if (!arr) {
    break;
  }
  console.log(arr);
}
