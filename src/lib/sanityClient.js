import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'ps0oomxl',
    dataset: 'production',
    apiVersion: '2024-03-11',
    useCdn: true,
});

export default client;