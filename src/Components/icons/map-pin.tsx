import { Svg, Path } from "@react-pdf/renderer";

const MapPin = ({ size }: { size: number }) => {
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
      <Path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <Path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
    </Svg>
  );
};

export default MapPin;
