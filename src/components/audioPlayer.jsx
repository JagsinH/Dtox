const audioLinks = ['https://drive.google.com/file/d/1oz4jU-12xyz3ZrjnTDAo8y7yaHOCtEyh/view?usp=sharing','https://drive.google.com/uc?export=download&id=1oz4jU-12xyz3ZrjnTDAo8y7yaHOCtEyh']
function AudioPlayer(){
    
    return (
        <>
        <div className="text-4xl text-white text-center">Listen to these audio</div>
        <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Audio Player</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {audioLinks.map((link, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <p className="text-gray-600 mb-4">Audio {index + 1}</p>
            <audio
              controls
              className="w-full"
            >
              <source src={link} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
        </>
    )
}

export default AudioPlayer;