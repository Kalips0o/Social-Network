import * as C from './styles';
import React from "react";
import {Home, Search} from "../svgs";


type Props = {
    setGenre: (e: string) => void;
    setIsSearch:(e: boolean) => void;
    setIsFull:(e: boolean) => void;
    isSearch: boolean;
    isSidebar: boolean;
    setIsSidebar: (e: boolean) => void;  
}

export const Sidebar = ({ setGenre, setIsSearch, setIsFull, isSearch, isSidebar, setIsSidebar }: Props) => {
    return (
        <C.Container isSidebar={isSidebar}>   
            <div className='inicialSearch'>
                <div 
                onClick={() => (setGenre(''), setIsSearch(false), setIsFull(false), setIsSidebar(false))} 
                className='iniSearDivs'>
                    <p><Home/></p> Initial Page
                </div>

                <div 
                onClick={() => (setIsSearch(!isSearch), setIsSidebar(false))}className='iniSearDivs'>
                    <p><Search /></p> Search
                </div>
            </div>

            <div className='genres'>
                <h2>Genres</h2>
                <div 
                onClick={() => (setGenre('Rock') ,setIsSidebar(false),
                setIsSearch(false))}>
                    Rock
                </div>
                <div 
                onClick={() => (setGenre('Jazz') ,setIsSidebar(false), setIsSearch(false))}>
                    Jazz
                </div>
                <div 
                onClick={() => (setGenre('Beats') ,setIsSidebar(false), setIsSearch(false))}>
                    Beats
                </div>
                <div 
                onClick={() => (setGenre('Classic') ,setIsSidebar(false), setIsSearch(false))}>
                    Classic
                </div>
                <div
                onClick={() => (setGenre('House') ,setIsSidebar(false), setIsSearch(false))}>
                    House
                </div>
            </div>
        </C.Container>
    )
} 