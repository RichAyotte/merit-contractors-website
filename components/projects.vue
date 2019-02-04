<template>
<div>
	<div class="multi-column">
		<p>Merit Contractors Niagara Ltd. provides General Contracting, Construction
		Management, Design/Build and Pre-Construction services with unparalleled
		experience and expertise in managing the full-range of commercial, industrial
		and institutional building projects. Discover more about our experience and
		current construction projects by reviewing our project gallery below or for more
		in-depth information about particular projects or for a complete listing of our
		experience, please contact our office.</p>

		<p>Merit Contractors adds innovation and value to the conventional construction
		process. Our completed projects provide the best measure of Merit Contractors
		Niagara Ltd.’s reputation for excellence which is built on consistent success in
		delivering smart solutions for challenging projects.
		</p>
	</div>
	<div class="project-images-container">
		<div
			v-for="(category, categoryIndex) in categories"
			:key="category.title"
			class="project-photos"
		>
			<div
				class="image-category-container"
			>
				{{category.title}}
				<b-img-lazy
					:alt="category.thumbnail.alt"
					:ref="`${category.folder}-image`"
					:src="require(`~/assets/images/sections/projects/${category.folder}/${category.thumbnail.src}`)"
					class="p-1 thumbnail"
					height="540"
					width="960"
				/>
				<div
					:ref="`${category.folder}-overlay`"
					@click="currentCategory = categoryIndex; setModalTitle(0)"
					class="image-overlay"
					v-b-modal="'projects-modal-id' + category.title"
				>
					<div class="image-text">{{category.title}}</div>
				</div>

				<b-modal
					:id="`projects-modal-id${category.title}`"
					:title="modalTitle || category.title"
					centered
					hide-footer
					lazy
					size="lg"
				>
					<b-carousel
						:interval="0"
						:v-model="category.slider"
						@sliding-start="setModalTitle"
						background="#ababab"
						class= "carousel-fade"
						controls
					>
						<b-carousel-slide
							v-for="(img, index) in category.images"
							:key="category.title + index"
						>
							<b-img
								:alt="img.alt"
								:src="require(`~/assets/images/sections/projects/${category.folder}/${img.src}`)"
								height="450"
								slot="img"
								width="800"
							/>
						</b-carousel-slide>
					</b-carousel>
				</b-modal>
			</div>
		</div>
	</div>
</div>
</template>


<script>

