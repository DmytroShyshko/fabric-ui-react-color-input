import { IStyle, mergeStyleSets } from '@uifabric/merge-styles';
import { memoizeFunction } from '@uifabric/utilities';

export interface IColorInputClassNames {
    root: string;
    colorPanel: string;
    label: string;
}

export const getClassNames = memoizeFunction(() => {
    return mergeStyleSets<IColorInputClassNames>(
        {
            root: {
                selectors: {
                    ':hover': {
                        background: 'rgba(0,0,0,0.05)'
                    }
                }
            },

            colorPanel: {
                'display': 'inline-block',
                'width': '36px',
                'height': '36px',
                'verticalAlign': 'middle',
                'border': '1px solid rgba(127,127,127,0.5)',
                'marginRight': '5px',
                'cursor': 'pointer'
            },

            label: {
                'margin': '0',
                'padding': '0',
                'border': '0',
                'fontSize': '100%',
                'font': 'inherit',
                'verticalAlign': 'baseline',
                'textDecoration': 'none'
            }
        }
    );
});