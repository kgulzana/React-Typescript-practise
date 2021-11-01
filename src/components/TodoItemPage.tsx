import React,{FC, useEffect,useState} from 'react'
import axios from "axios";
import { ITodo } from "../types/types";

const TodosItemPage:FC =()=> {
      const [todo, setTodo] = useState<ITodo[]>([]);
     useEffect(() => {
       fetchTodo();
     }, []);

     async function fetchTodo() {
       try {
         const response = await axios.get<ITodo[]>(
           "https://jsonplaceholder.typicode.com/todos/:id"
         );
         setTodo(response.data);
       } catch (e) {
         alert(e);
       }
     }
    return (
        <div>
            
        </div>
    )
}

export default TodosItemPage
