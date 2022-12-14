import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {

  const [searchTerm, setSearchTerm] = useState("shoulders");
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&order=relevance&q=${searchTerm}&key=AIzaSyD4Pj2ZeQ_Cj6ilee97H5_70l902-1-ogM`
      )
      .then((response) => {
        setSearchResults(response.data.items);
        console.log(searchResults);
      });
  }, []);

  return (

    <div>
      <h1>Stretch Buddy</h1>
      {searchResults.map((result) => (
        <div>
          <iframe width="360" height="215" src={`https://www.youtube.com/embed/${result.id.videoId}`} title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      ))}
    </div>
  );
}

export default App;
