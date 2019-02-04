<template>
<div>
	<b-carousel
		:interval="4000"
		background="#ababab"
		controls
		img-height="500"
		img-width="1200"
		indicators
	>
		<b-carousel-slide
			caption="&ldquo;Vision&rdquo;"
			text="The ability to see not only what is today... <br> But what could be tomorrow."
			img-src="~assets/images/slider/1.jpg"
			img-alt="Brock University Plaza Building"
		></b-carousel-slide>
		<b-carousel-slide
			text="&ldquo;Providing a level of professionalism in complex construction requiring extraordinary scheduling.&rdquo;"
			img-src="~assets/images/slider/2.jpg"
			img-alt="Balls Falls Centre for Conservation"
		></b-carousel-slide>
		<b-carousel-slide
			text="&ldquo;Their on-site staff and supervisory personnel were professional, well-organized, courteous and were a joy to work with.&rdquo;"
			img-src="~assets/images/slider/3.jpg"
			img-alt="Canada Post Corporate Office"
		></b-carousel-slide>
		<b-carousel-slide
			text="&ldquo;Merit has shown a commitment to the delivery of quality work and successful projects which consistently meet expectations.&rdquo;"
			img-src="~assets/images/slider/4.jpg"
			img-alt="Niagara West YMCA"
		></b-carousel-slide>
		<b-carousel-slide
			text="&ldquo;We can say with confidence, that there is a professional and consistent manner in which the staff at Merit Contractors operates.&rdquo;"
			img-src="~assets/images/slider/5.jpg"
			img-alt="Bench Brewing Company"
		></b-carousel-slide>
 		<b-link to="/#about">
			<b-img-lazy
				alt="bouncing circle icon with down arrow"
				class="circle-down bounce"
				src="~assets/images/circle-down.svg"
			/>
 		</b-link>
	</b-carousel>
	<template
		v-for="section of $store.state.sections"
	>
		<section :key="section.id + '-line'">
			<hr
				:key="section.id + '-line'"
				class="section-separator my-3"
			>
			<h2
				:id="section.id"
				:key="section.id + '-header'"
				class="section-header"
				v-if="section.id != 'home'"
			>
			<b-img
				alt="Home icon"
				src="~/assets/images/home.svg"
			/>
			/ {{section.title}}
			</h2>
			<div
				:is="section.id"
				:key="section.id + '-component'"
			>
				{{section.component}}
			</div>
		</section>
	</template>
</div>
</template>

<script>
import about from '~/components/about'
import projects from '~/components/projects'
import newsroom from '~/components/newsroom'
import tenders from '~/components/tenders'
import careers from '~/components/careers'
import contact from '~/components/contact'

export default {
	components: {
		about
		, projects
		, newsroom
		, tenders
		, careers
		, contact
	}
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/variables.styl'

>>>.multi-column
	@media $screen-md
		column-count: 2

.section-header
	margin-top: -470px
	padding-top: 478px
	text-transform: uppercase

	@media $screen-md
		margin-top: -200px
		padding-top: 208px

	img
		display: inline-block
		height: 22pt
		vertical-align: baseline

@keyframes bounce
	0%, 20%, 50%, 80%, 100%
		transform translateY(0)

	40%
		transform translateY(-30px)

	60%
		transform translateY(-15px)

.circle-down
	display: none
	@media $screen-md
		animation: bounce 2s infinite
		bottom: 10px
		display: block
		height: 40px
		left: calc(50% - 25px)
		opacity: 0.7
		position: absolute

>>>.carousel-caption
	align-content: center
	align-items: center
	color: $brand-red
	display: flex
	flex-wrap: wrap
	padding: 0
	position: absolute
	top: 0
	vertical-align: center

	height: 100%
	@media $screen-md
		height: 70%

	p
		text-shadow: 2px 2px 3px rgba(0, 0, 0, 1)
		width: 100%
		@media $screen-md
			text-shadow: 3px 3px 6px rgba(0, 0, 0, 1)
	h3
		font-size: responsive 24px 65px
		font-weight: bold
		margin-top: 1rem
		width: 100%
	p
		font-size: responsive 15px 40px
		line-height: responsive 17px 45px

>>>.carousel-indicators
	display: none
	@media $screen-lg
		display: flex
		bottom: 100px

</style>
