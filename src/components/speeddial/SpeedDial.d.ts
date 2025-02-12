import { VNode } from 'vue';

interface SpeedDialProps {
    model?: any[];
    visible?: boolean;
    direction?: string;
    transitionDelay?: number;
    type?: string;
    radius?: number;
    mask?: boolean;
    disabled?: boolean;
    hideOnClickOutside?: boolean;
    buttonClassName?: string;
    maskStyle?: string;
    maskClassName?: string;
    showIcon?: string;
    hideIcon?: string;
    rotateAnimation?: boolean;
    class?: string;
    style?: any;
}

declare class SpeedDial {
    $props: SpeedDialProps;
    $emit(eventName: 'click', event: Event): this;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $slots: {
        item: VNode[];
        button: VNode[];
    };
}

export default SpeedDial;
