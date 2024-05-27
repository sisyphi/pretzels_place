<script>
	import { Accordion } from 'bits-ui';
	import CaretDown from '$lib/icons/CaretDown.svelte';

	export let data;
	let faq_items = data.faq_items;
</script>

<section id="faq">
	<div class="mx-auto p-8 xs:max-w-2xl xs:pt-16 md:max-w-4xl">
		<h1 class="font-poppins text-3xl font-bold text-brown md:text-5xl">Frequently Asked Questions</h1>
		<Accordion.Root class="py-8">
			{#each faq_items as item, i}
				<Accordion.Item value="${i}" class="border-b-2 border-brown py-4">
					<Accordion.Header>
						<Accordion.Trigger class="flex w-full justify-between [&[data-state=open]>svg]:rotate-180">
							<p class="text-left font-poppins text-2xl font-bold text-brown">{item.question}</p>
							<CaretDown class="size-12 text-brown xs:size-8" />
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Content class="pt-4 font-generalsans font-medium text-brown">{item.answer}</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
</section>
