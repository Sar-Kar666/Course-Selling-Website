import { HeroSectionImage } from "../icons/HeroSectionImage";
import { Card } from "./Card";

export function HeroSection(){
    return <div className="flex justify-between items-center">
        <Card  heading2={"Learn Solana Devlopment with us"} details={"Solana is a high-performance blockchain platform designed for fast, scalable decentralized applications (dApps). "}/>
        <HeroSectionImage/>
    </div>
}