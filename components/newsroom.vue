<template>
<div>
	<b-img-lazy
		alt="Table with newspaper, glasses, pen and cup of coffee"
		class="mb-2"
		fluid
		height="540"
		src="~assets/images/sections/newsroom/header.jpg"
		width="1920"
	/>
	<div class="newsroom-content-container">
		<div>
			<twitter-timeline
				style="max-height: 55vh; overflow-y: scroll; -webkit-overflow-scrolling: touch;"
				class="pr-md-3"
				id="MeritNiagara"
				sourceType="profile"
			/>
		</div>
		<div>
			<div
				class="pl-md-3"
			>
				<div>
				<h3>Safety@Merit Newsletter</h3>
				Click image below for current issue.
				<b-link target="_blank" href="/merit-safety.pdf">
				<b-img-lazy
					alt="Safety @ Merit logo"
					fluid
					height="540"
					src="~assets/images/sections/newsroom/safety.jpg"
					width="1920"
				/>
				</b-link>
				</div>

				<div>
				<h3>News@Merit Newsletter</h3>
				Click image below for current issue.
				<b-link target="_blank" href="/merit-news.pdf">
				<b-img-lazy
					alt="News @ Merit logo"
					fluid
					height="540"
					src="~assets/images/sections/newsroom/news.jpg"
					width="1920"
				/>
				</b-link>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import {Timeline} from 'vue-tweet-embed'
export default {
	components: {
		twitterTimeline: Timeline
	}
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/variables.styl'

.newsroom-content-container
	display: flex
	flex-wrap: wrap
	>*
		width: 100%
		@media $screen-md
			flex: 1 1 50%
</style>