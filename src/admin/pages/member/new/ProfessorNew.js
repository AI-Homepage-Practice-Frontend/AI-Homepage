import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { changeMainHeaderContext } from "../../../AdminMain";
import MemberNew from "../../../components/MemberNew";

/**
 *@author Suin-Jeong, suin8@jbnu.ac.kr
 *@date 2022-10-03
 *@description 교수 등록하기 페이지
 *             사용자로부터 데이터를 입력받아 등록
 */

const ProfessorNew = () => {
  const navigate = useNavigate();
  const { changeMainText } = useContext(changeMainHeaderContext);

  const member = {
    name: "",
    major: "",
    email: "",
    image: "https://source.unsplash.com/random",
    doctorate: "",
    location: "",
    number: "",
    loginDto: {
      loginId: "",
      loginPw: "",
      deleted: false,
    },
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("isSignedIn") === "true") {
      changeMainText("구성원 > 교수 > 신규등록");
    } else {
      navigate("/admin/signin");
    }
  }, []);

  return <MemberNew memberData={member} memberType="professor" />;
};

export default ProfessorNew;