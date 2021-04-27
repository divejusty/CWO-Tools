// Custom Vue directive for closing elements after a click outside of it
// Based on https://dev.to/jamus/clicking-outside-the-box-making-your-vue-app-aware-of-events-outside-its-world-53nh

import Vue from 'vue'

// Usage: v-closable="callback()"
Vue.directive('closable', {
	bind: function(el, binding) {
	  // Define ourClickEventHandler
	  const ourClickEventHandler = event => {
		if (!el.contains(event.target) && el !== event.target) {
		  // as we are attaching an click event listern to the document (below)
		  // ensure the events target is outside the element or a child of it
		  binding.value(event); // before binding it
		}
	  };
	  // attached the handler to the element so we can remove it later easily
	  el.__vueClickEventHandler__ = ourClickEventHandler;

	  // attaching ourClickEventHandler to a listener on the document here
	  document.addEventListener("click", ourClickEventHandler);
	},
	unbind: function(el) {
	  // Remove Event Listener
	  document.removeEventListener("click", el.__vueClickEventHandler__);
	}
  })
