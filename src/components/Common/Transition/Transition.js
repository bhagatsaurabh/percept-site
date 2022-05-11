import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Transition(props) {
  const ref = useRef(null);
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.pathname} nodeRef={ref} classNames="fade" timeout={200}>
        <props.component ref={ref} />
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Transition;
