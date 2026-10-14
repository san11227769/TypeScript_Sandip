import axios, { type AxiosResponse } from "axios"

// axios.get('https://jsonplaceholder.typicode.com/users')
// .then(Response =>{
// const data = Response.data
//     }
// )

interface Todo{
    id: number;
  name: string;
  username: string;
  email: string;
}
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}


const fetchData = async (): Promise<void> => {
  try {
    const response: AxiosResponse<User[]> = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );

    console.log("Users:", response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log("Axios error:", error.message);
    } else {
      console.log("Unexpected error:", error);
    }
  }
};

fetchData();

const fetchDatatwo = async ()=> {

    try{
     const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/users");
     console.log("Todo", response.data);
    }catch(error: any){
        if(axios.isAxiosError(error)){
            console.log("Axios error", error)
        }
    }
}

fetchDatatwo();





const fetchDatathree = async (): Promise<void> => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data: User[] = await response.json();

    console.log("Users:", data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Fetch error:", error.message);
    } else {
      console.log("Unexpected error:", error);
    }
  }
};

fetchDatathree();

