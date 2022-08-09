import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  CardContainer,
  DashBoardContainer,
  DashboardHeader,
  WarningContainer,
} from "./style";

export default function Dashboard() {
  const [userInfo, setUserInfo] = useState([]);

  const user = window.localStorage.getItem("userID");

  useEffect(() => {
    api
      .get(`/users/${user}`)
      .then((res) => {
        setUserInfo(res);
      })
      .catch((err) => console.log(err));
  }, [user]);

  function handleLogout() {
    window.localStorage.removeItem("userID");
    window.localStorage.removeItem("userToken");
  }

  return (
    <DashBoardContainer>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <DashboardHeader>
          <img src={logo} alt="logo da Kenzie Hub" />
          <Link className="logout" to={"/"} onClick={handleLogout}>
            Sair
          </Link>
        </DashboardHeader>
        <CardContainer>
          <p className="userName">Olá, {userInfo?.data?.name}</p>
          <span className="userModule">{userInfo?.data?.course_module}</span>
        </CardContainer>
        <WarningContainer>
          <p className="warningTitle">
            Que pena! Estamos em desenvolvimento :(
          </p>
          <p className="warningParagraph">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </WarningContainer>
      </motion.section>
    </DashBoardContainer>
  );
}
