import React from 'react'
import { FaCheck } from "react-icons/fa";
import { BsTrash3Fill } from "react-icons/bs";

function Tasks({list, setList}) {

    function deleteItem(index){
        let newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }

    function checkItem(index){
        let newList = [...list]
        if(newList[index].isCompleted){
            newList[index].isCompleted = false
        }else{
            newList[index].isCompleted = true
        }
        setList(newList)
    }

    let dogru = 'd-flex justify-content-between p-3 mt-3 align-items-center bg-secondary rounded-3'

    let yanlis = 'd-flex justify-content-between p-3 mt-3 align-items-center bg-white rounded-3'

    return (
        <>
            <ul className='list-unstyled'>
                {list.map((value, index) => (
                    <li key={index} className={value.isCompleted ? dogru : yanlis}>
                        <span>{value.text}</span>
                        <div className='d-flex gap-3'>
                            <FaCheck size={30} onClick={() => checkItem(index)}/>
                            <BsTrash3Fill size={30} onClick={() => deleteItem(index)}/>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Tasks