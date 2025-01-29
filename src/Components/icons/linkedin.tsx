import { Svg, Path } from "@react-pdf/renderer";

const Linkedin = ({ size }: { size: number }) => {
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
      <Path d="M8 11v5" />
      <Path d="M8 8v.01" />
      <Path d="M12 16v-5" />
      <Path d="M16 16v-3a2 2 0 1 0 -4 0" />
      <Path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
    </Svg>
  );
};

export default Linkedin;
