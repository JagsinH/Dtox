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

const RingtoneCard = ({ title, src }) => (
  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all">
    <h2 className="text-xl text-white font-semibold mb-2 pb-4">{title}</h2>
    <div className="w-fit overflow-hidden rounded">
      <iframe 
        src={src} 
        width="175" 
        height="100%" 
        frameBorder="0" 
        webkitallowfullscreen="true" 
        mozallowfullscreen="true" 
        allowFullScreen 
      />
    </div>
  </div>
);

const RingtoneGallery = () => (
  <div className="min-h-screen bg-black p-10">
    <h1 className="text-3xl text-white font-bold text-center mb-6">Ringtones</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center">
      {ringtones.map((ringtone, index) => (
        <RingtoneCard 
          key={index} 
          title={ringtone.title} 
          duration={ringtone.duration} 
          src={ringtone.src}
        />
      ))}
    </div>
  </div>
);

export default RingtoneGallery;