const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-t from-black text-white absolute top-[30%] overflow-x-hidden">
      <div className="pl-8">
        <h1 className="text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg w-1/2">{overview}</p>
        <div className="flex items-center gap-4 mt-4">
          <button className="px-8 py-2 rounded-md bg-black text-white text-[20px]">
            Play
          </button>
          <button className="px-8 py-2 rounded-md bg-black text-white text-[20px]">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};
export default VideoTitle;
