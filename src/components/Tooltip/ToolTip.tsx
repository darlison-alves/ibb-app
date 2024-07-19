import { TooltipInterface, TooltipOptions, Tooltip as Tlp } from "flowbite";

export const Tooltip = ({ id = "", message = "", children }: any) => {
    const custon_id = `${id}Content`
    // set the tooltip content element
    const $targetEl: HTMLElement | null = document.getElementById(custon_id);

    // set the element that trigger the tooltip using hover or click
    const $triggerEl: HTMLElement | null = document.getElementById(id);
    

    // options with default values
    const options: TooltipOptions = {
        placement: 'top',
        triggerType: 'hover',
        onHide: () => {
            console.log('tooltip is shown');
        },
        onShow: () => {
            console.log('tooltip is hidden');
        },
        onToggle: () => {
            console.log('tooltip is toggled');
        }
    };

    const tooltip: TooltipInterface = new Tlp($targetEl, $triggerEl, options);

    if($triggerEl) {
        $triggerEl.onmouseover = () => {
            tooltip.show()
        }
    }

    return (
        <>
            <div id={custon_id} role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                {message}
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            { children }
        </>
    )
}