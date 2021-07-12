import * as React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Hi am RecommendedVideos</h2>
      <div className="recommendedVideos_videos">{/*<VideoCard />*/}</div>
    </div>
  );
}

export default RecommendedVideos;
