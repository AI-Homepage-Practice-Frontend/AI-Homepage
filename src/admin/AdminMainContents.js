import { useEffect, useContext } from "react";
import { changeMainTextContext } from "./AdminMain";
import { useNavigate } from "react-router-dom";

const AdminMainContents = () => {
  const navigate = useNavigate();
  const { changeMainText } = useContext(changeMainTextContext);

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("메인화면");
    } else {
      navigate("/admin/signin");
    }
  });

  return <div>메인 컨텐츠 입니다!!!!!!!!!!!!!!!!</div>;
};

export default AdminMainContents;
