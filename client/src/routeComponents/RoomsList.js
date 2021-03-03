import { useState, useEffect } from "react";
import axios from "axios";

function RoomsList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:4000/room");

        console.log(response);
        setRooms([...response.data]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRooms();
  }, []);
  return (
    <div>
      {rooms.map((room) => (
        <div>{room.name}</div>
      ))}
    </div>
  );
}

export default RoomsList;
