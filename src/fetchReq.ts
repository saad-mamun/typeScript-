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
};


// for practice Demo data
interface Demo {
    userId: number,
    id:number,
    title:string,
    body: string
}

const fetchDemoData = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if(!response.ok){
            throw new Error(`HTTP error ${response.status}`)
        }
        const data: Demo = await response.json()
    } catch (error:any) {
        console.error("Error fetching demo data:", error)
    }
}