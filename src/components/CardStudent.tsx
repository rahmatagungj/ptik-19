import React from "react";

export interface StudentData {
  nim: string;
  name: string;
  prodi: string;
  gender: string;
  angkatan: string;
}

interface CardStudentProps {
  dataStudent: StudentData[];
}

const CardStudent: React.FC<CardStudentProps> = ({
  dataStudent,
}: CardStudentProps) => {
  return (
    <div className="">
      {dataStudent.map((student) => {
        return (
          <div className="p-3 flex flex-col" key={student.nim}>
            <div className="rounded bg-gray-800 p-4 hover:shadow-xl">
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 text-gray-100">
                  {student.name}
                </h2>
                <p className="leading-relaxed text-sm text-justify text-gray-200">
                  {student.nim}
                </p>
                <p className="leading-relaxed text-sm text-justify text-gray-200">
                  {student.gender === "L" ? "Laki-Laki" : "Perempuan"}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardStudent;
