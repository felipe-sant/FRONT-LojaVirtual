import LinkType from "./LinkType";

type NavMenuProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    links: LinkType[];
    location: string;
}

export default NavMenuProps;