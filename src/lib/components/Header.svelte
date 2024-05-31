<script>
	import Menu from '$lib/icons/Menu.svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
	$: mobileMenuClasses = isMenuOpen ? 'flex flex-col w-full' : 'hidden';
</script>

<header class="bg-brown">
	<nav class="flex flex-wrap justify-between mx-auto text-xl font-bold text-center max-w-7xl font-poppins text-offwhite md:flex-nowrap">
		<div class="flex m-4 text-center">
			<a href="/">
				<img src="" alt="Pretzel's Place" />
			</a>
		</div>
		<div class="flex m-4 md:hidden">
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
