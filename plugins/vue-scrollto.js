/**
 * @overview    Scroll To
 * @author      Richard Ayotte
 * @copyright   Copyright © 2018 Richard Ayotte
 * @date        2018-10-23 17:06:36
 * @license     GNU GPL-3.0
 * @flow
 */

import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

export default function ({app}) {
	app.router.beforeEach((to, from, next) => {
		if (to.hash) {
			const el = document.getElementById(to.hash.slice(1))
			if (el) {
				VueScrollTo.scrollTo(el)
			}
		}
		next()
	})
}