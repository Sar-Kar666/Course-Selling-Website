import axios from "axios";
import { useEffect, useState } from "react";
import { Courses, CoursesProps } from "./Courses";


export function CourseList() {
  const [courses, setCourses] = useState<CoursesProps[]>([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3000/admin/courses", {
          headers: {
            token: token || ""
          }
        });

        // Transform backend data to match CoursesProps
        const mapped = res.data.courses.map((course: any) => ({
          title: course.title,
          price: course.price,
          details: course.description,
          image: <BookOpen size={40} className="text-violet-600" />
        }));

        setCourses(mapped);
      } catch (err) {
        console.error("Failed to fetch courses", err);
      }
    }

    fetchCourses();
  }, []);

  return (
    <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, idx) => (
        <Courses
          key={idx}
          title={course.title}
          price={course.price}
          details={course.details}
          image={course.image}
        />
      ))}
    </div>
  );
}
