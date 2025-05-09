import { v4 as uuid } from "uuid";
import { useState } from "react";

import { Button, Container, Input, ToDoList, ListItem, Trash, Check, Empty } from "./styles";

//Sintaxe JSX
function App() {
  // Codigo JavaScript

  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const inputChange = (event) => {
    setInputTask(event.target.value);
  };

  const handleClick = () => {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }]);
    }
    setInputTask();
  };

 function taskFinished(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );
    setList(newList);
  }

  function taskDelete(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  //Codigo Html
  return (
    <Container>
      <ToDoList>
        <Input
          className="input-value"
          onChange={inputChange}
          placeholder="Digite o que tenho para fazer"
        />
        <Button onClick={handleClick} type="button">
          Adicionar
        </Button>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem $isFinished={item.finished} key={item.id}>
                <Check onClick={() => taskFinished(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => taskDelete(item.id)} />
              </ListItem>
            ))
          ) : (
            <Empty>Nao ha itens na lista</Empty>
          )}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
