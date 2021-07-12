import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'YoutubeCloneWebPartStrings';
import YoutubeClone from './components/YoutubeClone';
import { IYoutubeCloneProps } from './components/IYoutubeCloneProps';

export interface IYoutubeCloneWebPartProps {
  description: string;
}

export default class YoutubeCloneWebPart extends BaseClientSideWebPart<IYoutubeCloneWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IYoutubeCloneProps> = React.createElement(
      YoutubeClone,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
