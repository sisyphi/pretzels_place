<script lang="ts">
	import { Accordion } from 'bits-ui';
	import CaretDown from '$lib/icons/CaretDown.svelte';
</script>

<section id="faq" class="">
	<div class="xs:max-w-2xl xs:pt-16 mx-auto p-8 md:max-w-4xl">
		<h1 class="font-poppins text-brown text-4xl font-bold md:text-5xl">Frequently Asked Questions</h1>
		<Accordion.Root class="py-8">
			<Accordion.Item value="1" class="border-brown border-b-2 py-4">
				<Accordion.Header>
					<Accordion.Trigger class="flex w-full justify-between [&[data-state=open]>svg]:rotate-180">
						<p class="font-poppins text-brown text-left text-2xl font-bold">How can I adopt a cat from your organization?</p>
						<CaretDown class="text-brown xs:size-8 size-12 " />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content class="font-generalsans text-brown pt-4 font-medium"
					>If you find a stray cat, first check for a collar and identification tags. If the cat appears healthy and friendly, it might belong to someone in the neighborhood. You can create flyers and post on local lost-and-found pet websites and
					social media. If the cat is in distress or injured, contact us or your local animal control for assistance. We can provide advice and resources to help you determine the best course of action.</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="2" class="border-brown border-b-2 py-4">
				<Accordion.Header>
					<Accordion.Trigger class="flex w-full justify-between [&[data-state=open]>svg]:rotate-180">
						<p class="font-poppins text-brown text-left text-2xl font-bold">How can I adopt a cat from your organization?</p>
						<CaretDown class="text-brown xs:size-8 size-12 " />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content class="font-generalsans text-brown pt-4 font-medium"
					>If you find a stray cat, first check for a collar and identification tags. If the cat appears healthy and friendly, it might belong to someone in the neighborhood. You can create flyers and post on local lost-and-found pet websites and
					social media. If the cat is in distress or injured, contact us or your local animal control for assistance. We can provide advice and resources to help you determine the best course of action.</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="3" class="border-brown border-b-2 py-4">
				<Accordion.Header>
					<Accordion.Trigger class="flex w-full justify-between [&[data-state=open]>svg]:rotate-180">
						<p class="font-poppins text-brown text-left text-2xl font-bold">How can I adopt a cat from your organization?</p>
						<CaretDown class="text-brown xs:size-8 size-12 " />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content class="font-generalsans text-brown pt-4 font-medium"
					>If you find a stray cat, first check for a collar and identification tags. If the cat appears healthy and friendly, it might belong to someone in the neighborhood. You can create flyers and post on local lost-and-found pet websites and
					social media. If the cat is in distress or injured, contact us or your local animal control for assistance. We can provide advice and resources to help you determine the best course of action.</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="4" class="border-brown border-b-2 py-4">
				<Accordion.Header>
					<Accordion.Trigger class="flex w-full justify-between [&[data-state=open]>svg]:rotate-180">
						<p class="font-poppins text-brown text-left text-2xl font-bold">How can I adopt a cat from your organization?</p>
						<CaretDown class="text-brown xs:size-8 size-12 " />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content class="font-generalsans text-brown pt-4 font-medium"
					>If you find a stray cat, first check for a collar and identification tags. If the cat appears healthy and friendly, it might belong to someone in the neighborhood. You can create flyers and post on local lost-and-found pet websites and
					social media. If the cat is in distress or injured, contact us or your local animal control for assistance. We can provide advice and resources to help you determine the best course of action.</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</div>
</section>
