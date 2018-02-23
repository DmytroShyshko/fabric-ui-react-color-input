import * as React from 'react';
import { ColorInput } from '..';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

export interface IAppState {
    color: string;
}

export class App extends React.PureComponent<{}, IAppState> {

    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        };
    }

    public render(): React.ReactElement<{}> {
        return (
            <Fabric>
                <ColorInput value={this.state.color} onChange={this._handleColorChange} />
            </Fabric>
        );
    }

    private _handleColorChange = color => this.setState({ color });

}
