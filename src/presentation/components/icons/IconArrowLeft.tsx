interface IIconArrowLeft {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

function IconArrowLeft({
  className,
  width = 24,
  height = 24,
  color = '#697488',
}: IIconArrowLeft): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} color={color} viewBox="0 0 24 24">
      <path fill="currentColor" fillRule="evenodd" d="M5.067 12.333a.766.766 0 00.192.28l6.127 6.13a.873.873 0 101.234-1.235l-4.63-4.632h10.135A.878.878 0 0019 12a.878.878 0 00-.875-.876H7.98l4.63-4.633a.873.873 0 10-1.234-1.235l-6.126 6.13c-.08.08-.14.176-.193.281a.92.92 0 00.009.666z" clipRule="evenodd" />
    </svg>
  );
}

export default IconArrowLeft;
