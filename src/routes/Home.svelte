<script lang="ts">
	let previewed_image = 0
	let is_previewed_image_visible = false

	let images = [
		["eateot.jpg",			1,	1],
		["fortvivlan.jpg",		2,	1],
		["dimensia.jpg",		1,	1],
		["fortvivlan.jpg",		2,	1],
		["eateot.jpg",			1,	1],
		["dimensia.jpg",		1,	1],
		["fortvivlan.jpg",		2,	1],
		["dimensia.jpg",		1,	1],
		["dimensia.jpg",		1,	2],
		["eateot.jpg",			1,	1],
		["dimensia.jpg",		1,	1],
		["eateot.jpg",			1,	1],
		["eateot.jpg",			1,	1],
		["fortvivlan.jpg",		2,	1],
		["dimensia.jpg",		1,	1],
		["eateot.jpg",			1,	1],
		["dimensia.jpg",		1,	1],
		["eateot.jpg",			1,	1],
		["eateot.jpg",			1,	1],
		["fortvivlan.jpg",		2,	1],
		["dimensia.jpg",		1,	1],
		["eateot.jpg",			1,	1],
		["dimensia.jpg",		1,	1],
		["eateot.jpg",			1,	1],
		["eateot.jpg",			1,	1],
		["fortvivlan.jpg",		2,	1],
		["dimensia.jpg",		1,	1],
		["dimensia.jpg",		1,	1],
	]

	function preview_image(n) {
		previewed_image = n
		is_previewed_image_visible = !is_previewed_image_visible
	}
</script>


<div class="gallery">
	{#each images as image, i}	
		<div
			style="
				background-image: url('./assets/{image[0]}');
				grid-row: span {image[1]} / auto;
				grid-column: span {image[2]} / auto;
			"
			on:click={() => {preview_image(i)}}
		></div>
	{/each}
</div>

<div
	class={is_previewed_image_visible ? 'preview' : 'preview_hidden'}
	>
	<img
		on:click={() => {is_previewed_image_visible = !is_previewed_image_visible}}
		src="./assets/{images[previewed_image][0]}"
	/>
</div>

<style lang="scss">
	:global(body) {
		background: black;
		padding: 2rem;
	}

	.gallery {
		display: grid;
		gap: 2rem;

		/* grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); */
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		grid-auto-rows: 240px;

		div {
			border-radius: 10px;
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			transition: .1s;
			cursor: pointer;

			&:hover {
				transform: scale(1.1);
			}
		}
	 }

	.preview {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba($color: #000000, $alpha: 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		user-select:none;
		transition: .1s;

		img {
			object-fit: contain;
			height: 80vh
		}
	}

	.preview_hidden {
		display: none;
	}
</style>
