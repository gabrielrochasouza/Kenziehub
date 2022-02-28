import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Dashboard from "../Pages/DashBoard";
import Login from "../Pages/Login";
import Signin from "../Pages/SignIn";

import { useState, useEffect } from "react";
import api from "../Services";

export default function Routes() {

  const [authenticated, setAuthenticated] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [idSel,setIdSel] = useState("")
  const [user, setUser] = useState({});

  useEffect(() => {
     const token = localStorage.getItem("@Kenziehub");
     const id = localStorage.getItem("@Kenziehub:id");
     if(id){
         api.get(`users/${id}`)
         .then((res) => {
             setUser(res.data);
             setTasks(res.data.techs);
         })
     }
    if (token) {
      setAuthenticated(true);
    }
  }, [showModal,showModalUpdate,authenticated]);


  return (
    <Switch>
      <Route exact path="/">
        
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path="/signin">
       
        <Signin
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path="/dashboard">

        <Dashboard
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          tasks={tasks}
          setTasks={setTasks}
          showModal={showModal}
          setShowModal={setShowModal}
          showModalUpdate={showModalUpdate}
          setShowModalUpdate={setShowModalUpdate}
          idSel={idSel}
          setIdSel={setIdSel}
          user={user}
          setUser={setUser}
        />
      </Route>
    </Switch>
  );
}
