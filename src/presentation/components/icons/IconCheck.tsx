interface IIconCheck {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

function IconCheck({
  className,
  width = 16,
  height = 16,
  color = '#1EA4CE',
}: IIconCheck): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} color={color} viewBox="0 0 16 16">
      <path fill="currentColor" fillRule="evenodd" d="M12.444 5.596a.6.6 0 01-.04.848l-5.5 5a.6.6 0 01-.808 0l-2.5-2.273a.6.6 0 01.808-.888L6.5 10.19l5.096-4.633a.6.6 0 01.848.04z" clipRule="evenodd" />
    </svg>
  );
}

export default IconCheck;
