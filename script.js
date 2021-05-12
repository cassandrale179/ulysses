Vue.component("modal", {
    template: "#modal-template"
  });

var app = new Vue({
    el: '#app',
    data: {
      a: false, b: false, c: false, d: false, e: false, f: false, g: false, 
    },
    methods: {
      humanizeURL: function (url) {
        return url
          .replace(/^https?:\/\//, '')
          .replace(/\/$/, '')
      }
    }
  })