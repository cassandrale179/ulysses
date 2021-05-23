Vue.component("modal", {
    template: "#modal-template"
  });

var app = new Vue({
    el: '#app',
    data: {
      a: false, b: false, c: false, d: false, e: false, f: false, g: false, 
      h: false, i: false, j: false, k: false, l: false, m: false, n: false,
      o: false, p: false, q: false, r: false, s: false, t: false, u: false, 
      v: false, w: false, x: false, y: false, z: false, aa: false, ab: false, 
    },
    methods: {
      humanizeURL: function (url) {
        return url
          .replace(/^https?:\/\//, '')
          .replace(/\/$/, '')
      }
    }
  })