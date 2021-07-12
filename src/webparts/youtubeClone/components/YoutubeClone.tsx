import * as React from "react";
import styles from "./YoutubeClone.module.scss";
import { IYoutubeCloneProps } from "./IYoutubeCloneProps";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import RecommendedVideos from "./RecommendedVideos";

export default class YoutubeClone extends React.Component<
  IYoutubeCloneProps,
  {}
> {
  public render(): React.ReactElement<IYoutubeCloneProps> {
    return (
      <div className={styles.youtubeClone}>
        <Header />
        <div className="app__page">
          <Sidebar />
          <RecommendedVideos />
        </div>
      </div>
    );
  }
}
