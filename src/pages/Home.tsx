import React from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import CardStudent from "../components/CardStudent";
import { StudentData } from "../components/CardStudent";

const Home = () => {
  const [dataStudent, setDataStudent] = React.useState<StudentData[]>(
    [] as any
  );
  const [dataStudentToShow, setDataStudentToShow] = React.useState<
    StudentData[]
  >([] as any);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);

  React.useEffect(() => {
    axios
      .get("https://rahmatagungj.github.io/ptik-19/api/student.json")
      .then((response) => {
        if (response.status === 200) {
          setDataStudent(response.data);
          setDataStudentToShow(response.data);
          setIsLoading(false);
        } else {
          console.error("Failed get data student :", response);
          setIsLoading(false);
          setIsError(true);
        }
      })
      .catch((error) => {
        console.error("Failed get data student :", error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  const HandleSearchBy = (by: string, value: string) => {
    if (by === "nim") {
      const result = dataStudent.filter((student) =>
        student.nim.toLowerCase().includes(value)
      );
      // filter dataStudent by nim
      if (result.length > 0) {
        setDataStudentToShow(result);
      } else {
        setDataStudentToShow(dataStudent);
      }
    } else {
      const result = dataStudent.filter((student) =>
        student.name.toLowerCase().includes(value)
      );
      // filter dataStudent by nim
      if (result.length > 0) {
        setDataStudentToShow(result);
      } else {
        setDataStudentToShow(dataStudent);
      }
    }
  };

  return (
    <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 flex flex-col h-screen">
      <div className="flex flex-col justify-center items-center my-10">
        <h1 className="text-gray-50 text-4xl font-bold p-3">
          DATA KELAS PTIK 19
        </h1>
        <h3 className="text-gray-100 text-lg font-bold p-3">
          STKIP Muhammadiyah Kuningan
        </h3>
        <div className="relative mt-5 flex items-center flex-col md:flex-row w-11/12">
          <input
            type="text"
            id="nim"
            className="border-0 my-2 md:my-0 md:mx-2 w-full pl-3 pr-10 py-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="masukan nim disini..."
            onChange={(e) => HandleSearchBy("nim", e.target.value)}
            disabled={isLoading}
          />
          <input
            type="text"
            id="name"
            className="border-0 my-2 md:my-0 md:mx-2 w-full pl-3 pr-10 py-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="masukan nama disini..."
            onChange={(e) => HandleSearchBy("name", e.target.value)}
            disabled={isLoading}
          />
        </div>
      </div>
      {isLoading && <Spinner />}
      {isError && <p>Failed to load data</p>}
      {!isError && dataStudent && (
        <>
          <CardStudent dataStudent={dataStudentToShow} />
        </>
      )}
    </div>
  );
};

export default Home;
