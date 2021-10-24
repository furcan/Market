interface IIconArrowRight {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

function IconArrowRight({
  className,
  width = 24,
  height = 24,
  color = '#697488',
}: IIconArrowRight): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} color={color} viewBox="0 0 24 24">
      <path fill="currentColor" fillRule="evenodd" d="M18.933 11.667a.765.765 0 00-.192-.28l-6.127-6.13a.873.873 0 10-1.234 1.235l4.63 4.632H5.875A.878.878 0 005 12c0 .482.394.876.875.876H16.02l-4.63 4.633a.873.873 0 101.234 1.235l6.126-6.13c.08-.08.14-.176.193-.281a.92.92 0 00-.009-.666z" clipRule="evenodd" />
    </svg>
  );
}

export default IconArrowRight;
