import App from './App.svelte';
import './main.css';
import './../node_modules/zondicons-css/dist/zendicons.css';


const app = new App({
    target: document.body,
    props: {
        name: 'world'
    }
});

export default app;