import './style.sass'

const Component = (): Element => {
  const element = document.createElement('div')

  element.innerHTML = 'Hello, World!'

  return element
}

let element = Component()

document.body.appendChild(element)

module.hot && module.hot.accept([], () => {
  document.body.removeChild(element)
  element = Component()
  document.body.appendChild(element)
})
