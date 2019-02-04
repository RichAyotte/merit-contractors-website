/**
 * @overview    Nuxt config
 * @author      Richard Ayotte
 * @copyright   Copyright © 2018 Richard Ayotte
 * @date        2018-12-03 15:42:51
 * @license     GNU GPL-3.0
 * @flow
 */

const imageminMozjpeg = require('imagemin-mozjpeg')
const rucksackCss = require('rucksack-css')

module.exports = {
	/*
	 ** Headers of the page
	 */
	head: {
		htmlAttrs: {
			lang: 'en'
		}
		, title: `Merit Contractors Niagara Ltd :: Leader in the construction industry and the choice of demanding clients across South Central Ontario.`
		, meta: [
			{
				charset: 'utf-8'
			}
			, {
				name: 'viewport'
				, content: 'width=device-width, initial-scale=1'
			}
			, {
				hid: 'description'
				, name: 'description'
				, content: `Merit Contractors Niagara Ltd. has unparalleled experience and expertise in managing a full-range of commercial, industrial and institutional building projects`
			}
			, {
				hid: 'keywords'
				, name: 'keywords'
				, content: `construction, construction industry, contractor, general contractor, design build, construction management, lump sum tender, project management, commercial development, public sector, public tender, private sector, commercial construction, industrial construction, construction projects, healthcare, long term care facilities, academic, schools, universities, places of worship, recreation, cultural, hospitality and tourism, wineries, auto dealerships, offices, government, Niagara, Niagara Falls, St. Catharines, Grimsby, Stoney Creek, Hamilton, Burlington, Mississauga, Grand Valley, London, GTA, Toronto, Ontario, Canada, Western New York, USA`
			}
			, {
				name: 'author'
				, content: `Merit Contractors Niagara Ltd.`
			}
			, {
				name: 'identifier-url'
				, content: `www.meritcontractors.com`
			}
			, {
				name: 'msapplication-TileColor'
				, content: '#ffffff'
			}
			, {
				name: 'theme-color'
				, content: '#ffffff'
			}
		]
		, link: [
			{
				rel: 'apple-touch-icon'
				, sizes: '180x180'
				, href: '/apple-touch-icon.png'
			}
			, {
				rel: 'icon'
				, type: 'image/png'
				, sizes: '32x32'
				, href: '/favicon-32x32.png'
			}
			, {
				rel: 'icon'
				, type: 'image/png'
				, sizes: '16x16'
				, href: '/favicon-16x16.png'
			}
			, {
				rel: 'manifest'
				, href: '/site.webmanifest'
			}
			, {
				rel: 'mask-icon'
				, href: '/safari-pinned-tab.svg'
				, colo: '#5bbad5'
			}
			, {
				rel: 'icon'
				, type: 'image/x-icon'
				, href: '/favicon.ico'
			}
			, {
				href: `https://fonts.googleapis.com/css?family=Oswald`
				, rel: `stylesheet`
			}
			, {
				href: `https://fonts.googleapis.com/css?family=Open+Sans`
				, rel: `stylesheet`
			}
		]
	}

	/**
	 * Customize the progress bar color
	 */
	, loading: {
		color: '#EE3423'
	}

	, server: {
		host: '0.0.0.0'
		, port: 3000
	}

	/**
	 * Modules
	 * @type {Array}
	 */
	, modules: [
		'bootstrap-vue/nuxt'
		, '@nuxtjs/axios'
		, [
			'nuxt-imagemin'
			, {
				svgo: null
				, plugins: [
					imageminMozjpeg({
						quality: 75
						, progressive: false
					})
				]
			}
		]
		, [
			'@nuxtjs/google-analytics'
			, {
				id: 'UA-62604631-1'
			}
		]
	]

	/**
	 * CSS
	 * @type {Array}
	 */
	, css: [
		'bootstrap/dist/css/bootstrap.css'
		, 'bootstrap-vue/dist/bootstrap-vue.css'
		, {
			lang: 'stylus'
			, src: 'assets/styles/global.styl'
		}
	]

	/**
	 * Build configuration
	 */
	, build: {
		/*
		 ** Run ESLint on save
		 */
		extend(config, {
			isDev
			, isClient
		}) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre'
					, test: /\.(js|vue)$/
					, loader: 'eslint-loader'
					, exclude: /(node_modules)/
				})
			}
			const vueLoader = config
			.module
			.rules
			.find(rule => rule.loader === 'vue-loader')

			vueLoader.options.transformAssetUrls = {
				'img': 'src'
				, 'image': 'xlink:href'
				, 'b-img': 'src'
				, 'b-img-lazy': ['src', 'blank-src']
				, 'b-card': 'img-src'
				, 'b-card-img': 'img-src'
				, 'b-carousel-slide': 'img-src'
				, 'b-embed': 'src'
			}
		}
		, postcss: [
			rucksackCss
		]
	}

	/**
	 * Plugins
	 */
	, plugins: [
		{
			src: '~/plugins/vue-scrollto'
			, ssr: false
		}
	]
}
