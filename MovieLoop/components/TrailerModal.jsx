import ReactPlayer from "react-player"; 

export default function modal({ onClose, videoUrl }) {
  const youtubeConfig = {
    file: {
      attributes: {
        crossOrigin: "true",
      },
    }
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <ReactPlayer 
          url={videoUrl} 
          controls 
          width="100%" 
          height="100%" 
          className='modal-video'
          config={youtubeConfig}
          playing
           />
      </div>
    </div>
  );
}