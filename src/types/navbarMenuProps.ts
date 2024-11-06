import LinkType from "./LinkType";

type NavbarMenuProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    links: LinkType[];
    location: string;
}

export default NavbarMenuProps;