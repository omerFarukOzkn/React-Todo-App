import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Tasks from './Tasks'

function Inputs() {

    const [todo, setTodo] = useState({})
    const [list, setList] = useState([])
    const input = useRef()

    useEffect(() => {
        let todos = JSON.parse(localStorage.getItem('array'))
        if(!todos){
            localStorage.setItem('array', JSON.stringify([]))
        }else{
            setList(todos)
        }
    }, [])

    useEffect(() => {
        let todos = JSON.parse(localStorage.getItem('array'))
        if(list != []){
            let anlikListe = JSON.stringify(list)
            todos = localStorage.setItem('array', anlikListe)
        }
    }, [list])


    function getInputValue(e){
        setTodo({
            text: e.target.value,
            isCompleted: false
        })
        if(e.key === 'Enter'){
            pushList()
        }
    }
    console.log(todo)

    function pushList(){
        setList([...list, todo])
        input.current.value = ''
    }
    console.log(list)

    return (
        <div className='container mt-3'>
            <div className="input-group">
                <input 
                type="text" 
                className='form-control' 
                ref={input}
                onKeyUp={getInputValue}
                />
                <button 
                className='btn btn-outline-secondary'
                onClick={pushList}
                >Todo ekle</button>
            </div>

            <Tasks list={list} setList={setList} />
        </div>
    )
}

export default Inputs