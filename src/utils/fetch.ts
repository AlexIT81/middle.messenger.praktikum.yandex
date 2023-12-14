enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

function queryStringify(data: object): string {
  let requestUrl: string = '';
  let i = 0;
  // eslint-disable-next-line
  for (const [key, value] of Object.entries(data)) {
    // (i === 0) ? (requestUrl = `?${key}=${value}`) : (requestUrl = `${requestUrl}&${key}=${value}`);
    if (i === 0) {
      requestUrl = `?${key}=${value}`;
    } else {
      requestUrl = `${requestUrl}&${key}=${value}`;
    }
    i += 1;
  }
  return requestUrl;
}

type Options = {
  method?: METHODS,
  data?: any,
  timeout?: number
  headers?: string
}

type HTTPMethod = (url: string, options?: Options) => Promise<unknown>
export default class HTTPTransport {
  get: HTTPMethod = (url, options = {}) => {
    const fullUrl = url + queryStringify(options.data);
    return this.request(fullUrl, { ...options, method: METHODS.GET }, options.timeout);
  };

  put: HTTPMethod = (url, options = {}) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  post: HTTPMethod = (url, options = {}) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  delete: HTTPMethod = (url, options) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  request = (url: string, options: Options, timeout = 5000) => {
    const { headers, data, method } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method!, url);

      if (headers) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      // const doTimeout = setTimeout(() => {
      //   xhr.abort();
      // }, timeout);

      xhr.onload = function () {
        // clearTimeout(doTimeout);
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;
      xhr.responseType = 'json';

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
