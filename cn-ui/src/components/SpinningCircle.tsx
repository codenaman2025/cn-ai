interface SpinningCircleProps {
  size?: number;
  speed?: string; // Tailwind animation class
  reverse?: boolean;
  icons?: string[]; // Optional array of icon URLs
}

export default function SpinningCircle({
  size = 400,
  speed = "spin-slow",
  reverse = false,
  icons = []
}: SpinningCircleProps) {
  const radius = size / 2;

  return (
    <div
      className={`absolute rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 ${
        reverse ? "animate-spin-reverse-slow" : "animate-spin-slow"
      }`}
      style={{
        width: `${size}px`,
        height: `${size}px`
      }}
    >
      {icons.map((icon, index) => {
        const angle = (360 / icons.length) * index;
        const x = radius + radius * Math.cos((angle * Math.PI) / 180) - 12;
        const y = radius + radius * Math.sin((angle * Math.PI) / 180) - 12;

        return (
          <img
            key={index}
            src={icon}
            alt=""
            className="absolute w-6 h-6"
            style={{
              top: `${y}px`,
              left: `${x}px`
            }}
          />
        );
      })}
    </div>
  );
}
