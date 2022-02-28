import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import Button from "../../Components/Button";
import Card from "../../Components/Cards";
import Modal from "../../Components/Modal";
import ModalUpdate from "../../Components/ModalUpdate";
import {FaJs,FaHtml5,FaCss3Alt,FaReact,FaVuejs} from "react-icons/fa"

import {
  DashContainer,
  Header,
  TecnologiesBox,
  TecnologiesContainer,
  TecnologiesHeader,
  UserContainer,
} from "./style";

export default function Dashboard({
  authenticated,
  setAuthenticated,
  tasks,
  setTasks,
  showModal,
  setShowModal,
  showModalUpdate,
  setShowModalUpdate,
  idSel,
  setIdSel,
  user,

}) {

  if (!authenticated) {
    return <Redirect to={"/"} />;
  }
  return (
    <>
      <Header>
        <DashContainer>
          <h1>KenzieHub</h1>
          <Button
            onClick={() => {
              localStorage.clear();
              setAuthenticated(false);
              toast("Você foi deslogado");
            }}
          >
            Sair
          </Button>
        </DashContainer>
      </Header>

      <UserContainer>
        <DashContainer>
          <h2>Olá, {user.name}!</h2>
          <p>{user.course_module}</p>
        </DashContainer>
      </UserContainer>

      <TecnologiesContainer>
        <DashContainer>
          <TecnologiesHeader>
            <h3>Tecnologies</h3>
            <Button onClick={() => setShowModal(true)}>+</Button>
          </TecnologiesHeader>



          <TecnologiesBox>
            {tasks.length===0 ? (
            <div className="vazio" >
              <FaHtml5/>
              <FaCss3Alt/>
              <FaJs/>
              <FaReact/>
              <FaVuejs/>
            </div>) : tasks.map((task) => (
                <Card
                  key={task.id}
                  onClick={() =>{
                    setIdSel(task.id)
                    setShowModalUpdate(true)
                  }}
                  tecnologie={task.title}
                  level={task.status}
                />
              ))
            }
          </TecnologiesBox>



        </DashContainer>
      </TecnologiesContainer>
      {showModal && (
        <Modal
          key={"modalCreate"}
          setShowModal={setShowModal}
          title={"Cadastrar Tecnologia"}
          tasks={tasks}
          setTasks={setTasks}
        />
      )}
      {showModalUpdate && (
        <ModalUpdate
          key={"modalCreate"}
          title={"Tecnologia detalhes"}
          setShowModal={setShowModalUpdate}
          idSel={idSel}
          user={user}
          tasks={tasks}
          setTasks={setTasks}
        />
      )}
    </>
  );
}
