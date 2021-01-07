import React, { useContext } from "react";
import { ReducerContext } from "../App";
import { todoObject } from "../StateManagement/Interfaces/State.interface";
import { Types } from "../StateManagement/Reducers/Reducer";

const TodoElement: React.FC<todoObject> = (props) => {
  const dispatch = useContext(ReducerContext);
  const deleteHandler = () => {
    dispatch({ type: Types.RemoveTodo, payload: props.id });
  };
  const toggleHandler = () => {
    dispatch({ type: Types.ToggleStatus, payload: props.id });
  };
  return (
    <div key={props.id} className="flex mb-4 items-center">
      <p className="w-full text-grey-darkest">{props.title}</p>
      <button
        onClick={toggleHandler}
        className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
      >
        {!props.status ? "Done" : "InComplete"}
      </button>
      <button
        onClick={deleteHandler}
        className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
      >
        Remove
      </button>
    </div>
  );
};
export default TodoElement;
