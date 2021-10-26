interface IIconPlus {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

function IconPlus({
  className,
  width = 18,
  height = 18,
  color = '#1EA4CE',
}: IIconPlus): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} color={color} viewBox="0 0 18 18">
      <path fill="currentColor" fillRule="evenodd" d="M14.06 7.66c.529 0 .94.435.94.95 0 .514-.411.95-.94.95h-3.62v3.709c0 .514-.41.95-.94.95a.945.945 0 01-.94-.95v-3.71H4.94A.945.945 0 014 8.61c0-.514.411-.95.94-.95h3.62V3.95c0-.514.41-.95.94-.95s.94.436.94.95v3.71h3.62z" clipRule="evenodd" />
    </svg>
  );
}

export default IconPlus;
