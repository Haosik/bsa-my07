// const _ = require('lodash');
import _ from 'lodash';

function userList(users) {
  const container = document.getElementById('root');
  const sortedUsers = _.sortBy(users, 'age');
  this.showList = () => {
    sortedUsers.forEach((user) => {
      const div = document.createElement('div');
      div.append(`${user.name} ${user.age}`);
      div.classList.add('user-div');
      container.appendChild(div);
    });
  };
}

export default userList;
// module.exports = userList;
