// import { ReactElement } from "react";


// export interface CoursesProps {
//     image: ReactElement;
//     title: String;
//     price: number;
//     details: String;

// }

// export function Courses({ image, title, price, details }: CoursesProps) {

  


//     return <div > 
//          <div className="flex justify-center items-center">
//         <div className="max-h-85 min-w-70 max-w-110 rounded-2xl bg-white border-gray-400 shadow-lg cursor-pointer hover:scale-110 duration-300 ease-in-out md:gird md:grid-cols-1 md:gap-7">
//         <div className="p-4">
//             <div className=" rounded-2xl ">
//                 {image}
//             </div>
//             <div className=" font-bold text-md flex  pt-2 items-center justify-between  max-w-110 sm:text-lg">
//                 <div >
//                     {title}
//                 </div>
//                 <div >
//                     ${price}
//                 </div>

//             </div>
//             <div className="text-sm max-w-110 pt-1 black sm:text-md">
//                 {details}
//             </div>
//         </div>
//         </div>
//     </div>

   
//     </div> 
// }


import { useEffect, useState } from "react";
import axios from "axios";

type Course = {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  creator?: string;
};

export function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get("https://your-backend.onrender.com/courses")
    // axios.get("http://localhost:3000/courses/preview")
    
      .then(res => setCourses(res.data.courses))
      .catch(err => console.error("Error:", err));
  }, []);

   return (
    <div className="px-8 py-10">
      <h2 className="text-2xl font-bold mb-6">Featured Courses</h2>

      {/* COURSE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* ✅ STEP 2: Render course cards with click handler */}
        {courses.map(course => (
          <div
            key={course._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:scale-105 transition"
            onClick={() => {
              setSelectedCourse(course);
              setShowModal(true);
            }}
          >
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-gray-600 text-sm">by {course.creator || "Unknown"}</p>
              <p className="text-right font-bold text-black mt-2">₹{course.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ STEP 3: Modal */}
      {showModal && selectedCourse && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-md">
    <div className="bg-white p-6 rounded-xl w-[90%] max-w-md shadow-lg relative">
      <button
        className="absolute top-0 right-1 text-2xl font-bold "
        onClick={() => setShowModal(false)}
      >
        &times;
      </button>
      <img
        src={selectedCourse.imageUrl}
        alt={selectedCourse.title}
        className="rounded-xl w-full h-48 object-cover mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">{selectedCourse.title}</h2>
      <p className="text-gray-600 mb-2">{selectedCourse.description}</p>
      <p className="text-green-600 font-bold text-lg mb-4">₹{selectedCourse.price}</p>
      <button
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full"
        onClick={() => {
          alert("Buying course: " + selectedCourse.title);
          setShowModal(false);
        }}
      >
        Buy Now
      </button>
    </div>
  </div>
)}
    </div>
  );
}