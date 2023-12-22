const Loading = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-2/12 bg-color-tertiary h-12 rounded-full mb-8 animate-pulse" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-pulse">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
          <div
            key={index}
            className="bg-color-tertiary w-[250px] h-[350px] rounded-xl animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
