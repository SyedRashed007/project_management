import React, {useState, useEffect} from 'react'
// import todo from "../images/todo.svg";
import "../../index.css"


// to get the data from LS

const getLocalItmes = () => {
    let list = localStorage.getItem('lists');
    console.log(list);

    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return [];
    }
}

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalItmes());
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {
        if (!inputData) {
            alert('Enter a Todo');
        } else if(inputData && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputData }
                    }
                    return elem;
                })
            )
                 setToggleSubmit(true);

                 setInputData('');

                 setIsEditItem(null);
        } else {
            const allInputData = { id: new Date().getTime().toString(), name:inputData }
            setItems([...items, allInputData]);
            setInputData('')
        }
    }

    
    // delete the items
    const deleteItem = (index) => {
        const updateditems = items.filter((elem) => {
            return index !== elem.id;
        });

        setItems(updateditems);
    }

// edit the item
//     When user clikc on edit button 

// 1: get the id and name of the data which user clicked to edit
// 2: set the toggle mode to change the submit button into edit button
// 3: Now update the value of the setInput with the new updated value to edit. 
// 4: To pass the current element Id to new state variable for reference 
    
    
    const editItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id === id
        });
        console.log(newEditItem);

        setToggleSubmit(false);

        setInputData(newEditItem.name);

        setIsEditItem(id);

    }
    

    // add data to localStorage
    useEffect(() => {
       localStorage.setItem('lists', JSON.stringify(items))
    }, [items]);

    return (
        <>
             <div className="main-div">
                <div className="child-div">
                    <div>
                        <h5>Add your Todo's here</h5>
                    </div>
                    <div className="addItems">
                        <input type="text" className="form" placeholder="Add item..."
                            value={inputData }
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        {/* toggle the submit btn with the edit btn  */}
                        { toggleSubmit ? <i className="fa fa-plus add-btn" title="Add item" onClick={() => addItem()}></i> :  <i className="far fa-edit add-btn" title="Edit item" onClick={addItem}></i> }
                    </div>

                    <div className="showItems">
                        {
                            items.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3> {elem.name} </h3>
                                        <div className='todo-btn'>
                                            <i className="far fa-edit add-btn" title="Edit item" onClick={() => editItem(elem.id)}></i>
                                            <i className="far fa-trash-alt add-btn" title="Delete item" onClick={() => deleteItem(elem.id)}></i>
                                        </div>
                                       
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
         </div>   
        </>
    )
}

export default Todo
