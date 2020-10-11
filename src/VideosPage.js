import React ,{useState}from 'react'
import {Grid} from "@material-ui/core"
import {SearchBar, VideoList, VideoDetail} from "./components/index/index";
import youtube from "./api/youtube"
import CounterPage from './components/CounterPage/CounterPage';
import {BrowserRouter,Route,Link} from 'react-router-dom'

import {Provider} from 'react-redux';//
import Store from "./Store/Store";//
import Counter from './components/Counter/Counter';//


function VideosPage() {
  const [videos,setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo]= useState();

  return (
    <React.Fragment>
      
      <CounterPage/>
    
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
    <Grid item xs={11}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <SearchBar onSubmit={handleSubmit} />
        </Grid>

        <Grid item xs={4}>
          <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
        </Grid>
        <Grid item xs={8}>
          <VideoDetail video={selectedVideo} />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
 
<Provider store={Store}><Counter/></Provider>
 
  </React.Fragment>

  )
  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: 'AIzaSyClKJUij31H2c1o3gnX7ndHZVyHLyEfaBo',
        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}

export default VideosPage