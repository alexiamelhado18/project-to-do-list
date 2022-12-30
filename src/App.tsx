import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    // { id: 1, name: 'Item 1', done: false, },
    // { id: 2, name: 'Item 2', done: false, },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        {/* Área de adicionar nova tarefa */}

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index) => (
          <ListItem item={item} key={index} />
        ))}
      </C.Area>
    </C.Container> 
  );
}

export default App;