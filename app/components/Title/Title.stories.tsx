import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from "./Title";

export default {
    /* ๐ The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Components/Title',
    component: Title,
} as ComponentMeta<typeof Title>;

//๐ We create a โtemplateโ of how args map to rendering
const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const TitleExample = Template.bind({});
TitleExample.args = { children: 'Title example'  };

//๐ Each story then reuses that template
export const Subtitle = Template.bind({});
Subtitle.args = { isSubtitle: true, children: 'Subtitle example'  };
