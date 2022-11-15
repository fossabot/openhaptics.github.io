// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'about',
    {
      type: 'category',
      label: 'Flashing Firmware',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'flashing',
        },
      ],
    },
    {
      type: 'category',
      label: 'Connecting to device',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'connecting',
        },
      ],
    },
  ],

  hardware: [
    {type: 'autogenerated', dirName: 'hardware'},
  ],
};

module.exports = sidebars;
