<template>
<div>
	<div class="before-last py-4 mt-2">
		<b-container>
			<b-row align-v="center">
				<b-col cols="12" md="4" style="white-space:nowrap">
					Head Office:
					<br>235 Martindale Road, Suite 3
					<br>St. Catharines, Ontario
					<br>CANADA L2W 1A5
				</b-col>
				<b-col cols="12" md="4">
					<b-img-lazy
						alt="Merit 35 year logo"
						class="logo-35years p-4"
						src="~/assets/images/merit-35-years-logo.svg"
					/>
				</b-col>
				<b-col cols="12" md="4" style="white-space:nowrap">
					<b-link href="tel:9056412374">Tel: +1 905 641 2374</b-link>
					<br>Fax +1 905 641 2988
					<br>E-mail:<b-link href="mailto:info@meritcontractors.com">info@meritcontractors.com</b-link>
				</b-col>
			</b-row>
		</b-container>
	</div>
	<div class="last py-1">
		<b-container>
			<b-row align-v="center">
				<b-col cols="12" lg="4">
					&copy; Merit Contractors Niagara Ltd.
				</b-col>
				<b-col cols="12" lg="4">
					<b-link to="/terms-conditions">
					Terms and Conditions
					</b-link>
					|
					<b-link to="/privacy-policy">
					Privacy Policy
					</b-link>
				</b-col>
				<b-col cols="12" lg="4">
					<b-link
						href="http://www.minicucci.ca/"
						rel="noopener noreferrer"
						target="_blank"
					>
					Design Minicucci + Associates
					</b-link>
				</b-col>
			</b-row>
		</b-container>
	</div>
</div>
</template>

<style lang="stylus" scoped>
@import '~assets/styles/variables.styl'

a
	color: white

.before-last, .last
	color: white
	text-align: center
	white-space: nowrap

.before-last
	background-color: #58585B
	@media $screen-md
		white-space: normal
		*
			&:first-child
				text-align: left
			&:nth-child(2)
				text-align: center
			&:last-child
				text-align: right

.last
	background-color: black
	@media $screen-lg
		white-space: normal
		*
			&:first-child
				text-align: left
			&:nth-child(2)
				text-align: center
			&:last-child
				text-align: right

.logo-35years
	width: 100%
	max-height: 150px
</style>