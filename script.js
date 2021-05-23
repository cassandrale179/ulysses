Vue.component("modal", {
    template: "#modal-template"
  });

var app = new Vue({
    el: '#app',
    data: {
      a: false, b: false, c: false, d: false, e: false, f: false, g: false, 
      h: false, i: false, j: false, k: false, l: false, m: false, n: false,
      o: false, p: false, q: false, r: false, s: false, t: false, u: false, 
      v: false, w: false, x: false, y: false, z: false, 
      aa: false, ab: false, ac: false, ad: false, ad2: false, ae: false, af: false, ag: false, 
      ah: false, ai: false, aj: false, ak: false, al: false, am: false, an: false,
      ao: false, ap: false, aq: false, ar: false, as: false, at: false, au: false, 
      av: false, aw: false, ax: false, ay: false, az: false, 

      ba: false, bb: false, bc: false, bd: false, be: false, bf: false, bg: false, 
      bh: false, bi: false, bj: false, bk: false, bl: false, bm: false, bn: false,
      bo: false, bp: false, bq: false, br: false, bs: false, bt: false, bu: false, 
      bv: false, bw: false, bx: false, by: false, bz: false, 

     

    },
    methods: {
      humanizeURL: function (url) {
        return url
          .replace(/^https?:\/\//, '')
          .replace(/\/$/, '')
      }
    }
  })