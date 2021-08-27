export const BASE_URL =
  'https://wfue8x1b1a.execute-api.us-east-1.amazonaws.com';

export const postRequest = (data: object) => ({
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
  },
});
