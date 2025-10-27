import {ReactNode} from "react";
import {IconName} from "@/types/icon";

export interface OptionItem {
    id: string,
    label: string,
    iconName?: IconName,
    startText?: string,
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    options: OptionItem[];
    onSelect: (id: string) => void;
    selectedId?: string;
}
