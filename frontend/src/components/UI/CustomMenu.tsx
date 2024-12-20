import { Menu } from '@neo4j-ndl/react';
import { Menuitems } from '../../types';
export default function CustomMenu({
  open,
  closeHandler,
  items,
  anchorOrigin,
  isRoot = false,
}: {
  open: boolean;
  closeHandler: (
    event: Event | undefined,
    closeReason: {
      type: 'backdropClick' | 'itemClick' | 'escapeKeyDown';
      id?: string;
    }
  ) => void;
  items: Menuitems[] | undefined;
  anchorOrigin: React.RefObject<HTMLElement | null>;
  isRoot?: boolean;
}) {
  console.log()
  return (
    <Menu isOpen={open} anchorRef={anchorOrigin} className='custom-menu' isRoot={isRoot} onClose={closeHandler}>
      {items?.map((i, index) => (
      <Menu.Item
        key={`${i.title}-${index}`}
        title={i.title}
        onClick={i.onClick}
        isDisabled={i.disabledCondition}
        className={i.isSelected ? i.selectedClassName : ''}
        description={i.description}
      />
      ))}
    </Menu>
  );
}
