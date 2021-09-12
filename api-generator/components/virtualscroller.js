const VirtualScrollerProps = [
    {
        name: "items",
        type: "array",
        default: "null",
        description: "An array of objects to display."
    },
    {
        name: "itemSize",
        type: "number|array",
        default: "null",
        description: "The height/width of item according to orientation."
    },
    {
        name: "scrollHeight",
        type: "string",
        default: "null",
        description: "Height of the scroll viewport."
    },
    {
        name: "scrollWidth",
        type: "string",
        default: "null",
        description: "Width of the scroll viewport."
    },
    {
        name: "orientation",
        type: "string",
        default: "vertical",
        description: "The orientation of scrollbar, valid values are 'vertical', 'horizontal' and 'both'."
    },
    {
        name: "numToleratedItems",
        type: "number",
        default: "null",
        description: "Determines how many additional elements to add to the DOM outside of the view. According to the scrolls made up and down, extra items are added in a certain algorithm in the form of multiples of this number. Default value is half the number of items shown in the view."
    },
    {
        name: "delay",
        type: "number",
        default: "0",
        description: "Delay in scroll before new data is loaded."
    },
    {
        name: "lazy",
        type: "boolean",
        default: "false",
        description: "Defines if data is loaded and interacted with in lazy manner."
    },
    {
        name: "showLoader",
        type: "boolean",
        default: "false",
        description: "Whether to show loader."
    },
    {
        name: "style",
        type: "any",
        default: "null",
        description: "Inline style of the component."
    },
    {
        name: "class",
        type: "string",
        default: "null",
        description: "Style class of the component."
    }
];

const VirtualScrollerEvents = [
    {
        name: "scroll-index-change",
        description: "Callback to invoke when scroll position and item's range in view changes.",
        arguments: [
            {
                name: "event.first",
                type: "number",
                description: "First index of the new data range to be loaded."
            },
            {
                name: "event.last",
                type: "number",
                description: "Last index of the new data range to be loaded."
            }
        ]
    },
    {
        name: "lazy-load",
        description: "Callback to invoke in lazy mode to load new data.",
        arguments: [
            {
                name: "event.first",
                type: "number",
                description: "First index of the new data range to be loaded."
            },
            {
                name: "event.last",
                type: "number",
                description: "Last index of the new data range to be loaded."
            }
        ]
    }
];

const VirtualScrollerSlots = [
    {
        name: "item",
        description: "Content for the item"
    },
    {
        name: "content",
        description: "Custom content for the component"
    },
    {
        name: "loader",
        description: "Custom content for the loader items"
    }
];

module.exports = {
    virtualscroller: {
        name: "VirtualScroller",
        description: "VirtualScroller is a performant approach to handle huge data efficiently.",
        props: VirtualScrollerProps,
        events: VirtualScrollerEvents,
        slots: VirtualScrollerSlots
    }
};