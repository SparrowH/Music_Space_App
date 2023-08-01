import React, { useEffect, useState } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

const HomePage = () => {
  const [roomCode, setRoomCode] = useState(null);

  useEffect(() => {
    fetch("/api/user-in-room")
      .then((response) => response.json())
      .then((data) => {
        setRoomCode(data.code);
      });
  }, []);

  const renderHomePage = () => {
    return (
      <div className="scroll-bar">
        <Grid container spacing={3}>
          <Grid item xs={12} align="center">
            <Typography variant="h3" compact="h3">
              <div className="name">Beat Master</div>
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <ButtonGroup disableElevation variant="contained" color="primary">
              <Button component={Link} to="/join">
                Join a Room
              </Button>
              <Button component={Link} to="/create" color="secondary">
                Create a Room
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </div>
    );
  };

  const clearRoomCode = () => {
    setRoomCode(null);
  };

  return (
    <Router>
      <Routes>
      <Route
        exact
        path="/"
        element={
          roomCode ? (
            <Navigate to={`/room/${roomCode}`} />
          ) : (
            renderHomePage()
          )
        }
      />
      <Route path="/join" element={<RoomJoinPage />} />
      <Route path="/create" element={<CreateRoomPage />} />
      <Route
        path="/room/:roomCode"
        element={<Room leaveRoomCallback={clearRoomCode} />}
      />
      </Routes>
    </Router>
  );
};

export default HomePage;
