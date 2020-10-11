import React from 'react'
import {Grid} from "@material-ui/core";
import VideoItem from '../VideoItem/VideoItem';

function VideoList({videos,onVideoSelect}) {
const listOfVideos= videos.map((video,id)=><VideoItem onVideoSelect={onVideoSelect} key={id} video={video} style={{padding:"15px"}}/>);
   
    return (<Grid container spacing={10} >{listOfVideos}</Grid>);
}

export default VideoList
