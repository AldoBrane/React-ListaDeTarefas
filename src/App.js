import { useState } from "react";

function App() {
  function addItem(){
    if(!newItem){
        alert("Nenhuma nova tarefa foi inserida");
        return;
    }
    const item = {
        id: Math.floor(Math.random() * 1000),
        value: newItem
    };
    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }
  function deleta(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div className="principal">
      <h1>Lista de Tarefas</h1>
      <input 
        class="listainput"
        type="text" 
        placeholder="Escreva a nova tarefa" 
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button class="listabotao" onClick={() => addItem() }>Adicionar</button>
      <ul>
        {items.map(item => {
          return(
            <li class="tarefa" key={item.id}>{item.value} <button class="listabotao" onClick={() => deleta(item.id)}>Feito</button></li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
