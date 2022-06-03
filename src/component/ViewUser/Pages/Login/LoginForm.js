import React, { useEffect, useState } from "react";
import "./style.css";
import Login from "../../DetailView/Home/Form/Login"
import Register from "../../DetailView/Home/Form/Register"

function LoginForm() {
  const [isLogginActive, setLogginActive] = useState(true);

  useEffect(()=> {
    // console.log("this",this);
    //Add .right by default
    isLogginActive.rightSide.classList.add("right");
  },[])

  function changeState(e) {
    e.preventDefault();

    if (isLogginActive) {
      isLogginActive.rightSide.classList.remove("right");
      isLogginActive.rightSide.classList.add("left");
    } else {
      isLogginActive.rightSide.classList.remove("left");
      isLogginActive.rightSide.classList.add("right");
    }
    setLogginActive(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }
  const current = isLogginActive ? "Register" : "Login";
  const currentActive = isLogginActive ? "login" : "register";
  
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (isLogginActive.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (isLogginActive.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (isLogginActive.current = ref)} />
            )}
          </div>
          hêlo
          <RightSide
            current={current}
            currentActive={currentActive}
            // containerRef={ref => (isLogginActive.rightSide = ref)}
            onClick={changeState}
          />
        </div>
      </div>
    );
}


const RightSide = props => {
  console.log('props', props)
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default LoginForm;
