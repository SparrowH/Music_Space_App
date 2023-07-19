import React from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Route, Routes, Link, RedirectFunction, } from "react-router-dom";
import Room from "./Room"



export default function Homepage(props){
    return(
            <Router>
                <Routes>
                    <Route exact path="/" element={<p>This is the homepage</p>}></Route>
                    <Route exact path="/join" element={<RoomJoinPage/>}></Route>
                    <Route exact path="/create" element={<CreateRoomPage/>}></Route>
                    <Route exact path="/room/:roomCode" element={<Room/>}></Route>
                </Routes>
            </Router>
    )
}