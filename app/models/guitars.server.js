export async function getGuitars() {
    return await fetch(`${process.env.API_URL}/guitars?populate=image`).then(res => res.json());
}

export async function getGuitar(url) {
    return await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`).then(res => res.json());
}