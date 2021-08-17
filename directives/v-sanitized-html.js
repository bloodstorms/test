const VSanitizedHTML = {
  install(Vue) {
    const sanitizeHtml = require('sanitize-html');

    Vue.prototype.$sanitize = sanitizeHtml;
    Vue.directive('sanitizedHtml', (el, binding) => {
      el.innerHTML = sanitizeHtml(binding.value);
    });
  },
};

export default VSanitizedHTML;
