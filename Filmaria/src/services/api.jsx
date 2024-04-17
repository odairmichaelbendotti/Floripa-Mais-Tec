//Base da URL: https://api.themoviedb.org/3/
//URL da API: movie/now_playing?api_key=bb8968a5b4783e69dc794148fdb5545c&language=pt-br
//API do Token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjg5NjhhNWI0NzgzZTY5ZGM3OTQxNDhmZGI1NTQ1YyIsInN1YiI6IjY2MWYwMGZlNTI4YjJlMDE2NDNlZTAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7FdkNhjaq741Z5b_syAoOkHQQtUmZt8AP6N7mgygXYc

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/' //base URL é a parte da URL que não vai mudar para nenhuma chamada
})

export default api;