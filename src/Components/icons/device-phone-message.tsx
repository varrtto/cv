import { Svg, Path } from "@react-pdf/renderer";

const DevicePhoneMessage = ({ size }: { size: number }) => {
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
      <Path d="M11 3h10v8h-3l-4 2v-2h-3z" />
      <Path d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2" />
      <Path d="M10 18v.01" />
    </Svg>
  );
};

export default DevicePhoneMessage;
