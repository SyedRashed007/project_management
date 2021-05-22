import React, {useState, useEffect} from 'react'
import "../../index.css"

// to get the data from LS

const getLocalItmes = () => {
    let list = localStorage.getItem('lists');
    // console.log(list);

    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return [];
    }
}

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalItmes());
   
    const addItem = () => {
        if (!inputData) {
            alert('Enter a Todo');
        } else {
            setItems(
                items.map((elem) => {
                    return elem;
                })
            )
            const allInputData = { id: new Date().getTime().toString(), name:inputData }
            setItems([...items, allInputData]);
            setInputData('');
        } 
    }

    
    // delete the items
    const deleteItem = (index) => {
        const updateditems = items.filter((elem) => {
            return index !== elem.id;
        });

        setItems(updateditems);
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
                        <i className="fa fa-plus add-btn" title="Add item" onClick={() => addItem()}></i>
                    </div>

                    <div className="showItems">
                        {
                            items.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3> {elem.name} </h3>
                                        <div className='todo-btn'>
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
