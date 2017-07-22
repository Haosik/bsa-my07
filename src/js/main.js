// var userList = require('./userList.js');
import UserList from './userList';

// require('../css/style.css');
import '../css/style.scss';

// Creating mocked users list
const users = [{
  name: 'Oksana',
  age: 22,
},
{
  name: 'Viktor',
  age: 14,
},
{
  name: 'Ivan',
  age: 37,
},
{
  name: 'Yana',
  age: 45,
},
{
  name: 'Oleksandr',
  age: 19,
},
{
  name: 'Olena',
  age: 18,
},
{
  name: 'Mykola',
  age: 27,
},
{
  name: 'Andriy',
  age: 33,
},
{
  name: 'Zakhar',
  age: 40,
},
];

const userListModule = new UserList(users);
userListModule.showList();
