interface IIconBasket {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

function IconBasket({
  className,
  width = 24,
  height = 26,
  color = '#fff',
}: IIconBasket): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} color={color} viewBox="0 0 24 26">
      <path fill="currentColor" d="M5.412 9.467h13.176v11.541H5.412V9.467zM9.672 4.657h4.67l.934.97v3.84l-1.011-.003v-3.84h-4.51v3.84l-1.031.003V5.624l.948-.967z" />
    </svg>
  );
}

export default IconBasket;
