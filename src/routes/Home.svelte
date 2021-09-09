<script lang="ts">
	let previewed_image = 0
	let is_previewed_image_visible = false
	let update_groups_filter = 0
	let groups = []
	let selected_groups = []

	let images = [
		["eateot.jpg",			1,	1, ['eateot']],
		["fortvivlan.jpg",		2,	1, ['fortvivlan']],
		["dimensia.jpg",		1,	1, ['dimensia']],
		["eateot.jpg",			1,	1, ['eateot']],
		["fortvivlan.jpg",		2,	1, ['fortvivlan']],
		["dimensia.jpg",		1,	1, ['dimensia']],
		["eateot.jpg",			1,	1, ['eateot']],
		["eateot.jpg",			1,	1, ['eateot']],
		["fortvivlan.jpg",		2,	1, ['fortvivlan']],
		["dimensia.jpg",		1,	1, ['dimensia']],
		["fortvivlan.jpg",		2,	1, ['fortvivlan']],
		["dimensia.jpg",		1,	1, ['dimensia']],
		["eateot.jpg",			1,	1, ['eateot']],
		["fortvivlan.jpg",		2,	1, ['fortvivlan']],
		["dimensia.jpg",		1,	1, ['dimensia']],
		["eateot.jpg",			1,	1, ['eateot']],
		["fortvivlan.jpg",		2,	1, ['fortvivlan']],
		["eateot.jpg",			1,	1, ['eateot']],
		["fortvivlan.jpg",		2,	1, ['fortvivlan']],
		["dimensia.jpg",		1,	1, ['dimensia']],
		["dimensia.jpg",		1,	1, ['dimensia']],
		["eateot.jpg",			1,	1, ['eateot']],
		["fortvivlan.jpg",		2,	1, ['fortvivlan']],
		["dimensia.jpg",		1,	1, ['dimensia']],
	]

	for (let i = 0; i < images.length; i++) {
		let curr_group_set = images[i][3]
		// console.log(curr_group_set)
		for (let j = 0; j < curr_group_set.length; j++) {
			let curr_group = curr_group_set[j]
			if (!groups.includes(curr_group)) groups.push(curr_group)
		}
	}

	selected_groups = groups

	function preview_image(n) {
		previewed_image = n
		is_previewed_image_visible = !is_previewed_image_visible
	}

	function is_image_passing_filter(image) {
		let curr_group_set = image[3]
		for (let i = 0; i < curr_group_set.length; i++) {
			let curr_group = curr_group_set[i]
			if (selected_groups.includes(curr_group)) return true
		}
		return false
	}
</script>

<select class="filter_options" multiple bind:value={selected_groups} on:click={() => update_groups_filter++}>
	{#each groups as group }
		<option value={group}>{group}</option>
	{/each}
</select>

<div class="gallery">
	{#key update_groups_filter}	
		{#each images as image, i}
		{#if is_image_passing_filter(image)}
			<div
				style="
					background-image: url('./assets/{image[0]}');
					grid-row: span {image[1]} / auto;
					grid-column: span {image[2]} / auto;
				"
				on:click={() => {preview_image(i)}}
			></div>
		{/if}
		{/each}
	{/key}
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

	.filter_options {
		background: #0000;
		border: none;

		option {
			color: white;
			background: #0000;
		}

		option:hover {
			color: black;
			background: #FFF;
		}
	}

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
