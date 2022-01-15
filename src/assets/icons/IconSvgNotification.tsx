import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const IconSvgNotification = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      d="M12.5 3.023C10.833 2.874 7 3.38 5 6.597 2.5 10.617 5 19.107 1.5 20h11"
      stroke="#000"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <Path
      d="M11.5 3.023c1.667-.149 5.5.357 7.5 3.574 2.5 4.02 0 12.51 3.5 13.403h-11"
      stroke="#000"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <Path d="M9 22c.505 1.177 1.658 2 3 2s2.495-.823 3-2H9Z" fill="#000" />
    <Circle cx={12} cy={2} r={2} fill="#000" />
  </Svg>
);

export default IconSvgNotification;
