import React, { useRef, useState } from "react";
import { Play } from "lucide-react";

const OwnerVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);

  const handleStart = () => {
    setIsPlaying(true);
    setIsLoading(true);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setIsLoading(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleLoaded = () => {
    setIsLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleStart();
    }
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Uma mensagem do nosso fundador
        </h2>

        <p className="text-white/60 mb-12 max-w-xl mx-auto">
          Veja como funciona a aprovação e como você pode sair com seu celular hoje.
        </p>

        <div className="flex justify-center">

          {!isPlaying ? (
            <div
              role="button"
              tabIndex={0}
              aria-label="Reproduzir vídeo"
              onClick={handleStart}
              onKeyDown={handleKeyDown}
              className="
                relative cursor-pointer
                w-full max-w-[340px]
                aspect-[9/16]
                max-h-[70vh]
                rounded-3xl overflow-hidden
                border border-white/10
                shadow-2xl
                group
                focus:outline-none focus:ring-2 focus:ring-yellow-500
              "
            >
              <img
                src="/img/video-thumb.jpg"
                alt="Miniatura do vídeo"
                className="
                  w-full h-full object-cover
                  opacity-80 group-hover:opacity-100
                  transition duration-300
                "
                loading="lazy"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition">
                  <Play className="text-black ml-1" />
                </div>
              </div>
            </div>
          ) : (
            <div
              className="
                relative w-full max-w-[340px]
                aspect-[9/16]
                max-h-[75vh]
                mx-auto
                rounded-3xl overflow-hidden
                border border-white/10
                shadow-2xl
                bg-black
              "
            >

              {/* Loading overlay */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-10">
                  <div className="w-10 h-10 border-4 border-white/30 border-t-yellow-500 rounded-full animate-spin" />
                </div>
              )}

              <video
                ref={videoRef}
                controls
                autoPlay
                playsInline
                onLoadedData={handleLoaded}
                onCanPlay={handleLoaded}
                onEnded={handleStop}
                className="w-full h-full object-cover"
                src="/video/comofunciona.mp4"
              />

              {/* botão fechar */}
              <button
                onClick={handleStop}
                className="
                  absolute top-3 right-3
                  bg-black/70 hover:bg-black
                  text-white text-sm
                  px-3 py-1 rounded-full
                  transition z-20
                "
              >
                Fechar
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default OwnerVideo;