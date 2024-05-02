
import Videosorce from "../../img/videosorce.mp4"


const BackgroundVideo = ({ videoSource, ...props }) => {
  return (
    <video  autoPlay loop  playsInline  {...props}>
      <source src={Videosorce} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
