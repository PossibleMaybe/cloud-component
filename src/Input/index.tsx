import React, { PureComponent } from 'react';
import { Input } from 'antd';
import { get } from 'lodash';
import styles from './index.less';

interface IProps {
  disable: boolean[] | undefined;
  onChange: (args: string) => void;
  value: string;
}

interface IState {
  value: number[];
}

export default class extends PureComponent<IProps, IState> {
  static defaultProps = {
    disable: [false, false, false, false],
  };

  constructor(props: IProps) {
    super(props);
    const { value } = props;
    this.state = {
      value: this.getIpValues(value),
    };
  }

  getIpValues = (value: IProps['value']): IState['value'] => {
    if (!value) {
      const ip = [];
      for (let i = 0; i < 4; i++) {
        ip.push(0);
      }
      return ip;
    }
    return value.split('.').map(it => Number.parseInt(it, 10));
  };

  // eslint-disable-next-line no-shadow
  onInputChange = (newVal: string, index: number) => {
    const { value } = this.state;
    let ipValue = Number.parseInt(newVal, 0);
    if (Number.isNaN(ipValue)) {
      ipValue = 0;
    }
    if (ipValue < 0) {
      ipValue = 0;
    }
    if (ipValue > 255) {
      ipValue = 255;
    }
    value[index] = ipValue;
    this.setState(
      {
        value,
      },
      () => {
        const { onChange } = this.props;
        if (onChange) {
          onChange(this.state.value.join('.'));
        }
      },
    );
  };

  render() {
    const { disable } = this.props;
    const { value } = this.state;
    // eslint-disable-next-line no-shadow
    const inputs = value.map((it, index) => (
      <div className={styles['item-wrapper']} key={`ipinput-${index}`}>
        <Input
          className={styles.item}
          value={it}
          maxLength={3}
          onChange={e => {
            this.onInputChange(e.currentTarget.value, index);
          }}
          disabled={get(disable, `[${index}]`)}
        />
      </div>
    ));
    return <div className={styles['ip-input']}>{inputs}</div>;
  }
}
