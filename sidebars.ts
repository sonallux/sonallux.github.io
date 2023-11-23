import type {SidebarItemsGeneratorOption} from '@docusaurus/plugin-content-docs/lib/sidebars/types';

export const sidebarItemsGenerator: SidebarItemsGeneratorOption = async ({
  defaultSidebarItemsGenerator,
  ...args
}) => {
  const sidebarItems = await defaultSidebarItemsGenerator(args);
  return [
    ...sidebarItems,
    {
      type: 'link',
      label: 'All Tags',
      href: '/docs/tags',
    },
  ];
}
