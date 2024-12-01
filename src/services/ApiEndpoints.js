const BaseURLs = {
  local: "http://localhost:8000",
  dev: "",
  stage: "",
  prod: ""
}

const env = process.env.ENVIRONOMENT;

const endpoints = {
  getUser: {
    url: BaseURLs[env] + '/users/signup',
    defaultHeaders: {},
    timeout: 30000,
  },
  createPost: {
    url: BaseURLs[env] + '/users/signin',
    defaultHeaders: {},
    timeout: 30000,
  },
};

export default endpoints;
