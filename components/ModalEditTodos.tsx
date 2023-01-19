import { useRef } from "react";
import styled from "styled-components";
import { useClickAway } from "react-use";
import { motion } from "framer-motion";

const ModalEditTodos = ({
  setModalState,
  dificultyTodo,
  titleTodo,
  setTitleTodo,
  setDificultyTodo,
  todoId,
  url,
}: any) => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    setModalState(false);
  });
  const handleChangeData = async () => {
    const todo = {
      titleTodo,
      dificultyTodo,
    };
    console.log(todo);
    await fetch(`${url}/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
  };
  return (
    <AlignDiv>
      <MainContainer
        ref={ref}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.2 }}
      >
        <>
          <TitleModal>Editar tarefa</TitleModal>
          <Form onSubmit={handleChangeData}>
            <Label>Título: </Label>
            <Input
              placeholder="Título da tarefa"
              value={titleTodo}
              required
              onChange={(e) => {
                setTitleTodo(e.target.value);
              }}
            />
            <Label>Dificuldade: </Label>
            <Input
              type="number"
              required
              value={dificultyTodo}
              placeholder="1"
              onChange={(e) => {
                setDificultyTodo(e.target.value);
              }}
            />
            <ButtonSubmit type="submit" value="Alterar dados" />
          </Form>
          {console.log(dificultyTodo)}
          {console.log(titleTodo)}
        </>
      </MainContainer>
    </AlignDiv>
  );
};
export const AlignDiv = styled.div`
  display: grid;
  place-items: center;
`;
export const MainContainer = styled(motion.div)`
  width: 30%;
  height: 50%;
  backdrop-filter: blur(10px);
  background: #a09898;
  display: flex;
  position: fixed;
  z-index: 2000;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const TitleModal = styled.h1``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Label = styled.label`
  font-size: 1.4em;
`;
const Input = styled.input`
  border: 1px solid black;
  width: 130%;
  padding: 5px;
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

export default ModalEditTodos;
