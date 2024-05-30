import client from "$lib/sanityClient";

/**
 * @type {{ cats?: any; }}
 */
let data;

async function fetchCats() {
    const cats = await client.fetch(`*[_type == "cats"] {name, coat, picture}`);
    
    if(cats) {
        data = { cats };
        return data
    }
    
    return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}

export async function load(){
    if(!data) {
        return await fetchCats();
    }
    else {
        return data;
    }
}