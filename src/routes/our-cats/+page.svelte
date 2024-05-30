<script>
	import Uno_1 from '$lib/images/Uno-1.jpg';
	import Uno_2 from '$lib/images/Uno-2.jpg';
	import Renault_1 from '$lib/images/Renault-1.jpg';
	import Renault_2 from '$lib/images/Renault-2.jpg';

	import Test_1 from '$lib/images/Test-1.png';

	const cats = [
		{ name: 'Uno', picture: Uno_1 },
		{ name: 'Test', picture: Test_1 },
		{ name: 'Renault', picture: Renault_1 },
		{ name: 'Renault', picture: Renault_1 },
		{ name: 'Test', picture: Test_1 },
		{ name: 'Uno', picture: Uno_1 },
		{ name: 'Renault', picture: Renault_1 },
		{ name: 'Uno', picture: Uno_1 },
		{ name: 'Test', picture: Test_1 },
		{ name: 'Uno', picture: Uno_1 },
		{ name: 'Renault', picture: Renault_1 },
	];
</script>

<section id="faq">
	<div id="title" class="mx-auto p-8 xs:max-w-2xl xs:pt-16 md:max-w-4xl">
		<h1 class="pb-4 font-poppins text-3xl font-bold text-brown md:text-5xl">Our Cats</h1>
		<div id="cat-grid" class="flex flex-wrap items-stretch justify-center gap-4">
			{#each cats as cat}
				<div class="relative max-w-xs flex-grow basis-48">
					<a href="">
						<img class="h-full w-full rounded-2xl object-cover object-center" src={cat.picture} alt="" />
						<p class="text-white absolute bottom-0 left-0 m-0 box-border w-full p-8 font-poppins text-4xl font-bold">{cat.name}</p>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
