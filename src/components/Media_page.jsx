import React from 'react'

const ringtones = [
  {
    title: "Sanson Ki Mala",
    src: "https://archive.org/embed/sanson-ki-mala-instrumental-1"
  },
  {
    title: "Meditation Music",
    src: "https://archive.org/embed/videoplayback_20250115_1817"
  }
];

const videos = [
  {
      id: 1,
      src: "https://drive.google.com/file/d/1VqmqMeCmVO5uTyZsmwjQ1bn-U1kBGPf6/preview",
      title: "Soothing Waterfall"
  },
  {
      id: 2,
      src: "https://drive.google.com/file/d/1i7QxUm0bQq484qbO7KR9vJF3JEszxctr/preview",
      title: "Relaxing Ocean Waves"
  }
];



const Media = () => {
  return (
    <>
    <div className="container">
      <div className='text-4xl text-white text-center font-bold underline'>Videos</div>
      <div className='bg-slate-950 w-64 h-72 p-4 m-4 hover:bg-slate-900 rounded-sm'>
        <div className="text-white">hello</div>
      </div>
    </div>
    <div>
    
    </div>
    </>
  )
}

export default Media