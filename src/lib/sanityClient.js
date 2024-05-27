import { createClient } from '@sanity/client';
import { SANITY_PROJECT_ID } from '$env/static/private'

const client = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2024-03-11',
    useCdn: true,
});

export default client;