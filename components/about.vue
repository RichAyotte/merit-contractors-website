<template>
<div>
	<div class="multi-column">
		<p>For over three decades Merit Contractors has been a leader in the construction
		industry and the choice of demanding clients across South Central Ontario. With
		unparalleled experience and expertise in managing the full range of commercial,
		industrial and institutional building projects, Merit has left their stamp on
		some of the most impressive buildings in the Golden Horseshoe and surrounding
		regions.
		</p>
		<p>At Merit, we enjoy the challenge that comes from constructing buildings that
		stand out above the crowd. Our ability to meet these challenges comes from the
		team approach we employ on all our jobs, the knowledge and experience we have
		gathered throughout the years and the perceptive attention to detail we initiate
		as we bring to life what previously existed only in our client’s imagination.
		The flexibility of services that Merit provides has allowed us to stay atop the
		construction industry. Whether you are contemplating interior or exterior
		renovations to an existing building or are planning a new state of the art
		facility, Merit has the ability to adjust its focus to suit your needs while
		still providing the same level of quality and dedication the company is known
		for.
		</p>
		<p>"Our Mission is to Build Dreams - Our Vision is to deliver the smartest
		construction solutions for the most challenging projects."</p>
	</div>

	<h3>CLIENTS</h3>
	<div class="logo-container">
		<div
			v-for="(img, index) in clientLogos"
			:key="index"
			class="client-logo"
		>
			<b-img-lazy
				:alt="img.alt"
				:src="require(`~/assets/images/clients/${img.src}`)"
				class="p-3"
				height="100"
				width="100"
			/>
		</div>
	</div>
	<hr class="d-none d-md-block section-separator my-3"/>

	<h3>ASSOCIATIONS</h3>
	<div class="logo-container">
		<div
			v-for="(img, index) in associationLogos"
			:key="index"
			class="association-logo"
		>
			<b-img-lazy
				:alt="img.alt"
				:src="require(`~/assets/images/associations/${img.src}`)"
				class="p-3"
				height="100"
				width="100"
			/>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			associationLogos: [
				{
					alt: 'CFIB Logo.svg'
					, src: 'CFIB Logo.svg'
				}
				, {
					alt: 'GNCC Logo.svg'
					, src: 'GNCC Logo.svg'
				}
				, {
					alt: 'GVCA Logo.svg'
					, src: 'GVCA Logo.svg'
				}
				, {
					alt: 'LDCA Logo.svg'
					, src: 'LDCA Logo.svg'
				}
				, {
					alt: 'LOC Logo.svg'
					, src: 'LOC Logo.svg'
				}
				, {
					alt: 'MeritOnt Logo.svg'
					, src: 'MeritOnt Logo.svg'
				}
				, {
					alt: 'NCA Logo.svg'
					, src: 'NCA Logo.svg'
				}
				, {
					alt: 'OGCA Logo.svg'
					, src: 'OGCA Logo.svg'
				},
			]
			, clientLogos: [
				{
					alt: 'Bench Brewery'
					, src: 'Bench Brewery.svg'
				}
				, {
					alt: 'Brock University'
					, src: 'Brock University.svg'
				}
				, {
					alt: 'Canada Post'
					, src: 'Canada Post.svg'
				}
				, {
					alt: 'Ikea'
					, src: 'Ikea.svg'
				}
				, {
					alt: 'Grand River'
					, src: 'Grand River.svg'
				}
				, {
					alt: 'Hamilton Health'
					, src: 'Hamilton Health.svg'
				}
				, {
					alt: 'Hornblower'
					, src: 'Hornblower.svg'
				}
				, {
					alt: 'Jackson Triggs'
					, src: 'Jackson Triggs.svg'
				}
				, {
					alt: 'McMaster'
					, src: 'McMaster.svg'
				}
				, {
					alt: 'Niagara Parks'
					, src: 'Niagara Parks.svg'
				}
				, {
					alt: 'Niagara Region'
					, src: 'Niagara Region.svg'
				}
				, {
					alt: 'Peace Bridge'
					, src: 'Peace Bridge.svg'
				}
			]
		}
	}
}

</script>

<style lang="stylus" scoped>
@import '~assets/styles/variables.styl'

.logo-container
	align-items: center
	display: flex
	flex-wrap: wrap
	.client-logo
		flex: 1 1 50%
		@media $screen-md
			flex: 0 1 16.6%
		img
			height: auto
			max-width: 100%
			width: 100%
	.association-logo
		flex: 1 1 50%
		@media $screen-md
			flex: 0 1 12.5%
		img
			height: auto
			max-width: 100%
			width: 100%
</style>
