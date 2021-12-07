import React, { useEffect, useRef, useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { makeStyles } from '@material-ui/core/styles';
import '../CSS/AddTask.css'
import ShowTask from "../Todo/ShowTask";
import UpdateIcon from '@mui/icons-material/Update';
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { getTasks, getRemoveFunction, getSearchData,getUpdateValue } from '../reducers/reducer'
// ---------- material ui styling ------------
const useStyles = makeStyles((theme) => ({
    AddCircleIcon: {
        '& svg': {
            fontSize: 40,
            color: 'aqua'
        }
    },

}));
// ---------- material ui styling end ------------


function AddTask() {

    const todoTask = useSelector((state)=>state.todo) // get data from reducer
    const dispatch = useDispatch()  // fro dispatching action to reducer

    const classes = useStyles(); // material ui css

    const addInputValue = useRef(null) // Ref For clearing the add input

    const [searchData, setSearchData] = useState('') // storing the search data from search input

    // storing the input date and id By Clicking on Add Btn
    const [allTask, setAllTask] = useState([])

    // handle Change of Add Task Input
    const [input, setInput] = useState({

        id: '',
        taskName: '',
        date: ''
        
    })

    const [toggleInput,setToggleInput] = useState(true) // toggle for update/add task input

    // --------------------------Function for handle change Add Task Input------------------------------

    function handleChange(event) {

        setInput({ 
            ...input, [event.target.name]: event.target.value
         })
           
    }

    // --------------------------Function for adding/storing task in use state(array)---------------------------

    function addingTask() {
       
    if( addInputValue.current.value == ''){
        alert("Task Cannot be Empty !!")
    }
    else{
        doWork()
    }           
          
    }
    
    function doWork(){

    input.id = new Date().getTime().toString()  // for id
            
    input.date = new Date().toLocaleString() // for date 


    allTask.push(input)
    setAllTask([...allTask])
        
    // after clicking add btn send data to reducer
    dispatch(getTasks(input))
        
    // Ref for clearing the input
    addInputValue.current.value = ''

    }



    // -------------------Function for remove all element from (array)-------------------

    function removeAll() {
       
        dispatch(getRemoveFunction(allTask))

    }

   

    // ------------------Function for handle the search Data from search input------------------

    function handleSearch(event) {

        setSearchData(event.target.value)     
        
        dispatch(getSearchData(searchData.toLowerCase()))
       
    }


    // -----------------------------Fuction for Updating the task-----------------------------
    
    const [updateValue,setUpdateValue] = useState('')

    function handleEdit(event){
        setUpdateValue(event.target.value)
    }
    
    function updatingTask(){
        
        setToggleInput(true)

        dispatch(getUpdateValue(updateValue))

        addInputValue.current.value = ''
        // debugger;
        
    }


  

  


    return (
        <div>
            {/* ===================================================================== [ Add Task ] ===================================================================== */}
            <div className="container mt-4">

                <div className="row  bg-info rounded text-center  p-2">

                    <button onClick={removeAll} class="btn btn-light btn-sm col-lg-3 col-md-2 col-sm-4 ">Remove All</button>

                    <h3 className=" col-lg-6 col-md-8 col-sm-4 " >TO-DO LIST</h3>

                    <span className="col-lg-3  col-md-2 col-sm-4" >
                        <input onChange={handleSearch} type="text" className="form-control" placeholder=" 🔎 Search here " />
                    </span>

                </div>

                <div class="alert alert-info mt-3 col-md-6 offset-3" role="alert">
                    Successfully Logged In !!! |  Welcome Back <strong> {todoTask.userName.toUpperCase()} </strong>
                </div>

                {
                    toggleInput ? <div class="addtask-div form-group mt-5 d-flex col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 text-center">

                    <input ref={addInputValue} onChange={handleChange} name="taskName" type="text" class="form-control me-2 " placeholder=" Add new task" />
                    <i onClick={addingTask} title="Add Task" style={{ 'cursor': 'pointer' }} className={classes.AddCircleIcon}>   < AddCircleIcon /> </i>
                   
                </div>
                    :
                <div class="addtask-div form-group mt-5 d-flex col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 text-center">
                        {/* value={todoTask.editData}  */}
                    <input ref={addInputValue} onChange={handleEdit} type="text" class="form-control me-2 " placeholder=" Update task" />
                    <i onClick={updatingTask} title="Update Task" style={{ 'cursor': 'pointer' }} className={classes.AddCircleIcon}>   < UpdateIcon /> </i>

                </div>
                }
               


            </div>
            {/* ===================================================================== [ Show Task ] ===================================================================== */}

            <ShowTask  setToggleInput={setToggleInput}  />

        </div>
    )
}

export default AddTask
