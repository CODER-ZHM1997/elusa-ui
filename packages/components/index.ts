import Button from './button/button'
const components = [Button]
const install = function (app) {
    components.forEach(component => {
        app.component(component.name, component)
    })
}

export { Button }

export default {
    install,
    Button
}
