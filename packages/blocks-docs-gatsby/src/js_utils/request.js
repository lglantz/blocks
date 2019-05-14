const reqUtil = {};

function getRequestHandler(req, resolve, reject) {
  return () => {
    let response;
    try {
      response = JSON.parse(req.responseText);
    } catch (e) {
      response = req.responseText;
    }
    return req.status === 200 ? resolve(response) : reject(response);
  };
}

function makeRequest(type, url, data) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open(type, url);
    request.onload = getRequestHandler(request, resolve, reject);
    request.onerror = () => reject(request.statusText);
    if (data) {
      request.setRequestHeader('Content-type', 'application/json');
      request.send(JSON.stringify(data));
    } else {
      request.send();
    }
  });
}

reqUtil.get = url => (makeRequest('GET', url));

export default reqUtil;