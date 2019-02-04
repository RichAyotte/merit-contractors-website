<template>
<div>
	<b-img-lazy
		alt="Blueprints"
		class="mb-2"
		fluid
		height="540"
		src="~assets/images/sections/tenders/header.jpg"
		width="1920"
	/>
	<p>The Merit Contractors "Tenders" is a location for contractors and
	suppliers to view all projects we are currently tendering. </p>
	<b-table
		:fields="fields"
		:items="items"
		responsive="true"
		striped
	/>

	<p>* Indicates Revised Tender Closing Date and Time</p>
	<p>Please e-mail <b-link href="mailto:estimating@meritcontractors.com"
	class="">estimating@meritcontractors.com</b-link> for access to tender
	documents for each project.
	</p>
</div>
</template>

<script>
import parseCsv from 'csv-parse/lib/es5/sync'

const tendersUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQJJj9HFUijI0UfPtDrVHaRBM4gDj5tvjrEIxX80i2L1J8YnPWYa0wn2ngNPoWQQP9W146sPpV5E4nA/pub?gid=0&single=true&output=csv'

export default {
	async created() {
		const tenders = parseCsv(
			await this.$axios.$get(tendersUrl)
			,  {
				columns: [
					'project'
					, 'closing_date'
				]
			}
		)
		this.fields = tenders.shift()
		this.items = tenders
	}
	, data() {
		return {
			fields: []
			, items: []
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/variables.styl'
</style>