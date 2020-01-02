const local = {
  app: {
    REACT_APP_BASE_URL:" https://devops-intelligence.xenon.work/api/projects",
  }
};

const dev = {
  app: {
    REACT_APP_BASE_URL:" https://devops-intelligence.xenon.work/api/projects",
  },
};

const uat = {
  app: {
    REACT_APP_BASE_URL:" https://devops-intelligence.xenon.work/api/projects",
  },
};

const prod = {
  app: {
    REACT_APP_BASE_URL:" https://devops-intelligence.xenon.work/api/projects",
  },
};

console.log(process.env.REACT_APP_STAGE,    'REACT_APP_STAGE')
const config = process.env.REACT_APP_STAGE === 'production'  ? prod
             : process.env.REACT_APP_STAGE === 'development' ? dev
             : process.env.REACT_APP_STAGE === 'uat' ? uat
             : local;

export default {
  // Add common config values here
  ...config
};
