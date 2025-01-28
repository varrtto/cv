import { Svg, Path } from "@react-pdf/renderer";

const Nextjs = ({ size }: { size: number }) => {
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
      <Path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
      <Path d="M15 12v-3" />
    </Svg>
  );
};

export default Nextjs;
