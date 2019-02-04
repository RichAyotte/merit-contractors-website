/**
 * @overview    [overview]
 * @author      Richard Ayotte
 * @copyright   Copyright © 2018 Richard Ayotte
 * @date        2018-09-18 20:33:54
 * @license     GNU GPL-3.0
 * @flow
 */

import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			sections: [
				{
					title: 'About Us'
					, id: 'about'
				}
				, {
					title: 'Projects'
					, id: 'projects'
				}
				, {
					title: 'Newsroom'
					, id: 'newsroom'
				}
				, {
					title: 'Tenders'
					, id: 'tenders'
				}
				, {
					title: 'Careers'
					, id: 'careers'
				}
				, {
					title: 'Contact Us'
					, id: 'contact'
				}
			]
		}
	})
}

export default createStore
