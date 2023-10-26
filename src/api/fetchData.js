import fetchAPI from './index'

export async function fetchBooks(){
    return fetchAPI.get('/books').then(res=>{
        console.log(res.data)
        return res.data;
    }).catch(err=>{
        throw err
    })
}

export async function fetchPosts(){
    try{
        let res = await fetchAPI.get('/posts')
        console.log(res.data)
        return res.data;
    }
    catch(err){
        return Promise.reject(err)
    }
}
