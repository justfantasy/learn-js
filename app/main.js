import './style.css';

const person = {
  name: 'Matt',
  age: 27,
  job: {
    title: 'WS',
  },
};

const { job: { title } } = person;

console.log(title);
