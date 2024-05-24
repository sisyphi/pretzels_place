<script>
	import Menu from '$lib/icons/Menu.svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
	$: mobileMenuClasses = isMenuOpen ? 'flex flex-col w-full' : 'hidden';
</script>

<header class="bg-brown">
	<nav class="mx-auto flex max-w-7xl flex-wrap justify-between text-center font-poppins text-xl font-bold text-offwhite md:flex-nowrap">
		<div class="m-4 flex text-center">
			<img src="" alt="Pretzel's Place" />
		</div>
		<div class="m-4 flex md:hidden">
			<button on:click={toggleMenu}>
				<Menu class="size-8"></Menu>
			</button>
		</div>
		<div class="{mobileMenuClasses} md:flex md:w-auto">
			<ul class="text-left md:m-8 md:flex md:flex-row md:gap-8">
				<li class="mx-4 mb-4 md:m-auto">
					<a on:click={() => (isMenuOpen = false)} href="/" class="hover:underline">Home</a>
				</li>
				<li class="mx-4 my-4 md:m-auto">
					<a on:click={() => (isMenuOpen = false)} href="/about-us" class="hover:underline">About Us</a>
				</li>
				<li class="mx-4 my-4 md:m-auto">
					<a on:click={() => (isMenuOpen = false)} href="/our-cats" class="hover:underline">Our Cats</a>
				</li>
				<li class="mx-4 my-4 text-orange md:m-auto">
					<a on:click={() => (isMenuOpen = false)} href="/donation" class="hover:underline">Donate</a>
				</li>
				<li class="mx-4 my-4 text-orange md:m-auto">
					<a on:click={() => (isMenuOpen = false)} href="/adoption-fostering" class="hover:underline">Adopt & Foster</a>
				</li>
				<li class="mx-4 my-4 text-orange md:m-auto">
					<a on:click={() => (isMenuOpen = false)} href="/faq" class="hover:underline">Educate</a>
				</li>
			</ul>
		</div>
	</nav>
</header>
