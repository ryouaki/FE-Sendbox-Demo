global.a = 1
global.b = 2

const src = `
  function add () {
    return global.a + global.b
  }
`



const r = new Function('global', `
  global.func = ${src}
`)

console.log(r.toString(), r(global), global.func())