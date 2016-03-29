export default class ThirdPartay {
  constructor(target) {
    this.target = typeof target === 'string'
      ? document.querySelector(target)
      : document.body;

    this.promises = [];
  }

  add(extUrl) {
    let promise = new Promise((resolve, reject) => {
      let script = document.createElement('script');
      script.src = extUrl;

      script.addEventListener('load', () => {
        resolve(script);
      }, false);

      script.addEventListener('error', () => {
        reject(script);
      }, false);

      this.target.appendChild(script);
    });
    this.promises.push(promise);
  };

  loaded(callback) {
    Promise.all(this.promises).then(callback);
  }
}
