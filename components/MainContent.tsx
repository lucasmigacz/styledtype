import React, { FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiDelete, FiEdit } from 'react-icons/fi';
import ModalEditTodos from './ModalEditTodos';

interface todoProps {
  titleTodo: string;
  dificultyTodo: string;
  id: number;
}

interface addTodoProps {
  titleTodo: string;
  dificultyTodo: string;
}

const url = 'http://localhost:3000/todos';

const MainConteont = () => {
  // form
  const [titleTodo, setTitleTodo] = useState('');
  const [dificultyTodo, setDificultyTodo] = useState('');
  const [todoList, setTodoList] = useState<todoProps[]>([]);

  const [modalState, setModalState] = useState<false | number>(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setTodoList(json));
  }, []);

  const resetForm = () => {
    setTitleTodo('');
    setDificultyTodo('');
  };

  const addTodo = async (todo: addTodoProps) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });

    const json = await res.json();

    setTodoList((prev) => [...prev, json]);
    resetForm();
  };

  const removeTodo = async (todoId: Number) => {
    const res = await fetch(`${url}/${todoId}`, {
      method: 'DELETE',
    });
    setTodoList((prev) => prev.filter((current) => current.id !== todoId));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      titleTodo,
      dificultyTodo,
    };
    addTodo(todo);
  };

  return (
    <MainContent>
      <TitleMainContent>O que você vai fazer?</TitleMainContent>
      <Form onSubmit={handleSubmit}>
        <Label>Título: </Label>
        <Input
          placeholder='Título da tarefa'
          value={titleTodo}
          required
          onChange={(e) => {
            setTitleTodo(e.target.value);
          }}
        />
        <Label>Dificuldade: </Label>
        <Input
          type='number'
          required
          value={dificultyTodo}
          placeholder='1'
          onChange={(e) => {
            setDificultyTodo(e.target.value);
          }}
        />
        <ButtonSubmit type='submit' value='Cadastrar' />
      </Form>
      {modalState !== false && (
        <ModalEditTodos
          setModalState={setModalState}
          todoId={modalState}
          setTitleTodo={setTitleTodo}
          dificultyTodo={dificultyTodo}
          setDificultyTodo={setDificultyTodo}
        />
      )}
      <SubTitleTodos>Suas tarefas:</SubTitleTodos>
      <div>
        {todoList.length > 0 ? (
          <UlStyledTodos>
            {todoList.map((todo) => (
              <LiStyledTodos key={`todo_${todo.id}`}>
                <>
                  {/* {setCurrentTodoId(todo.id)} */}
                  {todo.titleTodo}
                  <p>Dificuldade:</p> {todo.dificultyTodo}
                  <DivButtonDelete>
                    <FiEdit onClick={() => setModalState(todo.id)} size={35} />
                    <FiDelete onClick={() => removeTodo(todo.id)} size={35} />
                  </DivButtonDelete>
                </>
              </LiStyledTodos>
            ))}
          </UlStyledTodos>
        ) : (
          <ParagraphNoHaveTodos>
            Não há tarefas por enquanto
          </ParagraphNoHaveTodos>
        )}
      </div>
    </MainContent>
  );
};

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;
const TitleMainContent = styled.h2`
  margin: 50px 0;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 1.4em;
`;
const Input = styled.input`
  border: 1px solid black;
  padding: 4px 90px;
  font-size: 1.1em;
  transition: 0.3s;
  :focus {
    outline: 0;
    transform: scale(1.01);
  }
`;
const ButtonSubmit = styled.input`
  padding: 10px 40px;
  margin: 40px 0;
  font-size: 1.1em;
  border: 1px solid black;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transform: scale(1.01);
  }
`;
const SubTitleTodos = styled.h2`
  margin-bottom: 20px;
`;
const LiStyledTodos = styled.li`
  width: 250px;
  height: 250px;
  background-color: #6d6d79;
  border-radius: 20px;
  padding: 5px;
  margin: 5px 5px 5px 5px;
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  color: #c0c0c7;
  cursor: default;
  :hover {
    transform: scale(1.02);
  }
`;
const UlStyledTodos = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  z-index: 999;
`;
const ParagraphNoHaveTodos = styled.p`
  font-size: 1.2em;
  color: #9d9da5;
  margin-bottom: 20px;
`;
const DivButtonDelete = styled.div`
  padding: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-bottom: auto;
`;

export default MainConteont;
