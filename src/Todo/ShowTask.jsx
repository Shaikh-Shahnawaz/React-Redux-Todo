import React, { useEffect, useState } from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useDispatch, useSelector } from 'react-redux'
import reducer, { getRemoveCardId, getEditData } from '../reducers/reducer'
function ShowTask({ setToggleInput, updateInputValue}) {

    const dispatch = useDispatch()
    const todoTask = useSelector((state) => state.todo) // getting the data from reducer

    let reducerData = todoTask.task

    // For Done Button
    const [checkLine, setCheckLine] = useState({})
    const [taskDone, setTaskDone] = useState({
        line: '',
        bg: ''
    })


    // --------------------Function for Close the task----------------------


    function closeTask(id) {


        dispatch(getRemoveCardId(id))  // sending the id to the reducer
    }


    // --------------------Function for Done task----------------------
    
    function doneTask(index) {
        
        taskDone.line = 'line-through'
        taskDone.bg = 'lightPink'
        setTaskDone(taskDone)
        
        setCheckLine({ ...checkLine, [index]: !checkLine[index] })
        
    }
    // --------------------Function for Edit  task----------------------

    function editTask(id,task){
     
        setToggleInput(false)
        dispatch(getEditData({id,task}))

    }



    return (
        <div className="container mt-5 " >

            <div className="row">


                {

                    reducerData.map((ele, index) => (

                        <div key={ele.id} class="card mb-4  mx-3" style={{ 'max-width': ' 18rem' }}>
                            <div class="card-header d-flex  justify-content-between">
                                <strong> Task {index + 1}</strong>

                                <div>

                                    <span title="Edit" onClick={()=>editTask(ele.id,ele.taskName)} style={{ 'cursor': 'pointer', 'color': '#3f00ff ' }} className=""> <ModeEditIcon />  </span>
                                    <span title="Done" onClick={() => doneTask(index)} style={{ 'cursor': 'pointer', 'color': '#32CD32	 ' }} className="mx-2"> <CheckCircleOutlineIcon />  </span>
                                    <span title="Close" onClick={() => closeTask(ele.id)} style={{ 'cursor': 'pointer', 'color': '#ff0000' }} className=""> <HighlightOffIcon /> </span>

                                </div>
                            </div>
                            <div class="card-body" >
                                {

                                    checkLine[index] ? <h5 class="card-title"> ✔ <span style={{ 'text-decoration': taskDone.line, 'backgroundColor': taskDone.bg, 'padding': '0 15px 0 15px', 'borderRadius': '6px' }}> {ele.taskName} </span>  </h5> : <h5 class="card-title">{ele.taskName}</h5>
                                }

                                <p class="card-text text-primary">{ele.date}</p>

                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default ShowTask
