
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main text */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 leading-relaxed">
            While we're busy with building the platform
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-600">
            here is a song for you.
          </p>
        </div>

        {/* YouTube video embed */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/13EsiCjsssY"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Subtle decorative element */}
        <div className="flex justify-center pt-8">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-slate-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
