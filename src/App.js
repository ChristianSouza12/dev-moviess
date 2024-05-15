import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { Container, AddButton, ContainerItens, Input, ListItem, Trash, Check } from "./styles";
import ParticlesComponent from './components/particles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [list, setList] = useState([]);
    const [task, setTask] = useState("");

    function changeInput(event) {
        setTask(event.target.value);
    }

    function clickButton() {
        if (task) {
            setList([...list, { id: uuid(), task: task, finished: false }]);
            toast.success('Tarefa adicionada com sucesso!');
            setTask(""); 
        } else {
            toast.error('Por favor, escreva a tarefa antes de adicionar.');
        }
    }

    function finalizarTarefa(id) {
        const newList = list.map(item =>
            item.id === id ? { ...item, finished: !item.finished } : item
        );
        setList(newList);
    }

    function deletandoTarefa(id) {
        const novaLista = list.filter(item => item.id !== id);
        setList(novaLista);
        toast.error('Tarefa excluída com sucesso!');
    }

    return (
        <Container>
            <ParticlesComponent id="particles" />
            <ContainerItens>
                <Input value={task} onChange={changeInput} placeholder="Digite a tarefa..." />
                <AddButton onClick={clickButton}>Adicionar</AddButton>
                <ul>
                    {list.length > 0 ? (
                        list.map(item => (
                            <ListItem key={item.id} isFinished={item.finished}>
                                <Check style={{ cursor: "pointer" }} onClick={() => finalizarTarefa(item.id)} />
                                <li>{item.task}</li>
                                <Trash style={{ cursor: "pointer" }} onClick={() => deletandoTarefa(item.id)} />
                            </ListItem>
                        ))
                    ) : (
                        <h3>Por enquanto não há tarefas. <FaTasks style={{ marginLeft: "10px" }} /></h3>
                    )}
                </ul>
            </ContainerItens>
            <ToastContainer /> {}
        </Container>
    );
}

export default App;
