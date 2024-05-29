import button from "./button.vue";
button.install = function (app) {
    app.component(button.name as string, button);
}

export default button;