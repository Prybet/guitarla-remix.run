export async function getPosts() {
    return await fetch(`${process.env.API_URL}/posts?populate=image`).then(res => res.json());
}

export async function getPost(url) {
    console.log(url);
    return await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`).then(res => res.json());
}