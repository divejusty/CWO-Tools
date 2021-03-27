import Vue from 'vue'
import "tailwindcss/tailwind.css"
import App from './components/App'
import './components/Elements/_elements'

new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App,
	},
})
