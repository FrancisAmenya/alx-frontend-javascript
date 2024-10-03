export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (!success) {
      reject(new Error('The fake API is not working correctly'));
    } else {
      resolve({ status: 200, bosy: 'Success' });
    }
  });
}
