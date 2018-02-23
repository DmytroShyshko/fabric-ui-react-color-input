import * as React from 'react';
import { IColorInputProps } from './IColorInputProps';
import { IColorInputState } from './IColorInputState';
import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { ColorPicker } from 'office-ui-fabric-react/lib/ColorPicker';
import { customizable } from 'office-ui-fabric-react/lib/Utilities';
import { getClassNames } from './ColorInput.classNames';

@customizable('Fabric', ['theme'])
export class ColorInput extends React.PureComponent<IColorInputProps, IColorInputState> {

    private _rootElement: HTMLElement = null;

    constructor(props: IColorInputProps) {
        super(props);
        this.state = {
            isColorPickerVisible: false
        };
    }

    public render(): React.ReactElement<IColorInputProps> {
        let { root, colorPanel, label } = getClassNames();
        let colorPanelStyle = {
            'backgroundColor': this.props.value
        }
        return (
            <div>
                <div className={root}>
                    <span ref={(root) => this._rootElement = root} className={colorPanel} style={colorPanelStyle} onClick={this._handleColorPickerOpen}>
                    </span>
                    <span className={label}>
                        {this.props.value}
                    </span>
                </div>
                {this.state.isColorPickerVisible &&
                    <Callout
                        gapSpace={15}
                        target={this._rootElement}
                        isBeakVisible={false}
                        onDismiss={this._handleColorPickerDismiss}
                        directionalHint={DirectionalHint.rightCenter}
                    >
                        <ColorPicker color={this.props.value} onColorChanged={this.props.onChange}/>
                    </Callout>
                }
            </div>
        );
    }

    private _handleColorPickerDismiss = () => this.setState({ isColorPickerVisible: false });

    private _handleColorPickerOpen = () => this.setState({ isColorPickerVisible: true });

}