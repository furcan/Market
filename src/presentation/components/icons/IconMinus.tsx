interface IIconMinus {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

function IconMinus({
  className,
  width = 18,
  height = 18,
  color = '#1EA4CE',
}: IIconMinus): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} color={color} viewBox="0 0 18 18">
      <path fill="currentColor" d="M4 8.748v-.04a1 1 0 01.983-.982h8.035a1 1 0 01.982.982v.079a1 1 0 01-.983.982H4.982A1 1 0 014 8.787v-.04z" />
    </svg>
  );
}

export default IconMinus;
