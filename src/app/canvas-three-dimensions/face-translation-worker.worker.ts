addEventListener('message', ({ data }) => {
  const response = Math.pow(data.data, 2);
  postMessage({ result: response, dataIndex: data.dataIndex });
});
