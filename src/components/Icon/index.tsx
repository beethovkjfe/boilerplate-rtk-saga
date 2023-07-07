import * as React from 'react';

import { iconMap, iconMapKeys } from '../../.icons'; // .icons is an auto-generated folder
import { SVGComponentProps } from '../../types';

import { IconProps } from './types';

export default class Icon extends React.Component<IconProps, { IconComponent: SVGComponentProps | 'svg' }> {
  static readonly displayName = 'Icon';
  static defaultProps = {
    title: '',
    variant: 'default'
  } as Partial<IconProps>;
  mounted: boolean;

  constructor(props: IconProps) {
    super(props);
    this.state = {
      IconComponent: 'svg'
    };
    this.mounted = true;
  }

  setIconComponentFromName = (name: iconMapKeys) => {
    if (typeof iconMap[name] === 'function') {
      iconMap[name]()
        .then(response => {
          this.setState({ IconComponent: response.default as any });
        })
        .catch(() => 'svg');
    } else {
      // eslint-disable-next-line no-console
      console.error(new Error(`Invalid icon name: ${name}`));
    }
  };

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidMount() {
    if (this.mounted) {
      this.setIconComponentFromName(this.props.name);
    }
  }

  componentDidUpdate({ name: prevName }: IconProps) {
    const { name: currName } = this.props;
    if (this.mounted) {
      if (currName !== prevName) {
        this.setIconComponentFromName(currName);
      }
    }
  }

  render() {
    const { size, className, color, title = '', onClick, styles } = this.props;
    const { IconComponent } = this.state;

    const sizeStyles = size ? { width: size, height: size } : undefined;
    return (
      IconComponent !== 'svg' && (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <IconComponent
          className={className}
          color={color}
          style={{ ...sizeStyles, ...styles }}
          title={title}
          role={title === '' ? 'presentation' : undefined}
          onClick={onClick}
        />
      )
    );
  }
}
