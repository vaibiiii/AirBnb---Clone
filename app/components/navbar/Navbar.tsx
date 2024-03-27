'use client';
import { Container } from "postcss";
import Categories from "./Categories";
import Containers from "../Containers";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

import { SafeUser } from "@/app/types";


interface NavbarProps{
    currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps>=({
    currentUser
})=>{
    
    return(
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 
            border-b-[1px]">
                <Containers>
                    <div className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    gap-3
                    md:gap-0
                    ">
                        <Logo />
                        <Search/>
                        <UserMenu currentUser={currentUser}/>
                    </div>
                </Containers>
            </div>
            <Categories/>
            
        </div>
    );
}

export default Navbar;