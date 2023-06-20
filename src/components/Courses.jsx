import { useEffect, useState } from "react";
import ContainerBox from "../Pages/Shared/Container/ContainerBox";
import CoursesCard from "./CoursesCard";
import { BiRightArrowAlt } from 'react-icons/bi';

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("courses.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    console.log(courses)
    return (
        <div className="bg-slate-100 mt-10 py-10">
            <ContainerBox>
                <div className="py-12">
                    <h1 className="text-blue-500 font-semibold">Course List</h1>
                    <h1 className="text-[#161E49] text-4xl font-bold mt-3">Find your perfect <br /> Course</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-5">
                    {
                        courses.map((course) =>
                            <CoursesCard course={course} key={course.id}></CoursesCard>)
                    }
                </div>
                <button className="flex items-center gap-1 font-semibold text-lg bg-blue-500 px-6 py-1 rounded-3xl text-white mx-auto mt-10">View all <BiRightArrowAlt className="text-2xl" /></button>
            </ContainerBox>
        </div>
    );
};

export default Courses;