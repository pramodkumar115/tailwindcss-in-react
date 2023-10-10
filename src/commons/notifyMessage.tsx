import React from "react"
import { createRoot } from "react-dom/client";

export interface NotificationConfig {
    type?: 'success' | 'error' | 'info' | 'warning',
    closeIcon?: boolean,
    duration?: number,
    placement?: 'top-left' | 'top-center' | 'top-right' | 'center'
    | 'bottom-left' | 'bottom-center' | 'bottom-right'
}
export const notifyMessage = (message: string, config: NotificationConfig) => {
    const el = document.createElement('div');
    el.setAttribute("id", 'notification');
    document.getElementById("root")?.append(el);
    createRoot(el).render(<Notification message={message} config={config} />);
    if (config?.duration) {
        setTimeout(() => {
            removeNotification();
        }, config?.duration * 1000);
    }
}

const removeNotification = () => {
    const el = document.getElementById('notification');
    if (el) {
        el.remove();
    }
}

const typeColorMap = {
    success: 'bg-green-800', error: 'bg-red-700', info: 'bg-blue-500', warning: 'bg-orange-600'
}

const placementClassMap = {
    'top-left': ['top-0', 'left-0'],
    'top-center': ['top-0', 'left-1/2', '-translate-x-1/2'],
    'top-right': ['top-0', 'right-0'],
    'center': ['top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2'],
    'bottom-left': ['bottom-0', 'left-0'],
    'bottom-center': ['bottom-0', 'left-1/2', '-translate-x-1/2'],
    'bottom-right': ['bottom-0', 'right-0'],
}

const Notification: React.FC<{ message: string, config: NotificationConfig }> = ({ message, config }) => {
    const getStyleClasses = () => {
        const classNames = ['text-white', 'w-80', 'h-fit', 'shadow-2xl'];
        classNames.push(typeColorMap[config?.type ?? 'info']);
        return Array.from(new Set(classNames)).join(" ")
    }
    return (
        <div className={`absolute p-4
        ${placementClassMap[config?.placement ?? 'top-right'].join(" ")}`}>
            <div className={getStyleClasses()}>
                <div className={`border-b font-bold border-b-white p-3 flex 
                justify-between`}>
                    <span>{(config.type ?? 'Info').toLocaleUpperCase()}</span>
                    {(config?.closeIcon ?? true) && <span className={"cursor-pointer"} onClick={removeNotification}>&#x2715;</span>}
                </div>
                <div className={'p-3'}>{message}</div>
            </div>
        </div>)
}