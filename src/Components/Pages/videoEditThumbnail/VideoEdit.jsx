import React from "react";
import PropTypes from "prop-types";


const VideoEdit = ({link}) => (
  <div className=" mx-auto">
    <iframe
    width="440"
      height="340"
      src={link}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
);

VideoEdit.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default VideoEdit;
