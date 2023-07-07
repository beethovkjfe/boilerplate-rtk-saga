import { iconMapKeys } from '../../.icons';

export interface IconProps {
  /**
   * @en Icon name from the available icons
   * @required
   */
  name: iconMapKeys;
  /**
   * @en Sets class name directly on the SVG
   */
  className?: string;
  /**
   * @en Sets inline width and height style.
   */
  size?: string;
  /**
   * @en Sets contents of the title element inside SVG.
   */
  title?: string;
  color?: string;
  onClick?: (event: any) => void;
  styles?: React.CSSProperties;
}
