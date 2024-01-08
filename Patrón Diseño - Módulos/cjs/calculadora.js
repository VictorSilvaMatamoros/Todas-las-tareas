function sumar(a, b) {
  return a + b
}

function restar(a, b) {
  return a - b
}

//CommonJS Module Export
module.exports = {
  sumar,
  restar
}

//Lo anterior es lo mismo que hacerlo individualmente:
// export function sumar(a, b) { ...
// export function restar(a, b) { ...

console.log(module)


