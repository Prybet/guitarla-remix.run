export async function getCourse() {
    return await fetch(`${process.env.API_URL}/course?populate=image`).then(res => res.json());
}