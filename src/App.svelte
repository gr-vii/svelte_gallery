<script>
	import Router from 'svelte-spa-router'
	/* import {wrap} from 'svelte-spa-router/wrap' */

	import Home from './routes/Home.svelte'
	import NotFound from './routes/NotFound.svelte'

	const routes = {
    '/': Home,
    /* '/book': wrap({ asyncComponent: () => import('./routes/Book.svelte') }), */
    '*': NotFound,
	}
</script>

<Router {routes}/>

<style lang="scss" global>
@windicss;
</style>
