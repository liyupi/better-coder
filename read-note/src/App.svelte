<script>
	import {cards} from './store';
	import {onMount} from 'svelte';
	import Card from "./Card.svelte";
	import AddCard from "./AddCard.svelte";

	onMount(() => {
		console.log($cards);
	});
</script>

<div id="app">
	{#each $cards as card, i}
		<Card {...card} index={i}/>
	{/each}
	<AddCard/>
</div>

<style>
	#app {
		padding-bottom: 150px;
	}
</style>