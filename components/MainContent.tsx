import styled from "styled-components";

const MainConteont = () => {
  return (
    <MainContent>
      <TitleMainContent>O que você vai fazer?</TitleMainContent>
      <Form>
        <Label>Título: </Label>
        <Input placeholder="Título da tarefa" />
        <Label>Dificuldade: </Label>
        <Input type="number" placeholder="1" />
        <ButtonSubmit>Cadastrar</ButtonSubmit>
      </Form>
      <SubTitleTodos>Suas tarefas:</SubTitleTodos>
      <ParagraphTodos>Não há tarefas cadastradas</ParagraphTodos>
    </MainContent>
  );
};

const MainContent = styled.div``;
const TitleMainContent = styled.h1``;
const Form = styled.form``;
const Label = styled.label``;
const Input = styled.input``;
const ButtonSubmit = styled.button``;
const SubTitleTodos = styled.h2``;
const ParagraphTodos = styled.p``;

export default MainConteont;
