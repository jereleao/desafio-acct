export const postRequest = (data: object) =>
  new Request('https://wfue8x1b1a.execute-api.us-east-1.amazonaws.com', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
