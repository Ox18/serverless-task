const hello = async (event, context) => {
  const today = new Date();

  const hour = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, the current time is ${hour}:${minutes}:${seconds}`,
    }),
  };
};

module.exports = {
  hello,
};
