import HelloWorld from "./components/HelloWorld"

const HelloWorldSimple = {
    // eslint-disable-next-line no-unused-vars
    install(Vue, options) {
        Vue.component("hello-world", HelloWorld)
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(HelloWorldSimple)
}

export default HelloWorldSimple;