export default {
	data() {
		return {
			modalTitle: ''
			, currentCategory: 0
			, categories: [
				{
					folder: 'Healthcare'
					, title: 'Healthcare'
					, thumbnail: {
						alt: `McMaster University Science Centre`
						, src: 'sketch.jpg'
					}
					, images: [
						{
							alt: `McMaster University Science Centre`
							, src: `McMaster-University-Science-Centre.jpg`
						}
						, {
							alt: `Chateau Gardens`
							, src: `Chateau-Gardens.jpg`
						}
						, {
							alt: `Grand Bend Medical Centre`
							, src: `Grand-Bend-Medical-Centre.jpg`
						}
						, {
							alt: `Hamilton General Hospital Hyperbaric Room`
							, src: `Hamilton-General-Hospital-Hyperbaric-Room.jpg`
						}
						, {
							alt: `Hamilton Health Sciences Ophthamology Centre`
							, src: `Hamilton-Health-Sciences-Ophthamology-Centre.jpg`
						}
						, {
							alt: `Hotel Dieu Shaver Rehab Centre`
							, src: `Hotel-Dieu-Shaver-Rehab-Centre.jpg`
						}
					]
					, slider: {
						slide: 0
						, sliding: false
					}
				}
				, {
					folder: 'Retail Hospitality and Tourism'
					, title: 'Retail, Hospitality + Tourism'
					, thumbnail: {
						alt: `Jackson Triggs Wine Cellar`
						, src: 'sketch.jpg'
					}
					, images: [
						{
							alt: `Jackson Triggs Wine Cellar`
							, src: `Jackson-Triggs-Wine-Cellar.jpg`
						}
						, {
							alt: `13th Street Winery`
							, src: `13th-Street-Winery.jpg`
						}
						, {
							alt: `Crossroad Travel Centre`
							, src: `Crossroad-Travel-Centre.jpg`
						}
						, {
							alt: `Fielding Winery`
							, src: `Fielding-Winery.jpg`
						}
						, {
							alt: `Margaritaville`
							, src: `Margaritaville.jpg`
						}
						, {
							alt: `Niagara Parks Oakes Garden Theatre`
							, src: `Niagara-Parks-Oakes-Garden-Theatre.jpg`
						}
						, {
							alt: `Southbrook Winery`
							, src: `Southbrook-Winery.jpg`
						}
					]
					, slider: {
						slide: 0
						, sliding: false
					}
				}
				, {
					folder: 'Recreation'
					, title: 'Recreation'
					, thumbnail: {
						alt: `Niagara West YMCA Pool`
						, src: 'sketch.jpg'
					}
					, images: [
						{
							alt: `Niagara West YMCA Pool`
							, src: `Niagara-West-YMCA-Pool.jpg`
						}
						, {
							alt: `Bench Brewing Company`
							, src: `Bench-Brewing-Company.jpg`
						}
						, {
							alt: `Niagara Centre YMCA`
							, src: `Niagara-Centre-YMCA.jpg`
						}
						, {
							alt: `Niagara Parks White Water Stairs`
							, src: `Niagara-Parks-White-Water-Stairs.jpg`
						}
						, {
							alt: `St.Catharines Turf Field`
							, src: `St.Catharines-Turf-Field.jpg`
						}
						, {
							alt: `Wilfred Laurier University Athletic Centre`
							, src: `Wilfred-Laurier-University-Athletic-Centre.jpg`
						}
					]
					, slider: {
						slide: 0
						, sliding: false
					}
				}
				, {
					folder: 'Office and Corporate'
					, title: 'Office + Corporate'
					, thumbnail: {
						alt: `Canada Post Corporate Office`
						, src: 'sketch.jpg'
					}
					, images: [
						{
							alt: `Canada Post Corporate Office`
							, src: `Canada-Post-Corporate-Office.jpg`
						}
						, {
							alt: `CAA Niagara`
							, src: `CAA-Niagara.jpg`
						}
						, {
							alt: `Niagara Falls Bridge Commission Bus Processing`
							, src: `Niagara-Falls-Bridge-Commission-Bus-Processing.jpg`
						}
						, {
							alt: `Niagara Region Environmental Centre`
							, src: `Niagara-Region-Environmental-Centre.jpg`
						}
						, {
							alt: `Niagara Regional Council Chambers`
							, src: `Niagara-Regional-Council-Chambers.jpg`
						}
						, {
							alt: `Stantec Office`
							, src: `Stantec-Office.jpg`
						}
					]
					, slider: {
						slide: 0
						, sliding: false
					}
				}
				, {
					folder: 'Community and Culture'
					, title: `Community + Culture`
					, thumbnail: {
						alt: 'Balls Falls Centre for Conservation'
						, src: 'sketch.jpg'
					}
					, images: [
						{
							alt: `Balls Falls Centre for Conservation`
							, src: `Balls-Falls-Centre-for-Conservation.jpg`
						}
						, {
							alt: `Community Living St.Catharines`
							, src: `Community-Living-St.Catharines.jpg`
						}
						, {
							alt: `HHS Juravinski Spiritual Centre`
							, src: `HHS-Juravinski-Spiritual-Centre.jpg`
						}
						, {
							alt: `Jackson Triggs Amphitheater`
							, src: `Jackson-Triggs-Amphitheater.jpg`
						}
						, {
							alt: `St.Catharines Lock 3 Museum`
							, src: `St.Catharines-Lock-3-Museum.jpg`
						}
						, {
							alt: `Stoney Creek Church of Latter Day Saints`
							, src: `Stoney-Creek-Church-of-Latter-Day-Saints.jpg`
						}
					]
					, slider: {
						slide: 0
						, sliding: false
					}
				}
				, {
					folder: 'Academic'
					, title: `Academic`
					, thumbnail: {
						alt: `Brock University International Centre 2`
						, src: 'sketch.jpg'
					}
					, images: [
						{
							alt: `Brock University International Centre 2`
							, src: `Brock-University-International-Centre2.jpg`
						}
						, {
							alt: `Blessed Trinity High School`
							, src: `Blessed-Trinity-High-School.jpg`
						}
						, {
							alt: `Brock University Alan Earp Residence`
							, src: `Brock-University-Alan-Earp-Residence.jpg`
						}
						, {
							alt: `Brock University Gateway Residence`
							, src: `Brock-University-Gateway-Residence.jpg`
						}
						, {
							alt: `Brock University International Centre 1`
							, src: `Brock-University-International-Centre1.jpg`
						}
						, {
							alt: `Brock University Plaza Building`
							, src: `Brock-University-Plaza-Building.jpg`
						}
					]
					, slider: {
						slide: 0
						, sliding: false
					}
				}
			]
		}
	}
	, methods: {
		setModalTitle(index) {
			this.categories[this.currentCategory].slider.slide = index
			this.modalTitle = this.categories[this.currentCategory].images[index].alt
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/variables.styl'

>>>.modal-body
	padding: 0

>>>.modal-title
	font-size: responsive 12px 19px

.image-overlay
	background-color white
	bottom 0
	cursor pointer
	height 100%
	left 0
	opacity 0
	position absolute
	right 0
	top 0
	transition .5s ease
	width 100%

.image-text
	color black
	cursor pointer
	font-size responsive 20px 35px
	font-weight bold
	left 50%
	line-height responsive 20px 35px
	position absolute
	text-align center
	text-transform uppercase
	top 50%
	transform translate(-50%, -50%)
	width 90%
	user-select none

.project-images-container
	display: flex
	flex-wrap: wrap
	.project-photos
		.image-category-container
			position: relative
			&:hover >.image-overlay
				opacity 0.7

		@media $screen-md
			flex: 1 1 50%
		img
			max-width: 100%
			height: auto
</style>