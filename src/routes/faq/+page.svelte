<script>
	import { Accordion } from 'bits-ui';
	import CaretDown from '$lib/icons/CaretDown.svelte';

	const faq_items = [
		{
			title: 'How can I adopt a cat from your organization?',
			content:
				'If you find a stray cat, first check for a collar and identification tags. If the cat appears healthy and friendly, it might belong to someone in the neighborhood. You can create flyers and post on local lost-and-found pet websites and social media. If the cat is in distress or injured, contact us or your local animal control for assistance. We can provide advice and resources to help you determine the best course of action.',
		},
		{
			title: 'Are there requirements to become a foster parent?',
			content:
				'If you find a stray cat, first check for a collar and identification tags. If the cat appears healthy and friendly, it might belong to someone in the neighborhood. You can create flyers and post on local lost-and-found pet websites and social media. If the cat is in distress or injured, contact us or your local animal control for assistance. We can provide advice and resources to help you determine the best course of action.',
		},
		{
			title: 'Can I adopt more than one cat at a time?',
			content:
				'If you find a stray cat, first check for a collar and identification tags. If the cat appears healthy and friendly, it might belong to someone in the neighborhood. You can create flyers and post on local lost-and-found pet websites and social media. If the cat is in distress or injured, contact us or your local animal control for assistance. We can provide advice and resources to help you determine the best course of action.',
		},
		{
			title: "How can I support if I can't adopt or foster?",
			content:
				'If you find a stray cat, first check for a collar and identification tags. If the cat appears healthy and friendly, it might belong to someone in the neighborhood. You can create flyers and post on local lost-and-found pet websites and social media. If the cat is in distress or injured, contact us or your local animal control for assistance. We can provide advice and resources to help you determine the best course of action.',
		},
		{
			title: 'What should I do if I find a stray cat?',
			content:
				'If you find a stray cat, first check for a collar and identification tags. If the cat appears healthy and friendly, it might belong to someone in the neighborhood. You can create flyers and post on local lost-and-found pet websites and social media. If the cat is in distress or injured, contact us or your local animal control for assistance. We can provide advice and resources to help you determine the best course of action.',
		},
	];
</script>

<section id="faq">
	<div class="xs:max-w-2xl xs:pt-16 mx-auto p-8 md:max-w-4xl">
		<h1 class="font-poppins text-brown text-3xl font-bold md:text-5xl">Frequently Asked Questions</h1>
		<Accordion.Root class="py-8">
			{#each faq_items as item, i}
				<Accordion.Item value="${i}" class="border-brown border-b-2 py-4">
					<Accordion.Header>
						<Accordion.Trigger class="flex w-full justify-between [&[data-state=open]>svg]:rotate-180">
							<p class="font-poppins text-brown text-left text-2xl font-bold">{item.title}</p>
							<CaretDown class="text-brown xs:size-8 size-12 " />
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Content class="font-generalsans text-brown pt-4 font-medium">{item.content}</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
</section>
