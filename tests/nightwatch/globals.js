module.exports = {
  "server" : {
    "hostport" : "http://localhost:8080"
  },
  "users" : {
      "admin" : {
          "email": 'test@liferay.com',
          "password": 'test',
      }
  },
  "modules" : {
      "yearApp" : {
          "url" : "/group/guest/privada1"
      }
  },
  "mocks": {
      "firstName" : "Default FirstName",
      "lastName" : "Default LastName"
  }
};
