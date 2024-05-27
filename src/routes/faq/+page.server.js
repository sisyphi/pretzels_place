import client from '$lib/sanityClient'; 

/**
 * @type {{ faq_items: any; }}
 */
let data;

async function fetchFAQItems() {
    const faq_items = await client.fetch(`*[_type == "faq_items"] {questions, answers}`);

    if(faq_items) {
        data = { faq_items };
        return data
    }

    return {
        status: 500,
        body: new Error('Internal Server Error'),
    }
}

export async function load() {
    if(!data) {
        return await fetchFAQItems();
    } 
    else {
        return data
    }
}