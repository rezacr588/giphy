import { useFormik } from "formik";
import React, { useContext } from "react";
import { StateContext, ReducerContext } from "../App";
import TodoElement from "../components/TodoElement";
import { Types } from "../StateManagement/Reducers/Reducer";
import Layout from "../wrappers/Layout";

interface Props {}
const Todos: React.FC = (props: Props) => {
  const context = useContext(StateContext);
  const dispatch = useContext(ReducerContext);
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      dispatch({ type: Types.AddTodo, payload: values.title });
    },
  });
  return (
    <Layout title="Todos">
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <div className="flex mt-4">
              <form onSubmit={formik.handleSubmit}>
                <input
                  id="title"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                  placeholder="Add Todo"
                />
                <button
                  type="submit"
                  className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
          <div>
            {context.todos?.map((todo) => {
              return <TodoElement {...todo} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Todos;
