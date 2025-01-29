import { Svg, Path } from "@react-pdf/renderer";

const Language = ({ size }: { size: number }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="white"
      fillOpacity={0.1}
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M4 5h7" />
      <Path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
      <Path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
      <Path d="M12 20l4 -9l4 9" />
      <Path d="M19.1 18h-6.2" />
    </Svg>
  );
};

export default Language;
