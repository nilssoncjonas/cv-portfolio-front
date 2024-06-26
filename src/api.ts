

// local development
// const BASE_URL ='http://localhost:3000'
// hosted development
const BASE_URL ='https://my-api-backend-fa03.onrender.com'

export const fetchProject = async () => {
	const res = await fetch(`${BASE_URL}/project`)
	if (!res.ok) {
		throw new Error(`Could not get data, reason: ${res.status} ${res.statusText}`)
	}
	return await res.json()
}
