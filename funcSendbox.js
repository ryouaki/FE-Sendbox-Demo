global.a = 1
global.b = 2

const src = `
  function add () {
    return global.a + global.b
  }
`

const r = new Function('global', `
  return ${src.replace('\n', '')}
`)

console.log(r.toString(), r(global)(), r({})())
