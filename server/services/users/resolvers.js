const userList = [
  { id: '1', name: 'a1', attributes: {} },
  { id: '2', name: 'b2', attributes: {} }
];

const user = (_, { id }, context, info) => {
  return userList.find(e => e.id === id);
};

const users = () => {
  return userList;
};

module.exports = {
  Attributes: {
    id: () => 1,
    age: () => 22
  },
  Query: {
    user,
    users
  }
};
