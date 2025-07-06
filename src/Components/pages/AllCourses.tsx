import { CourseIcon } from "../../icons/CourseIcon";
import { CourseIconFourth } from "../../icons/CourseIconFourth";
import { Courses } from "../Courses";


export function AllCourses(){
    return<div className="pr-40 pl-40">
        <div className='px-1 grid grid-cols-1  pt-4 gap-6 sm:grid sm:grid-cols-2 sm:gap-5  sm:px-1 md:grid md:grid-cols-2 md:gap-6 md:px-1 lg:grid lg:grid-cols-3 lg:gap-6 xl:grid xl:grid-cols-4 xl:gap-6'>
        <Courses image={<CourseIcon />} title={"Solana Bootcamp"} price={1299} details={"by SOLANA"}
                 />
        
                <Courses image={<CourseIconFourth/>} title={"Solana "} price={1299} details={"by SOLANA"} />
        
                 <Courses image={<CourseIcon />} title={"Solana Felowship"} price={1299} details={"by SOLANA"} />
        
                <Courses image={<CourseIconFourth />} title={"Solana Felowship"} price={1299} details={"by SOLANA"} />
                 <Courses image={<CourseIcon />} title={"Solana Bootcamp"} price={1299} details={"by SOLANA"}
                 />
        
                <Courses image={<CourseIconFourth/>} title={"Solana "} price={1299} details={"by SOLANA"} />
        
                 <Courses image={<CourseIcon />} title={"Solana Felowship"} price={1299} details={"by SOLANA"} />
        
                <Courses image={<CourseIconFourth />} title={"Solana Felowship"} price={1299} details={"by SOLANA"} />
                  <Courses image={<CourseIconFourth />} title={"Solana Felowship"} price={1299} details={"by SOLANA"} />
                 <Courses image={<CourseIcon />} title={"Solana Bootcamp"} price={1299} details={"by SOLANA"}
                 />
        
                <Courses image={<CourseIconFourth/>} title={"Solana "} price={1299} details={"by SOLANA"} />
        
                 <Courses image={<CourseIcon />} title={"Solana Felowship"} price={1299} details={"by SOLANA"} />
        
                <Courses image={<CourseIconFourth />} title={"Solana Felowship"} price={1299} details={"by SOLANA"} />
                  <Courses image={<CourseIconFourth />} title={"Solana Felowship"} price={1299} details={"by SOLANA"} />
                 <Courses image={<CourseIcon />} title={"Solana Bootcamp"} price={1299} details={"by SOLANA"}
                 />
        
                <Courses image={<CourseIconFourth/>} title={"Solana "} price={1299} details={"by SOLANA"} />
        
                 <Courses image={<CourseIcon />} title={"Solana Felowship"} price={1299} details={"by SOLANA"} />
        
                <Courses image={<CourseIconFourth />} title={"Solana Felowship"} price={1299} details={"by SOLANA"} />
                
                
        
        
    </div>
    </div>
}