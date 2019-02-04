<template>
<div id="top">
	<div class="top-contact-bar p-0">
		<b-container>
			<b-link href="mailto:info@meritcontractors.com" class="">
				<b-img-lazy
					alt="envelope icon"
					class="email-icon"
					src="~/assets/images/mail.svg"
				/>
			</b-link>
			<b-link class="px-3" href="tel:+1 905 641 2374">+1 905 641 2374</b-link>
		</b-container>
	</div>
	<b-container>
		<b-navbar variant="light" sticky toggleable="md" class="px-0 pb-0">
			<div class="navbar-top">
				<b-navbar-brand to="/#top">
					<b-img-lazy
						alt="Merit logo"
						class="logo"
						src="~/assets/images/merit-logo.svg"
					/>
				</b-navbar-brand>
				<b-navbar-toggle target="nav_collapse" class="p-0"/>

				<div class="d-md-none nav-icons-container">
					<nav-icons />
					<hr class="section-separator my-3"/>
				</div>

				<div class="menu">
					<b-collapse is-nav id="nav_collapse">
						<b-navbar-nav class="ml-auto">
							<b-nav-item
								class="pl-md-3"
								:key="section.id"
								:to="`/#${section.id}`"
								v-for="section of $store.state.sections"
							>
								<div v-if="section.id != 'home'">
									{{section.title}}
								</div>
							</b-nav-item>
						</b-navbar-nav>
						<hr class="d-md-none section-separator my-3"/>
					</b-collapse>
					<div class="d-none d-md-block nav-icons-container">
						<nav-icons />
					</div>
				</div>
			</div>
			<hr class="d-none d-md-block section-separator my-3"/>
		</b-navbar>
		<nuxt/>
	</b-container>
	<as-footer/>
</div>
</template>

<script>

import navIcons from '~/components/nav-icons'
import asFooter from '~/components/as-footer'

export default {
	components: {
		asFooter
		, navIcons
	}
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/variables.styl'

.navbar
	top: 30px
	display: block

	.navbar-top
		align-items: flex-start
		display: flex
		flex-wrap: wrap
		justify-content space-between
		@media $screen-md
			align-items: flex-end
			flex-direction: row
			flex-wrap nowrap

	.menu
		width: 100%

	&.bg-light
		background-color: #fff !important

	.navbar-nav
		.nav-item .nav-link
			@media $screen-md
				padding: 0
				border-top: 3px solid transparent
				display: inline-block
				text-transform: uppercase
				&:hover, &:focus
					border-top-color: brand-red
					outline: unset

	.navbar-toggler
		border: none

	.nav-icons-container
		width: 100%
		margin-top: -34.92px
		@media $screen-md
			margin-top: 0

		text-align: right

	>>>.navbar-toggler-icon
		width: 50px
		height: 50px
		background-image: url('~assets/images/menu.svg')

.logo
	height: 120px

.top-contact-bar
	align-items: center
	background-color: #000
	display: flex
	height: 30px
	position: -webkit-sticky // Required by Safari...
	position: sticky
	top: 0
	z-index: 1020

	.container
		display: flex
		flex-direction: row-reverse
		align-items: center

		a
			color: #fff

		.email-icon
			height: 11.75pt

#nav_collapse
	flex-flow: row wrap
</style>
