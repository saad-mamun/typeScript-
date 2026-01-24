interface Todo {
    userId: number,
    id: number,
    title: string,
    body: string
}

const fetchData = async () => {
    try {
        const response = await fetch (
            "https://jsonplaceholder.typicode.com/posts"
        );
        if(!response.ok){
            throw new Error(`HTTP error ${response.status}`)
        }
        const data: Todo = await response.json()
    } catch (error:any) {
        
    }
}