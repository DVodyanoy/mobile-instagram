import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconSvgReels = () => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 2.8H7A3.2 3.2 0 0 0 3.8 6v11A3.2 3.2 0 0 0 7 20.2h11a3.2 3.2 0 0 0 3.2-3.2V6A3.2 3.2 0 0 0 18 2.8ZM7 1a5 5 0 0 0-5 5v11a5 5 0 0 0 5 5h11a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5H7Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 8H3V6.2h19V8Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 7 6 2l1.573-.874 4 5L10 7ZM16.5 7l-4-5 1.573-.874 4 5L16.5 7Z"
        fill="#000"
      />
      <Path
        d="M15.75 13.067a.5.5 0 0 1 0 .866l-5.25 3.031a.5.5 0 0 1-.75-.433V10.47a.5.5 0 0 1 .75-.433l5.25 3.031Z"
        fill="#000"
      />
    </Svg>
  );
};

export default IconSvgReels;
