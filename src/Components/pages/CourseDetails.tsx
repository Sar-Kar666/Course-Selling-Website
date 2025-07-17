import { useLocation } from "react-router-dom";
export function CourseDetails( ){
     const location = useLocation();
  const { image, title, price, details } = location.state;
return <div className="top-0 h-screen left-0 flex justify-center items-center">
    <div className=" bg-red-400 h-300">
  <div className="">
    {image}
  </div>
  <div>
    {title}
  </div>
  <div>
    {price}
  </div>
  <div>
    {details}
  </div>
</div>
</div>
}