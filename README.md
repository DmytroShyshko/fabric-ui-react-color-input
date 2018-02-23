# Color input component

Allows you to use the color input component from [this example](https://developer.microsoft.com/en-us/fabric#/components/themes)

## Installing

`npm install fabric-ui-react-color-input --save`

## Example

```javascript
import * as React from 'react';
import { ColorInput } from 'fabric-ui-react-color-input';
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

```
