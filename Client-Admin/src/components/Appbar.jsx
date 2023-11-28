import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isUserLoading } from "../store/selectors/isUserLoading";
import { userEmailState } from "../store/selectors/userEmail";
import { userState } from "../store/atoms/user";
import "/src/App.css";

function Appbar() {
  const navigate = useNavigate();
  const userLoading = useRecoilValue(isUserLoading);
  const userEmail = useRecoilValue(userEmailState);
  const setUser = useSetRecoilState(userState);

  if (userLoading) {
    return<div>

    </div>
  }

  if (userEmail) {
    return (
      <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4,
        zIndex: 1,
        overflow: "auto",
        marginTop: "8px"
        }}
      >
        <div
          style={{ display:"flex", flexDirection:"row", justifyContent: "center", alignItems:"center", marginLeft: 10, cursor: "pointer"  }}
          onClick={() => {
            navigate("/");
          }}
        >
          <Typography 
             style={{ color: "white" ,fontFamily: 'Kaushan Script'}}
            onClick={() => {
              navigate("/");
            }}
            variant={"h6"}
          >
            CourseHub
          </Typography> 
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10, display: "flex" }}>
            <div style={{ marginRight: 10 }}>
              <button
                className="button-nav"
                style={{ width: "120px"}}
                onClick={() => {
                  navigate("/addcourse");
                }}
              >
                Add Course
              </button>
            </div>
            <div style={{ marginRight: 10 }}>
              <button
               className="button-nav"
               style={{ width: "120px"}}
                onClick={() => {
                  navigate("/courses");
                }}
              >
                Courses
              </button>
            </div>
            <div style={{ marginRight: 10 }}>
              <button
                variant={"contained"}
                className="button-btn"
                onClick={() => {
                  localStorage.setItem("token", null);
                   window.location ="/"
                  setUser({
                    isLoading: false,
                    userEmail: null,
                  });
                }}
              > Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      zIndex: 1,
      overflow: "auto",
      marginLeft: '20px',
      marginRight: '20px',
      marginTop: "8px"
    }} 
    >
      <div>
        <Typography
        style={{ color: "white" ,fontFamily: 'Kaushan Script', cursor:"pointer"}}
        onClick={() => {
          navigate("/");
        }}
        variant="h5"
      >
        CourseHub</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 10 }}>
          <button
            className="button-nav"
            onClick={() => {
              navigate("/signup");
            }}
          >     
            Signup
          </button>
        </div>
        <div>
          <button
           className="button-nav"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Signin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
