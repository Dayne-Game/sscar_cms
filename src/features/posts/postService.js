import axios from 'axios'
import { API_URL } from '../../config/api_url'

export const getAllPosts = async () => {
    const url = API_URL + '/api/v1/posts'

    const response = await axios.get(url)

    return response.data
}

export const getSinglePost = async (id) => {
    const url = API_URL + '/api/v1/posts/' + id

    const response = await axios.get(url)

    return response.data
}

