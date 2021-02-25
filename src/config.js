const config = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "scratch-upload",
  },
  apiGateway: {
    REGION: "use-east-2",
    URL: "https://xgs21uhzha.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "use-east-2",
    USER_POOL_ID: "us-east-2_VobwwVbvi",
    APP_CLIENT_ID: "336nq363jv1ek8kj9305jiok3p",
    IDENTITY_POOL_ID: "us-east-2:5c0cf5f1-1739-450c-9d07-a41f8fd76c28",
  },
};

export default config;
